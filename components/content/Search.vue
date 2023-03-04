<script setup lang="ts">
const { result, search } = useAlgoliaSearch("dev_koirametsat");

onMounted(async () => {
  // await search({ query: "Samsung" });
});
</script>

<template>
    <h2>Tehokas haku</h2>
  <div>{{ result }}</div>
</template>