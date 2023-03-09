<script setup>
    const props = defineProps(['to', 'label']);
</script>
<template>
    <span>
        <NuxtLink :to="to">
            {{ label }}
        </NuxtLink>
    </span>
</template>