<script setup lang="ts">
defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: "" },
});

</script>
<template>
  <NuxtImg :src="src" loading="lazy" :alt="alt" quality="60" format="webp" />
</template>