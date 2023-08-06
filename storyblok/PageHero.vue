<template>
    <header class="pt-16 pb-12 px-4" v-editable="blok" data-test="page-hero">
        <div class="container text-center">
            <h1 class="text-lg">{{ blok.title }}</h1>
            <p>{{ blok.subtitle }}</p>
        </div>
    </header>
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
  