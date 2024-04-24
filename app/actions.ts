'use server'

import crypto from 'crypto'
import path from 'path'
import { URL } from 'url'

import { Severity, FormState } from '@/lib/definitions'

type ContactSendMessageFormData = {
  name: string
  email: string
  phoneNumber: string
  message: string
}

export async function actionContactSendMessage(prevState: FormState, formData: FormData): Promise<FormState> {
  console.log('contactSendMessage server action', URL)
  formData.entries()
  const url = new URL('contact-send-message', process.env.GW_URL)
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    })
  })

  const json = await res.json()

  console.dir(json)
  return {
    severity: Severity.INFO,
    message: 'Ffrom server'
  }
}
