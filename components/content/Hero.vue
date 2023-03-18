<script setup>
    defineProps(['image'])
</script>
<template>
    <div class="hero max-w-screen-2xl mx-auto px-4">
        <nuxt-img class="w-full object-contain" :src="image" alt="" />
        <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
</template>