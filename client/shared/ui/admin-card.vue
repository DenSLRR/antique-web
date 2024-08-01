<template>
    <NuxtLink
        class="round border-purple-1 bg-purple-1 flex min-h-[460px] max-w-[442px] cursor-pointer flex-col overflow-hidden rounded-3xl border hover:border"
    >
        <div :class="`bacg h-full w-full bg-[url('${data.image}')]`"></div>
        <div class="h-2/2 flex flex-col items-center justify-between gap-2 pb-4">
            <div class="bg-black-1 z-20 w-full">
                <h3 class="py-3 text-center text-xl font-bold capitalize text-white">{{ data.name }}</h3>
            </div>
            <div class="flex w-full justify-between px-2">
                <button
                    @click="invokeParentFunction"
                    class="rounded-3xl bg-red-700 px-5 py-2 text-xl font-bold capitalize text-white hover:bg-opacity-70"
                >
                    Удалить
                </button>
                <button
                    @click="changeePost"
                    class="rounded-3xl bg-green-600 px-5 py-2 text-xl font-bold capitalize text-white hover:bg-opacity-70"
                >
                    Изменить
                </button>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface IProps {
    data: {
        id: number;
        name: string;
        description: string;
        image: string;
        parentFunc: (id: number) => void;
        changePost: (id: number) => void;
    };
}

const props = defineProps<IProps>();

const invokeParentFunction = () => {
    props.data.parentFunc(props.data.id);
};

const changeePost = () => {
    console.log('card');
    props.data.changePost(props.data.id);
};
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
        border-radius: 0;
    }
}
</style>
