import type { DehydratedState, VueQueryPluginOptions } from '@tanstack/vue-query';
import { dehydrate, hydrate, QueryClient, VueQueryPlugin } from '@tanstack/vue-query';
import { useState } from '#app';

export default defineNuxtPlugin((nuxt) => {
    const vueQueryState = useState<DehydratedState | null>('vue-query');

    const queryClient = new QueryClient({
        defaultOptions: { queries: { retry: 0 }, mutations: { retry: 0 } },
    });
    const options: VueQueryPluginOptions = { queryClient, enableDevtoolsV6Plugin: true };

    nuxt.vueApp.use(VueQueryPlugin, options);

    if (process.server) {
        nuxt.hooks.hook('app:rendered', () => {
            vueQueryState.value = dehydrate(queryClient);
        });
    }

    if (process.client) {
        nuxt.hooks.hook('app:created', () => {
            hydrate(queryClient, vueQueryState.value);
        });
    }
});
