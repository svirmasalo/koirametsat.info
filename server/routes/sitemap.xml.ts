import consola from "consola";

import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find();

  const sitemap = new SitemapStream({
    hostname: process.env.SITE_URL,
    xmlns: {
      image: false,
      video: false,
      news: false,
    }
  });

  for (const doc of docs) {
    let priority = 0.8;
    try {
      if (doc._path) {
        const depth = doc._path.split('/');
        priority = depth.length > 2 ? 1 : 0.8;
      }
      if (doc._path === '/kaupungit') {
        priority = 0.9;
      }
      if (doc._path === '/haku') {
        priority = 0.9;
      }
    } catch (e) {
      consola.error(e)
    }
    // consola.info(doc._file, priority);
    try {
      sitemap.write({
        url: doc._path,
        changefreq: 'weekly',
        priority: priority,
        lastmodfile: `content/${doc._file}`,
        lastmodrealtime: true
      })
    } catch (e) {
      consola.error(e)
    }
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
