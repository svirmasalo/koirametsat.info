<script setup lang="ts">
const route = useRoute();
defineProps({
  image: { type: String, default: "" },
  notificationText: { type: String, default: "" },
  notificationLink: { type: String, default: "" },
});
// Get path of default image if no image is provided. Default image for the park is in the ./public/images folder, named <slug>.png
const defaultImage = `images/${route.params.slug}.png`;

try {
  fbq("track", "ViewContent", {
    content_name: route.params.slug,
    content_type: "park",
    content_ids: route.params.city,
  });
  window.dataLayer.push({
    event: "InitiateCheckout",
  });
} catch (e) {
  console.warn("Facebook Pixel not loaded");
}

const trackClick = () => {
  try {
    fbq("track", "InitiateCheckout");
  } catch (error) {
      console.warn(error);
  }
};

</script>
<template>
  <header class="pt-16 pb-0 px-4 text-center">
    <div
      class="rounded-full border-2 border-secondary overflow-hidden mb-6 w-44 h-44 mx-auto"
    >
      <nuxt-img
        :src="defaultImage"
        class="object-cover object-center h-full w-full"
        quality="20"
        format="webp"
        loading="lazy"
        alt="AI:n luoma kuvituskuva koirametsästä"
      />
    </div>
    <div class="max-w-lg mx-auto">
      <ContentSlot :use="$slots.default" />
    </div>
    <div
      class="py-4 mt-12 bg-accent text-white text-xs -mx-4 flex justify-between items-center px-4 lg:justify-center"
    >
      <p class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mr-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
          />
        </svg>
        <span class="text-left text-xs">
          {{ notificationText }}
        </span>
      </p>
      <NuxtLink
        custom
        external
      >
        <a @click="trackClick" :href="notificationLink" class="flex items-center -my-4 px-0 py-0 -mr-4 bg-transparent rounded-full text-secondary" rel="noreferrer nofollow" title="Siirry sivustolle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

        </a>
      </NuxtLink>
    </div>
  </header>
</template>
<style scoped>
:deep(h1) {
  @apply text-4xl font-bold text-secondary leading-tight mb-2;
}
:deep(p) {
  @apply text-sm leading-relaxed;
}
</style>