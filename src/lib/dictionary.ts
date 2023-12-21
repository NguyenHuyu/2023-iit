import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = {
  vi: () => import('@/i18n/home/vi.json').then((module) => module.default),
  en: () => import('@/i18n/home/en.json').then((module) => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
