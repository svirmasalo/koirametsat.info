export default defineEventHandler(async (event) => {
return `User-agent: *
Disallow:

# Sitemap
Sitemap: ${process.env.SITE_URL}/sitemap.xml
    `.trim();
})
