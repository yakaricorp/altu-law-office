import { URL } from 'url'
import assert from 'assert'
import path from 'path'

type TelegramMessageRequestBody = {
  chat_id: string;
  text: string;
}

type TelegramMessageContent = {
  name: string;
  email: string;
  message: string;
}

function getHeaders() {
  return {
    'Content-Type': 'application/json'
  }
}

export default class TelegramSender {
  url: URL
  body: TelegramMessageRequestBody

  constructor() {
    assert.ok(typeof process.env.TELEGRAM_API_URL === 'string', 'TELEGRAM_API_URL not defined')
    assert.ok(typeof process.env.TELEGRAM_API_CHAT_ID === 'string', 'TELEGRAM_API_CHAT_ID not defined')
    this.url = new URL(process.env.TELEGRAM_API_URL as string)
    this.body = {
      chat_id: process.env.TELEGRAM_API_CHAT_ID as string,
      text: '',
    }
  }

  withEndpoint(endpoint: string): TelegramSender {
    if (endpoint) {
      assert.ok(typeof process.env.TELEGRAM_API_TOKEN === 'string', 'TELEGRAM_API_TOKEN not defined')
      const botToken = `bot${process.env.TELEGRAM_API_TOKEN}`
      this.url.pathname = path.join(botToken, endpoint)
    }
    return this
  }

  withContent(content: TelegramMessageContent): TelegramSender {
    this.body.text = [
      `Name: ${content.name}`,
      `Contact: ${content.email}`,
      '', content.message,
    ].join('\n')
    return this
  }

  build(): Promise<any> {
    return fetch(this.url, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(this.body)
    })
  }
}
