<script setup>
const route = useRoute();
console.log(route.fullPath);
const parkQuery = await queryContent({
  where: {
    _path: route.fullPath,
  },
}).findOne();

// Capitalize city name for meta tags. City name = route.params.city
const city = route.params.city.charAt(0).toUpperCase() + route.params.city.slice(1);

const slug = route.params.slug;

if (parkQuery) {
  useHead({
    meta: [
      {
        name: "keywords",
        content: `koirametsä ${parkQuery.title}, ${parkQuery.title}`,
      },
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
        content: `${parkQuery.title} - ${city} - Koirametsät.info`,
      },
      {
        name: "og:url",
        content: `https://koirametsat.info${route.fullPath}`,
      },
      {
        name: "description",
        content: `${parkQuery.description} Koirametsän sijainti: ${city}.`,
      }
    ],
  });
}
</script>
<template>
  <ContentDoc />
  <div class="bg-secondary">
    <Review :slug="slug" />
  </div>
  <SchemaOrgWebPage />
</template>