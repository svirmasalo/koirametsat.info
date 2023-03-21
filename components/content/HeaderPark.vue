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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-4">
          <path d="M16.555 5.412a8.028 8.028 0 00-3.503-2.81 14.899 14.899 0 011.663 4.472 8.547 8.547 0 001.84-1.662zM13.326 7.825a13.43 13.43 0 00-2.413-5.773 8.087 8.087 0 00-1.826 0 13.43 13.43 0 00-2.413 5.773A8.473 8.473 0 0010 8.5c1.18 0 2.304-.24 3.326-.675zM6.514 9.376A9.98 9.98 0 0010 10c1.226 0 2.4-.22 3.486-.624a13.54 13.54 0 01-.351 3.759A13.54 13.54 0 0110 13.5c-1.079 0-2.128-.127-3.134-.366a13.538 13.538 0 01-.352-3.758zM5.285 7.074a14.9 14.9 0 011.663-4.471 8.028 8.028 0 00-3.503 2.81c.529.638 1.149 1.199 1.84 1.66zM17.334 6.798a7.973 7.973 0 01.614 4.115 13.47 13.47 0 01-3.178 1.72 15.093 15.093 0 00.174-3.939 10.043 10.043 0 002.39-1.896zM2.666 6.798a10.042 10.042 0 002.39 1.896 15.196 15.196 0 00.174 3.94 13.472 13.472 0 01-3.178-1.72 7.973 7.973 0 01.615-4.115zM10 15c.898 0 1.778-.079 2.633-.23a13.473 13.473 0 01-1.72 3.178 8.099 8.099 0 01-1.826 0 13.47 13.47 0 01-1.72-3.178c.855.151 1.735.23 2.633.23zM14.357 14.357a14.912 14.912 0 01-1.305 3.04 8.027 8.027 0 004.345-4.345c-.953.542-1.971.981-3.04 1.305zM6.948 17.397a8.027 8.027 0 01-4.345-4.345c.953.542 1.971.981 3.04 1.305a14.912 14.912 0 001.305 3.04z" />
        </svg>

        <span class="text-left text-xs">
          {{ notificationText }}
        </span>
      </p>
      <NuxtLink
        custom
        external
      >
        <a @click="trackClick" :href="notificationLink" class="flex items-center -my-4 px-0 py-0 md:-mr-4 bg-transparent rounded-full text-secondary" rel="noreferrer nofollow" title="Siirry sivustolle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-2 w-5 h-5">
            <path fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
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