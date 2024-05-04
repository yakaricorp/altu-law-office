'use server'

import path from 'path'
import { URL } from 'url'

// import { z } from "zod"

import { Severity, FormState } from '@/lib/definitions'

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

function getTelegramApiUrl(endpoint: string): URL {
  const botToken = `bot${process.env.TELEGRAM_API_TOKEN}`
  const url = new URL(process.env.TELEGRAM_API_URL as string)
  url.pathname = path.join(botToken, endpoint)
  return url
}

function getTelegramApiHeaders() {
  return {
    'Content-Type': 'application/json'
  }
}

export async function actionContactSendMessage(prevState: FormState, formData: FormData): Promise<FormState> {
  const formValues = {
    name: String(formData.get('name')).trim(),
    email: String(formData.get('email')).trim(),
    message: String(formData.get('message')).trim(),
  }

  const body = {
    chat_id: process.env.TELEGRAM_API_CHAT_ID,
    text: [
      `Name: ${formValues.name}`,
      `Contact: ${formValues.email}`,
      '', formValues.message,
    ].join('\n'),
  }

  let response;
  try {
    const res = await fetch(
      getTelegramApiUrl('sendMessage'),
      {
        method: 'POST',
        headers: getTelegramApiHeaders(),
        body: JSON.stringify(body)
      },
    )
  
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
