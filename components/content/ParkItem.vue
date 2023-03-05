
<script setup lang="ts">
defineProps({
  featureName: { type: String, default: "" },
  featureDescription: { type: String, default: "" },
  descriptionLink: { type: Boolean, default: false },
});
</script>
<template>
    <div class="feature border-b-2 borer-b-cloud not-prose pb-2 mb-2 px-1">
        <h3 class="text-sm font-bold mb-2">{{ featureName }}</h3>
        <p v-if="descriptionLink">
            <NuxtLink :to="featureDescription">{{ featureDescription }}</NuxtLink>
        </p>
        <p v-else class="">{{ featureDescription }}</p>
    </div>
</template>