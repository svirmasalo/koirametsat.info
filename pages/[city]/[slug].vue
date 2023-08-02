<script setup>

definePageMeta({
  key: route => route.fullPath
})

const route = useRoute();
const parkQuery = await queryContent({
  where: {
    _path: route.path,
  },
}).findOne();


// Capitalize city name for meta tags. City name = route.params.city
const city = route.params.city.charAt(0).toUpperCase() + route.params.city.slice(1);
// Slug is used for review collection name in firebase
const slug = `${route.params.slug}-${useSlugify(route.params.city)}`;

if (parkQuery) {
  useHead({
    meta: [
      {
        name: "author",
        content: "Koirametsät.info",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        name: "googlebot",
        content: "index, follow",
      },
      {
        name: "og:title",
        content: `${parkQuery.title}`,
      },
      {
        name: "og:url",
        content: `https://koirametsat.info${route.path}`,
      },
      {
        name: "description",
        content: `${parkQuery.description} Koirametsän sijainti: ${city}.`,
      },
      {
        name: "og:description",
        content: `${parkQuery.description} Koirametsän sijainti: ${city}.`,
      }
    ],
    link: [
      {
        rel: "canonical",
        href: `https://koirametsat.info${route.fullPath}`,
      },
    ],
  });
}
</script>
<template>
  <div itemscope itemtype="https://schema.org/LocalBusiness">
    <!-- Skip to main content link -->
    <a class="sr-only" href="#main">Siirry sisältöön</a>
    <meta itemprop="name" :content="parkQuery.title" />
    <meta itemprop="description" :content="parkQuery.description" />
    <meta itemprop="addressLocality" :content="city" />
    <meta itemprop="addressRegion" content="FI" />
    <meta itemprop="url" :content="`https://koirametsat.info${route.path}`" />
    <Breadcrumbs :path="route.path" :curPageTitle="parkQuery.title"/>
    <ContentDoc />
    <div class="bg-secondary">
      <Review :slug="slug" />
    </div>
    <SchemaOrgWebPage />
  </div>
</template>