import { type TFunction, createInstance, type i18n } from "i18next"
import resourcesToBackend from "i18next-resources-to-backend"
import { defaultNS, getOptions, type TranslationOptions } from './settings'

async function initI18next(lng: string): Promise<i18n> {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(resourcesToBackend(
      (language: string) => import(`./locales/${language}.json`)
    ))
    .init(getOptions(lng))
  return i18nInstance
}

export async function useTranslation(lng: string, options: Partial<TranslationOptions> = {}): Promise<{
  t: TFunction<string, undefined>
  i18n: i18n
}> {
  const i18nextInstance = await initI18next(lng)
  return {
    t: i18nextInstance.getFixedT(lng, defaultNS, options.keyPrefix),
    i18n: i18nextInstance
  }
}
