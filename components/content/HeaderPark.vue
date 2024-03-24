<script setup lang="ts">
const route = useRoute();
defineProps({
  image: { type: String, default: "" },
  notificationText: { type: String, default: "" },
  notificationLink: { type: String, default: "" },
});
// Get path of default image if no image is provided. Default image for the park is in the ./public/images folder, named <slug>.png
const defaultImage = `${route.params.slug}.png`;

try {
  fbq("track", "ViewContent", {
    content_name: route.params.slug,
    content_type: "park",
    content_ids: route.params.city,
  });
} catch (e) {
  console.warn("Facebook Pixel not loaded");
}

const trackClick = () => {
  try {
    fbq("track", "InitiateCheckout");
    gtag("event", "InitiateCheckout", {});
  } catch (error) {
    console.warn(error);
  }
};
</script>
<template>
  <header class="pt-16 pb-0 px-4 text-center relative">
    <div class="absolute top-4 right-4 md:top-8 md:right-8">
      <nuxt-link class="text-indigo-50 bg-indigo-600 bg-gradient-to-r from-indigo-700 to-indigo-600 hover:to-indigo-700 transition-colors text-sm md:text-base p-1 md:p-2 rounded font-bold flex items-center gap-2" to="/tietoa-palvelusta/tue-koirametsat-infon-toimintaa">
        <span>Tue toimintaa</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 md:w-5 md:h-5">
          <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
        </svg>
      </nuxt-link>
    </div>
    <div
      class="rounded-full border-2 border-secondary overflow-hidden mb-6 w-44 h-44 mx-auto"
    >
      <NuxtImg
        :src="defaultImage"
        class="object-cover object-center h-full w-full"
        quality="20"
        format="webp"
        loading="lazy"
        alt="AI:n luoma kuvituskuva koirametsästä"
        width="176"
        height="176"
      />
    </div>
    <div class="max-w-lg mx-auto">
      <ContentSlot :use="$slots.default" />
    </div>
    <div class="bg-accent -mx-4">
      <div
        class="py-4 mt-12 w-full max-w-lg text-white text-xs mx-auto flex justify-center items-center px-4 lg:justify-center"
      >
        <p class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5 mr-4"
          >
            <path
              d="M16.555 5.412a8.028 8.028 0 00-3.503-2.81 14.899 14.899 0 011.663 4.472 8.547 8.547 0 001.84-1.662zM13.326 7.825a13.43 13.43 0 00-2.413-5.773 8.087 8.087 0 00-1.826 0 13.43 13.43 0 00-2.413 5.773A8.473 8.473 0 0010 8.5c1.18 0 2.304-.24 3.326-.675zM6.514 9.376A9.98 9.98 0 0010 10c1.226 0 2.4-.22 3.486-.624a13.54 13.54 0 01-.351 3.759A13.54 13.54 0 0110 13.5c-1.079 0-2.128-.127-3.134-.366a13.538 13.538 0 01-.352-3.758zM5.285 7.074a14.9 14.9 0 011.663-4.471 8.028 8.028 0 00-3.503 2.81c.529.638 1.149 1.199 1.84 1.66zM17.334 6.798a7.973 7.973 0 01.614 4.115 13.47 13.47 0 01-3.178 1.72 15.093 15.093 0 00.174-3.939 10.043 10.043 0 002.39-1.896zM2.666 6.798a10.042 10.042 0 002.39 1.896 15.196 15.196 0 00.174 3.94 13.472 13.472 0 01-3.178-1.72 7.973 7.973 0 01.615-4.115zM10 15c.898 0 1.778-.079 2.633-.23a13.473 13.473 0 01-1.72 3.178 8.099 8.099 0 01-1.826 0 13.47 13.47 0 01-1.72-3.178c.855.151 1.735.23 2.633.23zM14.357 14.357a14.912 14.912 0 01-1.305 3.04 8.027 8.027 0 004.345-4.345c-.953.542-1.971.981-3.04 1.305zM6.948 17.397a8.027 8.027 0 01-4.345-4.345c.953.542 1.971.981 3.04 1.305a14.912 14.912 0 001.305 3.04z"
            />
          </svg>
        <NuxtLink custom external>
          <a
            @click="trackClick"
            :href="notificationLink"
            class="flex items-center -my-4 px-0 py-0 md:-mr-4 bg-transparent rounded-full text-secondary"
            rel="noreferrer nofollow"
            title="Siirry sivustolle"
          >
          <span class="text-left text-xs">
            {{ notificationText }}
          </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="ml-2 w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </NuxtLink>
      </p>
      </div>
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