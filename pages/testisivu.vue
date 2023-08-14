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
    interface StoryblokImage {
      id: string;
      alt: string;
      name: string;
      focus: string;
      title: string;
      filename: string;
      filetype: string;
      url: string;
      fieldtype: string;
    }
    interface SERPBlock {
      _uid: String;
      canonical: string;
      component: "SERP";
      meta_image: StoryblokImage;
      meta_title: string;
      meta_description: string;
      _editable: string;
    }
    const SERP: SERPBlock = story.value?.content?.SERP[0] || false;
    if (SERP) {
      console.log(SERP);
      useHead({
        title: SERP?.meta_title || 'Koirametsät.info',
        meta: [
          {
            name: "og:description",
            content: `${SERP?.meta_description}`,
          },
          {
            name: "description",
            content: `${SERP?.meta_description}`,
          }
        ]
      });
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