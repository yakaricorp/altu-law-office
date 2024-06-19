'use server'

import type { FormState } from 'app/lib/definitions'
import { EmailSender, EmailSenderResponseHandler } from './sender-service-builders/email'

export async function actionContactSendMessage(prevState: FormState, formData: FormData): Promise<FormState> {
  const formValues = {
    name: String(formData.get('name')).trim(),
    email: String(formData.get('email')).trim(),
    message: String(formData.get('message')).trim(),
  }

  const emailSenderPromise = new EmailSender()
    .withContent(formValues)
    .build()
  return await EmailSenderResponseHandler.handlePromise(emailSenderPromise)
}
