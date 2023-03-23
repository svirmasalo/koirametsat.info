// https://nuxt.com/docs/api/configuration/nuxt-config
import cookieSettings from "./cookies";
import cookieUi from "./cookieUi";
import cookieTexts from "./cookieTexts";
import gtmNoscript from "./gtmNoscript";
import metaNoscript from "./metaNoscript";

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "fi",
      },
      meta: [
        {
          name: "facebook-domain-verification",
          content: process.env.META_VERIFICATION,
        },
        {
          property: "og:image",
          content: "/images/koirametsat-info-og-meta.jpg",
        },
      ],
      script: [
        {
          src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.ADSENSE_ID}`,
          async: true,
          crossorigin: "anonymous",
        },
      ],
      noscript: [{ children: gtmNoscript }, { children: metaNoscript }],
    },
  },
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
  runtimeConfig: {
    public: {
      GTAG_ID: process.env.GTAG_ID,
      META_ID: process.env.META_ID,
      siteUrl: process.env.SITE_URL,
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxtjs/algolia",
    "@nuxt/image-edge",
    "@dargmuesli/nuxt-cookie-control",
    "nuxt-schema-org",
  ],
  nitro: {
    prerender: {
      routes: ["sitemap.xml"],
    },
    routeRules: {
      "/robots.txt": { headers: { "Content-Type": "text/plain" } },
      "/sitemap.xml": { headers: { "Content-Type": "application/xml" } },
    },
  },
  cookieControl: {
    barPosition: "bottom-full",
    domain: process.env.SITE_URL,
    locales: ["en"],
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
  schemaOrg: { 
    host: process.env.SITE_URL,
    image: "/images/koirametsat-info-og-meta.jpg",
    inLanguage: "fi",
  },
});
