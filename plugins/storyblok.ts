import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import type { ISbResult } from '@storyblok/js';

export default defineNuxtPlugin(({ vueApp }) => {
    const {
        public: {
            storyblok,
        },
    } = useRuntimeConfig();

    const { csrf } = useCsrf();

    vueApp.use(StoryblokVue, {
        ...storyblok,
        apiOptions: {
            cache: {
                type: 'custom',
                clear: 'auto',
                custom: {
                    async get(key: string) {
                        const response = await useFetch<{
                            status: number
                        } | Record<string, unknown>>(
                            '/storyblok/get',
                            {
                                params: {
                                    key,
                                },
                                key: `storyblok:get:${key}`,
                                headers: {
                                    // eslint-disable-next-line @typescript-eslint/naming-convention
                                    'csrf-token': csrf,
                                },
                            },
                        );

                        return response.error.value || response.data.value?.status === 404
                            ? undefined
                            : response.data.value;
                    },
                    async getAll() {
                        const response = await useFetch<Record<string, Record<string, unknown>>>(
                            '/storyblok/all',
                            {
                                key: 'storyblok:all',
                                headers: {
                                    // eslint-disable-next-line @typescript-eslint/naming-convention
                                    'csrf-token': csrf,
                                },
                            },
                        );

                        return response.data.value;
                    },
                    async set(key: string, content: ISbResult) {
                        if (process.server) {
                            return undefined;
                        }

                        await useFetch(
                            '/storyblok/set',
                            {
                                key: `storyblok:set:${key}`,
                                method: 'POST',
                                body: {
                                    key,
                                    content,
                                },
                                headers: {
                                    // eslint-disable-next-line @typescript-eslint/naming-convention
                                    'csrf-token': csrf,
                                },
                            },
                        );

                        return undefined;
                    },
                    async flush() {
                        if (process.server) {
                            return undefined;
                        }

                        await useFetch(
                            '/storyblok/flush',
                            {
                                key: 'storyblok:flush',
                                method: 'POST',
                                headers: {
                                    // eslint-disable-next-line @typescript-eslint/naming-convention
                                    'csrf-token': csrf,
                                },
                            },
                        );

                        return undefined;
                    },
                },
            },
        },
        use: [apiPlugin],
    });
});