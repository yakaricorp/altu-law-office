import type { ComponentType } from 'react'

import { languages } from 'app/i18n/settings'
import { useTranslation as useTranslationClient } from 'app/i18n/client'
import type { Translations, WrappedComponentType } from './types'

function withTranslations<T> (Component: ComponentType<T & Translations>): WrappedComponentType<T> {
  let WrappedComponent: WrappedComponentType<T>;
  const [lng] = languages;

  WrappedComponent = (props: T) => {
    const { t } = useTranslationClient(lng)
    return <Component {...(props as T)} t={t} />
  }

  WrappedComponent.displayName = `withTranslationsClient(${Component.displayName})`
  return WrappedComponent
}

export default withTranslations
