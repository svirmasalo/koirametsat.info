<script setup lang="ts">
    import { type ISbStoryData } from 'storyblok-js-client';
    import { type SERPBlock } from '~~/types/stories';
    const story = ref<ISbStoryData>();
    try {
        const response = await useStoryblokStory('etusivu');

        if (!response.value) {
            throw new Error('Page not found');
        }

        story.value = response.value;
    } catch {
        throw createError({ statusCode: 404, statusMessage: 'Page Not Foundsss' });
    }
    const {
        public: {
            siteUrl,
        },
    } = useRuntimeConfig();
    const SERP: SERPBlock = story.value?.content?.SERP[0] || false;
    if (SERP) {
      useHead({...useParseSerp(SERP, siteUrl)});
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