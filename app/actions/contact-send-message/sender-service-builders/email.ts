import { URL } from 'url'
import assert from 'assert'

import { FormState, Severity } from 'app/lib/definitions'

import {
  ISenderServiceBuilder,
  SenderServiceResponseHandler,
} from "./_base";

type EmailMessageRequestBody = {
  name: string
  email: string
  message: string
}

type EmailMessageContent = EmailMessageRequestBody

export class EmailSender implements ISenderServiceBuilder<
  EmailMessageRequestBody,
  EmailMessageContent
> {
  readonly url: URL
  readonly body: EmailMessageRequestBody
  readonly headers = {
    'Content-Type': 'application/json',
    'x-api-key': process.env.GW_API_KEY as string,
  }

  private readonly endpoint = 'contact-send-message'
  constructor() {
    assert.ok(typeof process.env.GW_URL === 'string', 'GW_URL not defined')
    assert.ok(typeof process.env.GW_API_KEY === 'string', 'GW_API_KEY not defined')
    this.url = new URL(this.endpoint, process.env.GW_URL as string)
    this.body = {
      name: '',
      email: '',
      message: '',
    }
  }

  withEndpoint(endpoint?: string): this {
    if (endpoint) {
      this.url.pathname = endpoint.trim()
    }
    return this
  }

  withContent(content: EmailMessageRequestBody): this {
    this.body.name = content.name.trim()
    this.body.email = content.email.trim()
    this.body.message = content.message.trim()
    return this
  }

  build(): Promise<Response> {
    return fetch(this.url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(this.body),
    })
  }
}

export class EmailSenderResponseHandler extends SenderServiceResponseHandler {
  static async handlePromise(promise: Promise<Response>): Promise<FormState> {
    let response, json
    try {
      response = await promise
      json = await response.json()
    } catch (err) {
      console.error(err)
      return {
        severity: Severity.ERROR_HIGH,
        messages: ['server_error']
      }
    }

    switch(response.status) {
      case 200:
        return {
          severity: Severity.INFO,
          messages: ['success']
        }
      case 400:
        return {
          severity: Severity.ERROR_LOW,
          messages: json.messages as string[]
        }
      case 401:
        return {
          severity: Severity.ERROR_HIGH,
          messages: ['auth-error']
        }
      case 403:
      default:
        return {
          severity: Severity.ERROR_HIGH,
          messages: ['server-error']
        }
    }
  }
}
