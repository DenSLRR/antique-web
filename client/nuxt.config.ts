export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/google-fonts', '@pinia/nuxt', 'nuxt-swiper', '@vee-validate/nuxt', 'nuxt-aos'],

    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/ico', href: '/favicon.ico' }],
        },
    },

    css: ['@/shared/ui/style/main.scss'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    googleFonts: {
        prefetch: true,
        preload: true,
        useStylesheet: true,
        families: {
            Montserrat: [300, 400, 500, 600, 700, 800],
        },
    },

    runtimeConfig: {
        ssr: true,
        public: {
            api: process.env.NUXT_PUBLIC_API_URL,
            base_api: process.env.NUXT_PUBLIC_API_BASE,
        },
    },

    components: [
        {
            path: 'shared',
            extensions: ['.vue'],
            prefix: 'Shared',
        },
        {
            path: 'features',
            extensions: ['.vue'],
            prefix: 'Feature',
        },
        {
            path: 'widgets',
            extensions: ['.vue'],
            prefix: 'Widget',
        },
        {
            path: 'entities',
            extensions: ['.vue'],
            prefix: 'Entity',
        },
    ],

    imports: {
        dirs: ['shared/**/*.ts', 'features/**/*.ts', 'widgets/**/*.ts', 'entities/**/*.ts'],
    },

    plugins: ['~/plugins/vue-query.ts'],
    compatibilityDate: '2024-07-07',
});
