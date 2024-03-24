import { type SERPBlock } from "~~/types/stories";


export const useParseSerp = (serp: SERPBlock, siteUrl: string) => {
    //Strip trailing slash from url in serp block
    serp.canonical.cached_url = serp.canonical.cached_url.replace(/\/$/, "");
    
    return {
        title: `${serp.meta_title} - Koirametsät.info`,
        meta: [
            {
            hid: "description",
            name: "description",
            content: serp.meta_description,
            },
            {
            hid: "og:title",
            property: "og:title",
            content: serp.meta_title,
            },
            {
            hid: "og:description",
            property: "og:description",
            content: serp.meta_description,
            },
            {
            hid: "og:image",
            property: "og:image",
            content: serp.meta_image,
            },
            {
            hid: "og:url",
            property: "og:url",
            content: `${siteUrl}/${serp.canonical.cached_url}?utm_source=facebook&utm_medium=social`,
            },
            {
                hid: "robots",
                name: "robots",
                content: "index, follow",
            },
            {
                hid: 'author',
                name: 'author',
                content: 'Koirametsät.info / Tmi S. Virmasalo'
            },
            {
                hid: 'copyright',
                name: 'copyright',
                content: '© 2023 Tmi S. Virmasalo'
            }
        ],
        link: [
            {
              hid: "canonical",
              rel: "canonical",
              href: `${siteUrl}/${serp.canonical.cached_url}`,
            },
        ],
    }
  };