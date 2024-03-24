import { serverQueryContent } from '#content/server'
import { apiPlugin, storyblokInit } from '@storyblok/js';
import { SitemapStream, streamToPromise } from 'sitemap'

interface Link {
  /* eslint-disable @typescript-eslint/naming-convention */
  id: number
  slug: string
  name: string
  is_folder: boolean
  parent_id: number
  published: boolean
  position: number
  uuid: string
  is_startpage: boolean
  real_path: string
  _path: string
  _file: string
  published_at: string
  /* eslint-enable @typescript-eslint/naming-convention */
}

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find();

  // Fetch all conetnt from Storyblok
  const {
    public: {
        storyblokVersion,
        storyblok: {
          accessToken,
        },
    },
  } = useRuntimeConfig();

  const { storyblokApi } = storyblokInit({
      accessToken,
      use: [apiPlugin],
  });
  let links: Link[] = [];

  if (storyblokApi) {
    const { data } = await storyblokApi.get('cdn/links', {
        version: storyblokVersion as 'draft' | 'published',
    });
    links = (Object.values(data.links) as Link[])
      .filter((link) => (
        !link.real_path.includes('/global')
    ));
  }

  const sitemap = new SitemapStream({
    hostname: process.env.SITE_URL,
    xmlns: {
      image: false,
      video: false,
      news: false,
    }
  });

  for (const story of links) {
    let priority = 0.7;
    let changefreq = 'monthly';
    if (story.is_startpage) {
      priority = 0.9;
    };
    if (story.real_path === '/') {
      priority = 1;
    }
    if (story.published) {
      sitemap.write({
        url: story.real_path,
        changefreq: changefreq,
        lastmod: story.published_at,
        priority: priority,
      })
    }
  }

  for (const doc of docs) {
    let priority = 0.7;
    let changefreq = 'monthly';
    try {
      if (doc._path === '/kaupungit') {
        priority = 0.9;
        changefreq = 'weekly';
      }
    } catch (e) {
      // console.error(e)
    }
    try {
      sitemap.write({
        url: doc._path,
        changefreq: changefreq,
        priority: priority,
        lastmodfile: `content/${doc._file}`,
        lastmodrealtime: true
      })
    } catch (e) {
      // console.error(e)
    }
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
