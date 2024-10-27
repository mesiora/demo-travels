// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-09-29',

  devtools: { enabled: true },

  ssr: false,

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
    '@hypernym/nuxt-gsap',
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
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: 'en',
        language: 'en-US',
      },
      {
        code: 'th',
        language: 'th-TH',
      },
    ],
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
