import { URL } from 'url'
import { FormState, Severity } from '@/lib/definitions'

type HeaderKeys = 'Content-Type' | 'x-api-key'

export interface ISenderServiceBuilder<TBodyType, TContentType> {
  readonly url: URL
  readonly body: TBodyType
  readonly headers: {
    [K in HeaderKeys]?: string
  }

  withEndpoint: (endpoint?: string) => this
  withContent: (content: TContentType) => this
  build: () => Promise<Response>
}

export abstract class SenderServiceResponseHandler {
  static async handlePromise(promise: Promise<Response>): Promise<FormState> {
    throw new Error('SenderServiceResponseHandler.handlePromise() not implemented')
  }
}
