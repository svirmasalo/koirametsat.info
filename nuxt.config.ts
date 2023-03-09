// https://nuxt.com/docs/api/configuration/nuxt-config
import cookieSettings from "./cookies";
import cookieUi from "./cookieUi";
import cookieTexts from "./cookieTexts";

export default defineNuxtConfig({
  algolia: {
    applicationId: process.env.ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_SEARCH_KEY,
    instantSearch: {
      theme: "reset",
    },
  },
  content: {
    api: {
      baseURL: "/api/_my_content",
    },
    markdown: {
      anchorLinks: false,
    },
  },
  css: ["~/assets/css/main.css"],
  /*
  "google-adsense": { 
    id: process.env.ADSENSE_ID, 
    analyticsDomainName: "koirametsat.info",
    onPageLoad: true,
  },
  */
  modules: [
    "@nuxt/content",
    "@nuxtjs/algolia",
    "@nuxt/image-edge",
    "@dargmuesli/nuxt-cookie-control",
    /* "@nuxtjs/google-adsense", */
  ],
  nitro: {
    prerender: {
      routes: ["sitemap.xml"],
    },
  },
  cookieControl: {
    barPosition: 'bottom-full',
    domain: process.env.SITE_URL,
    locales: ['en'],
    cookies: cookieSettings,
    ...cookieUi,
    localeTexts: cookieTexts,
    isControlButtonEnabled: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
});
