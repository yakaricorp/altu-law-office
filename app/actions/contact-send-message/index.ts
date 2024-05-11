'use server'

// import { z } from "zod"

import { Severity, FormState } from '@/lib/definitions'
import TelegramSender from './sender-service-builders/telegram'

const RESPONSE = Object.freeze({
  SUCCESS: {
    severity: Severity.INFO,
    message: 'Message has been sent. You\'ll get the response within 24 hours.'
  },
  ERROR: {
    severity: Severity.ERROR_HIGH,
    message: 'There is an issue with sending the message. Please try again.'
  },
})

export async function actionContactSendMessage(prevState: FormState, formData: FormData): Promise<FormState> {
  const formValues = {
    name: String(formData.get('name')).trim(),
    email: String(formData.get('email')).trim(),
    message: String(formData.get('message')).trim(),
  }

  let response;
  try {
    const telegramSender = new TelegramSender()
      .withEndpoint('sendMessage')
      .withContent(formValues)
      .build()
    const res = await telegramSender
    response = await res.json()
    if (!response.ok) {
      return RESPONSE.ERROR
    }
  } catch (ex) {
    // TODO: log the ex
    return RESPONSE.ERROR
  }

  return RESPONSE.SUCCESS
}
