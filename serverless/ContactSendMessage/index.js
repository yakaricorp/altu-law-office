const functions = require('@google-cloud/functions-framework')
const nodemailer = require('nodemailer')
const z = require('zod')

const globalLogFields = {};
let transporter;
let reqBodySchema = z.object({
  name: z.string().trim().min(3).max(80),
  email: z.string().trim().email().max(300),
  message: z.string().trim().min(50).max(300),
}).strict();

functions.http('handler', async (req, res) => {
  if (typeof req !== 'undefined') {
    const traceHeader = req.header('X-Cloud-Trace-Context')
    if (traceHeader) {
      const [trace] = traceHeader.split('/');
      globalLogFields['logging.googleapis.com/trace'] =
        `projects/${process.env.PROJECT}/traces/${trace}`
    }
  }

  const validatedBody = reqBodySchema.safeParse(req.body)

  if (!validatedBody.success) {
    return res.status(400).json({
      messages: validatedBody.error.issues.map((issue =>
        `${issue.path[0]}.${issue.code}`
      ))
    })
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.MAIL_SERVICE_HOST,
      port: process.env.MAIL_SERVICE_PORT,
      secure: true,
      auth: {
        type: "OAuth2",
        user: process.env.MAIL_SERVICE_SENDER_ADDRESS,
        clientId: process.env.MAIL_SERVICE_CLIENT_ID,
        clientSecret: process.env.MAIL_SERVICE_CLIENT_SECRET,
        refreshToken: process.env.MAIL_SERVICE_REFRESH_TOKEN,
        accessToken: process.env.MAIL_SERVICE_ACCESS_TOKEN,
        expires: process.env.MAIL_SERVICE_TOKEN_EXPIRY,
      },
    })
  }

  const body = validatedBody.data
  try {
    await transporter.sendMail({
      to: process.env.MAIL_SERVICE_RECEIVER_ADDRESS,
      subject: "This is a test email!",
      text: body.message,
    });
  } catch (ex) {
    console.log(JSON.stringify({
      severity: 'ERROR',
      message: ex.message,
      component: 'contact-send-message',
      ...globalLogFields
    }));
    return res.status(403).json({ messages: [] })
  }

  return res.status(200).json({ messages: [] })
});
