// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      titleTemplate: "%s - Nuxt 3 Simple Starter",
      title: "Home",
    },
  },

  routeRules: {
    "/api/**": {
      proxy: {
        to: `${process.env.PROXY_API_BASE}/**`,
      },
    },
  },

  css: ["@/assets/css/main.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/eslint",
  ],

  eslint: {
    config: {
      stylistic: true,
    },
  },

  i18n: {
    locales: [
      {
        code: "en",
        file: "en-US.json",
      },
      {
        code: "th",
        file: "th-TH.json",
      },
    ],
    lazy: true,
    langDir: "lang",
    defaultLocale: "en",
  },

  googleFonts: {
    families: {
      Inter: true,
    },
  },

  postcss: {
    plugins: {
      "postcss-nested": {},
      "postcss-hexrgba": {},
      "postcss-import": {},
    },
  },
});
