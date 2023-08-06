import type { ISbStoriesParams } from 'storyblok-js-client';

export function useStoryblokStory(path: string, parameters?: ISbStoriesParams) {
    return useAsyncStoryblok(path, {
        ...parameters,
        version: useRuntimeConfig().public.storyblokVersion === 'published' ? 'published' : 'draft',
    });
}