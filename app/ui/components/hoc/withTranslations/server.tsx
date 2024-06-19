import 'server-only'
import type { ComponentType } from 'react'

import { languages } from 'app/i18n/settings'
import { useTranslation as useTranslationServer } from 'app/i18n'
import type { Translations, WrappedComponentType } from './types'

function withTranslations<T> (Component: ComponentType<T & Translations>): WrappedComponentType<T> {
  let WrappedComponent: WrappedComponentType<T>;
  const [lng] = languages;

  WrappedComponent = async (props: T) => {
    const { t } = await useTranslationServer(lng)
    return <Component {...(props as T)} t={t} />
  }

  WrappedComponent.displayName = `withTranslationsServer(${Component.displayName})`
  return WrappedComponent
}

export default withTranslations
