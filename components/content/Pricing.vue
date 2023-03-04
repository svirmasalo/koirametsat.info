<script setup lang="ts">
    defineProps(['price', 'pricePrefix', 'priceSuffix', 'priceUnit'])
</script>
<template>
    <div class="max-w-sm border border-emerald-400 rounded">
        <div class="text-slate-900 p-4">
            <p class="text-lg">{{ pricePrefix }} {{ price }} {{ priceSuffix }}</p>
        </div>
    </div>
</template>