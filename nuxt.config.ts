// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    "@nuxt/content",
    '@nuxtjs/algolia',
    // './modules/nuxt3ContentAlgolia'
  ],
  css: ['~/assets/css/main.css'],
  nitro: {
    prerender: {
      routes: ['sitemap.xml']
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
