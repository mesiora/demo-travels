import en from '~/lang/en-US.json'
import th from '~/lang/th-TH.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    th,
  },
  fallbackLocale: 'en',
}))
