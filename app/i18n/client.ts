import i18next from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import { defaultNS, getOptions, languages } from './settings'

const runsOnServerSide = typeof window === 'undefined'
const [lng] = languages

i18next
  .use(initReactI18next)
  .use(resourcesToBackend(
    (language: string) => import(`./locales/${language}.json`)
  ))
  .init({
    ...getOptions(),
    lng,
    preload: runsOnServerSide ? languages : [],
  })

export function useTranslation(ns = defaultNS, options = {}) {
  return useTranslationOrg(ns, options)
}
