<script setup lang="ts">
defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: "" },
});

const role = computed(() => (props.alt ? "" : "presentation"));
</script>
<template>
  <nuxt-img :src="src" loading="lazy" :alt="alt" quality="60" format="webp" />
</template>