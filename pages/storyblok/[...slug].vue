<script setup lang="ts">
    import type { ISbStoryData } from 'storyblok-js-client';
    const story = ref<ISbStoryData>();
    const route = useRoute();
    const slug = route.params.slug as string;
    try {
        const response = await useStoryblokStory(`storyblok/${slug[0]}`);

        if (!response.value) {
            throw new Error('Page not found');
        }

        story.value = response.value;
    } catch {
        throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
    }

</script>
<template>
  <main>
    <h1>Storyblok</h1>
    <StoryblokComponent v-if="story" :blok="story.content" />
    <div v-else>
      <p>Nothing here...</p>
    </div>
  </main>
</template>
