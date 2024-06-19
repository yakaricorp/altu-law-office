import { type ReactNode } from 'react'
import { type TFunction } from 'i18next'

export type Translations = {
  t: TFunction<'', undefined>
}

export type WrappedComponentType<P> = {
  (props: P): ReactNode
  displayName?: string
}

