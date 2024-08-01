<template>
    <div>
        <div :class="[`font-mont`]">
            <SharedUiLayoutHeader :navigation="HEADER_NAV" />
            <main class="flex-1">
                <NuxtPage />
            </main>
            <SharedUiLayoutFooter />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { META } from '~/meta';
import { THEME } from '~/meta/tailwind.theme';

const router = useRouter();


useSeoMeta({
    title: META.TITLE,
    ogTitle: META.TITLE,
    description: META.DESCRIPTION,
    ogDescription: META.DESCRIPTION,
    ogImage: 'meta.png',
});

useHead({
    script: [
        { src: 'https://cdn.tailwindcss.com' },
        {
            innerHTML: `tailwind.config = ${JSON.stringify(THEME)}`,
        },
    ],
});


</script>
