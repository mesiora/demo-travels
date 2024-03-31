// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/eslint-module",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
  ],

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

  postcss: {
    plugins: {
      "postcss-nested": {},
      "postcss-hexrgba": {},
      "postcss-import": {},
    },
  },
});
