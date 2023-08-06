<script setup lang="ts">
    import type { ISbStoryData } from 'storyblok-js-client';
    const story = ref<ISbStoryData>();
    try {
        const response = await useStoryblokStory('testisivu');

        if (!response.value) {
            throw new Error('Page not found');
        }

        story.value = response.value;
    } catch {
        throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
    }

</script>
<template>
  <SchemaOrgWebSite name="Koirametsät.info" />
  <SchemaOrgWebPage />
  <StoryblokComponent v-if="story" :blok="story.content" />
  <div v-else>
    <p>Nothing here...</p>
  </div>
</template>