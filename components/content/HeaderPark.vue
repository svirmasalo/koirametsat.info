<script setup lang="ts">
defineProps({
  image: { type: String, default: "" },
  notificationText: { type: String, default: "" },
  notificationLink: { type: String, default: "" },
});
</script>
<template>
  <header class="pt-16 pb-0 px-4 text-center">
    <div class="rounded-full border-2 border-secondary overflow-hidden mb-6 w-44 h-44 mx-auto">
        <img :src="image" class="object-cover object-center h-full" />
    </div>
    <ContentSlot :use="$slots.default" />
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
        <NuxtLink class="flex items-center -my-4 px-4 py-4 -mr-4" rel="noreferrer nofollow" :to="notificationLink">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
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