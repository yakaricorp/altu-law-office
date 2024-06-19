import { URL } from 'url'
import assert from 'assert'
import path from 'path'

import {
  ISenderServiceBuilder,
  SenderServiceResponseHandler,
} from './_base'

type TelegramMessageRequestBody = {
  chat_id: string;
  text: string;
}

type TelegramMessageContent = {
  name: string;
  email: string;
  message: string;
}

export class TelegramSender implements ISenderServiceBuilder<
  TelegramMessageRequestBody,
  TelegramMessageContent
> {
  readonly url: URL
  readonly body: TelegramMessageRequestBody
  readonly headers = {
    'Content-Type': 'application/json',
  }

  constructor() {
    assert.ok(typeof process.env.TELEGRAM_API_URL === 'string', 'TELEGRAM_API_URL not defined')
    assert.ok(typeof process.env.TELEGRAM_API_CHAT_ID === 'string', 'TELEGRAM_API_CHAT_ID not defined')
    this.url = new URL(process.env.TELEGRAM_API_URL as string)
    this.body = {
      chat_id: process.env.TELEGRAM_API_CHAT_ID as string,
      text: '',
    }
  }

  withEndpoint(endpoint?: string): this {
    if (endpoint) {
      assert.ok(typeof process.env.TELEGRAM_API_TOKEN === 'string', 'TELEGRAM_API_TOKEN not defined')
      const botToken = `bot${process.env.TELEGRAM_API_TOKEN}`
      this.url.pathname = path.join(botToken, endpoint)
    }
    return this
  }

  withContent(content: TelegramMessageContent): this {
    this.body.text = [
      `Name: ${content.name}`,
      `Contact: ${content.email}`,
      '', content.message,
    ].join('\n')
    return this
  }

  build(): Promise<Response> {
    return fetch(this.url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(this.body)
    })
  }
}

export class TelegramSenderResponseHandler extends SenderServiceResponseHandler {}
