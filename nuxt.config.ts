// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path');
import cookieSettings from "./cookies";
import cookieUi from "./cookieUi";
import cookieTexts from "./cookieTexts";
import gtmNoscript from "./gtmNoscript";
import metaNoscript from "./metaNoscript";
import redirects from "./redirects";

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
          content: `${process.env.SITE_URL}/images/koirametsat-info-og-meta.jpg`,
        },
        {
          property: "og:image:width",
          content: `1200`,
        },
        {
          property: "og:image:height",
          content: `630`,
        },
        {
          property: "og:type",
          content: `website`,
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: 'googlebot',
          content: 'index, follow'
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: 'og:site_name',
          content: 'Koirametsät.info'
        },
        {
          hid: 'google-adsense-account',
          name: 'google-adsense-account',
          content: 'ca-pub-4176977519112516'
        }

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
    ignores: [
      'storyblok',
    ],
    sources: {
      content: {
        driver: 'fs',
        base: path.resolve(__dirname, 'content')
      }
    }
  },
  css: ["~/assets/css/main.css"],
  devServer: {
    https: {
      key: 'localhost-key.pem',
      cert: 'localhost.pem'
    }
  },
  debug: process.env.STAGE === 'development' ? true : false,
  runtimeConfig: {
    public: {
      GTAG_ID: process.env.GTAG_ID,
      META_ID: process.env.META_ID,
      siteUrl: process.env.SITE_URL,
      storyblokVersion:  process.env.STAGE === 'draft' ? 'draft' : 'published',
    },
    firebase: {
      apiKey: process.env.VF_APIKEY,
      authDomain: process.env.VF_AUTHDOMAIN,
      projectId: process.env.VF_PROJECTID,
      appId: process.env.VF_APPID,
      storageBucket: process.env.VF_STORAGEBUCKET,
      messagingSenderId: process.env.VF_MESSAGINGSENDERID,
      measurementId: process.env.VF_MEASUREMENTID,
    }
  },
  modules: [
    "nuxt-security",
    "@nuxt/content",
    "@nuxtjs/algolia",
    "@nuxt/image",
    "@dargmuesli/nuxt-cookie-control",
    "nuxt-schema-org",
    "@formkit/nuxt",
    "@storyblok/nuxt",
    "nuxt-csurf"
  ],
  nitro: {
    preset: process.env.NITRO_PRESET,
    routeRules: {
      "/sitemap.xml": { headers: { "Content-Type": "application/xml" } },
    },
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml']
    }
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
  image: {
    dir: 'public/images',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    ...redirects,
  },
  schemaOrg: {
    host: process.env.SITE_URL,
    image: "/images/koirametsat-info-og-meta.jpg",
    inLanguage: "fi",
  },
  security: {
    headers: {
      contentSecurityPolicy: {
        'base-uri': ["'self'"],
        'font-src': ["'self'", 'https:', 'data:'],
        'form-action': ["'self'"],
        'frame-ancestors': ["'self'", "https:", "https://a.storyblok.com/"],
        'img-src': ["'self'", "https://a.storyblok.com/", "data:", "https://www.facebook.com/", "https://googleads.g.doubleclick.net", "https://www.google.com", "https://www.google.fi", "https://pagead2.googlesyndication.com"],
        'object-src': ["'self'", "https://a.storyblok.com/"],
        'script-src-attr': ["'self'", "https://a.storyblok.com/"],
        'style-src': ["'self'", 'https:', "'unsafe-inline'", "https://a.storyblok.com/"],
        'upgrade-insecure-requests': process.env.STAGE === 'DEV' ? false : true
      },
      crossOriginResourcePolicy: 'cross-origin',
      crossOriginEmbedderPolicy: 'unsafe-none',
    }
  },
  ssr: true,
  storyblok: {
    accessToken: process.env.STORYBLOK_TOKEN,
    devtools: process.env.MODE === 'development' ? true : false,
    apiOptions: {
      region: "eu"
    },
    enableSudoMode: true,
  },
  vite: {
    //...
    optimizeDeps: { exclude: ["fsevents"] },
  },
});
