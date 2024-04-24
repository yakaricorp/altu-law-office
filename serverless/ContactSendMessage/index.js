const functions = require('@google-cloud/functions-framework');

functions.http('handler', (req, res) => {
  res.json(req.body)
});
