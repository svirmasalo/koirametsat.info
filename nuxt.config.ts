// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  algolia: {
    applicationId: process.env.ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_SEARCH_KEY,
    instantSearch: {
      theme: "reset",
    },
    crawler: {
      apiKey: `${process.env.ALGOLIA_API_KEY}`,
      indexName: `${process.env.ALGOLIA_INDEX}`,
      meta: ["title", "description", "tags", "path"],
      include: () => true,
    },
  },
  content: {
    markdown:{
      anchorLinks: false
    }
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/content", "@nuxtjs/algolia", "@nuxt/image-edge"],
  nitro: {
    prerender: {
      routes: ["sitemap.xml"],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
});
