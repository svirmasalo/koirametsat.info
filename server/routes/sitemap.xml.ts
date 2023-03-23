import consola from "consola";

import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find();

  const sitemap = new SitemapStream({
    hostname: process.env.SITE_URL
  });

  for (const doc of docs) {
    try {
      sitemap.write({
        url: doc._path,
        changefreq: 'monthly'
      })
    } catch (e) {
      consola.error(e)
    }
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
