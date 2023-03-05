<script setup>
    defineProps(['title', 'subtitle'])
</script>
<template>
    <header class="pt-16 pb-12 px-4 text-center">
        <ContentSlot :use="$slots.default" />
    </header>
</template>
<style scoped>
    :deep(h1) {
        @apply text-4xl font-bold text-secondary leading-tight mb-2;
    }
    :deep(p) {
        @apply text-sm leading-relaxed px-4;
    }
</style>