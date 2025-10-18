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

  ui: {
    colorMode: false,
  },

  svgo: {
    componentPrefix: 'svg',
    autoImportPath: './assets/icons/',
  },

  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', name: 'English', language: 'en-US', file: 'en-US.json' },
      { code: 'th', name: 'Thai', language: 'th-TH', file: 'th-TH.json' },
    ],
  },

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'gsap',
        'gsap/ScrollTrigger',
        'swiper/vue',
        'swiper/modules',
        'date-fns',
        'v-calendar',
      ],
    },
  },

  googleFonts: {
    families: {
      Prompt: [300, 400],
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
