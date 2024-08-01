export default {
    main: {
        input: './shared/api/schema.yaml',
        output: {
            target: './shared/api/generated.ts',
            prettier: true,
            client: 'vue-query',
            override: {
                mutator: {
                    path: './shared/api/api-instance.ts',
                    name: 'createInstance',
                },
                query: {
                    useQuery: true,
                    useInfinite: false,
                },
            },
        },
    },
};
