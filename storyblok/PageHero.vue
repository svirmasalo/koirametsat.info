<template>
    <div class="container text-center" v-editable="blok" data-test="page-hero">
        <h1 class="text-lg">{{ blok.title }}</h1>
        <p>{{ blok.subtitle }}</p>
    </div>
</template>
<script setup>
    defineProps({ blok: Object });
</script>
<style scoped>
    :deep(h1) {
        @apply text-4xl font-bold text-secondary leading-tight mb-2;
    }
    :deep(p) {
        @apply text-sm text-secondary leading-relaxed px-4;
    }
</style>
  