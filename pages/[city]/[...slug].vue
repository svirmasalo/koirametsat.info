<script setup>
const route = useRoute();
const parkQuery = await queryContent({
  where: {
    _path: route.fullPath,
  },
}).findOne();

// Capitalize city name for meta tags. City name = route.params.city
const city = route.params.city.charAt(0).toUpperCase() + route.params.city.slice(1);

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
  <SchemaOrgWebPage />
</template>