<script setup>
// Setup default meta image
useHead({
  meta: [
    {"og:image": '/images/koirametsat-info-og-meta.jpg'}
  ]
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <SiteNav />
    <CookieBanner />
  </div>
</template>