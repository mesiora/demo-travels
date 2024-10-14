// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-09-29',

  devtools: { enabled: true },

  nitro: {
    static: true,
  },

  app: {
    head: {
      titleTemplate: '%s - Travelers',
      title: 'Demo',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A demo Nuxt.js project',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['@/assets/css/main.css'],

  modules: [
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    'nuxt-svgo',
    '@nuxt/icon',
    'nuxt-swiper',
    '@nuxt/eslint',
  ],

  colorMode: {
    preference: 'light',
  },

  svgo: {
    componentPrefix: 'svg',
    autoImportPath: './assets/icons/',
  },

  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.json',
      },
      {
        code: 'th',
        file: 'th-TH.json',
      },
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en',
  },

  googleFonts: {
    families: {
      Prompt: [300, 500],
      Montserrat: [400, 500],
    },
  },

  postcss: {
    plugins: {
      'postcss-nested': {},
      'postcss-hexrgba': {},
      'postcss-import': {},
    },
  },
})
