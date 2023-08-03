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
    let priority = 0.7;
    let changefreq = 'monthly';
    try {
      if (doc._path === '/') {
        changefreq = 'monthly';
        priority = 1;
      }
      if (doc._path === '/kaupungit') {
        priority = 0.9;
        changefreq = 'weekly';
      }
      if (doc._path === '/mika-on-koirametsa' || doc._path === '/tietoa-palvelusta' || doc._path === '/haku') {
        priority = 0.8;
        changefreq = 'monthly';
      }
    } catch (e) {
      consola.error(e)
    }
    // consola.info(doc._file, priority);
    try {
      sitemap.write({
        url: doc._path,
        changefreq: changefreq,
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
