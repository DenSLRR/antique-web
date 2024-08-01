<template>
    <NuxtLink
        class="round border-purple-1 flex min-h-[460px] max-w-[487px] cursor-pointer flex-col overflow-hidden rounded-3xl border hover:border"
    >
        <div :class="`bacg h-full w-full bg-[url('${data.image}')]`"></div>
        <div class="h-2/2 flex flex-col items-center justify-between gap-2 pb-4">
            <div class="bg-black-1 z-20 w-full">
                <h3 class="py-3 text-center text-xl font-bold capitalize text-white">{{ data.name }}</h3>
            </div>

            <div class="flex w-full justify-center px-2">
                <NuxtLink
                    :to="`/inventory/${data.id}`"
                    class="bg-purple-1 rounded-3xl px-5 py-2 text-xl font-bold capitalize text-white hover:bg-opacity-70"
                >
                    Подробнее...
                </NuxtLink>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
interface IProps {
    data: {
        id: number;
        name: string;
        description: string;
        image: string;
    };
}

defineProps<IProps>();
</script>

<style scoped>
.bacg {
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 1s ease;
}
.bacg:hover {
    transform: scale(1.2);
}
@media (max-width: 460px) {
    .round {
        border-radius: 0px;
    }
}
</style>
