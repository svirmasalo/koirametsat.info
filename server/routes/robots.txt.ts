export default defineEventHandler(async (event) => {
return `User-agent: *
Disallow: /_content
Disallow: /_nuxt
Disallow: /_nuxt/*
# Sitemap
Sitemap: ${process.env.SITE_URL}/sitemap.xml
    `.trim();
})
