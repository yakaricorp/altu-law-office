'use server'

import crypto from 'crypto'

type ContactSendMessageFormData = {
  name: string
  email: string
  phoneNumber: string
  message: string
}

export async function contactSendMessage(formData: FormData) {
  console.log('contactSendMessage server action')
  return {
    some: 'message',
    key: crypto.randomUUID()
  }
}
