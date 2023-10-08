<script setup lang="ts">
    import type { ISbStoryData } from 'storyblok-js-client';
    const story = ref<ISbStoryData>();
    const route = useRoute();
    const slug = route.params.slug as string;

    const {
        public: {
            siteUrl,
        },
    } = useRuntimeConfig();
    
    const slugOrIndex = slug.length > 0 ? '/'+slug : '';

    try {
        const response = await useStoryblokStory(`tietoa-koirametsista${slugOrIndex}`);

        if (!response.value) {
            throw new Error('Page not found');
        }

        story.value = response.value;
    } catch {
        throw createError({ statusCode: 404, statusMessage: `Vuff... sivua ei löytynyt: ${slug}` });
    }
    const serp = story.value?.content.SERP[0];
    const pageHead = computed(() => {
        if (serp) {
            const { meta, link, title } = useParseSerp(serp, siteUrl);
            return { meta, link, title };
        } else {
            return {
                title: `${story.value?.name} - Koirametsät.info`,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Tietoa koirametsista',
                    },
                ],
                link: [
                    {
                        hid: 'canonical',
                        rel: 'canonical',
                        href: `${siteUrl}/${slug}`,
                    },
                ],
            };
        }
    });
    useHead(pageHead);
</script>
<template>
  <main>
    <SchemaOrgWebPage />
    <StoryblokComponent v-if="story" :blok="story.content" />
    <div v-else>
      <p>Hups... täällä ei ollutkaan mitään.</p>
    </div>
  </main>
</template>
