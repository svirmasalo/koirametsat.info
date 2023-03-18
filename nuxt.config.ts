// https://nuxt.com/docs/api/configuration/nuxt-config
import cookieSettings from "./cookies";
import cookieUi from "./cookieUi";
import cookieTexts from "./cookieTexts";
import gtmNoscript from "./gtmNoscript";
import metaNoscript from "./metaNoscript";
import robotsConfig from "./robots.config";

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name:"facebook-domain-verification", content:process.env.META_VERIFICATION
        },
      ],
      script: [
        {
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4176977519112516",
          async: true,
          crossorigin: "anonymous",
        }
        // { src: "js/gtm.js", defer: true },
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
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxtjs/algolia",
    "@nuxt/image-edge",
    "@dargmuesli/nuxt-cookie-control",
    '@nuxtjs/robots'
  ],
  nitro: {
    prerender: {
      routes: ["sitemap.xml"],
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
  robots: {
    config: robotsConfig
  },
  ssr: true,
});
