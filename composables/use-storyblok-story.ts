import type { ISbStoriesParams } from 'storyblok-js-client';

export function useStoryblokStory(path: string, parameters?: ISbStoriesParams) {
    const config = useRuntimeConfig();
    const version : any = config.public.storyblokVersion;
    return useAsyncStoryblok(path, {
        ...parameters,
        version
    });
}