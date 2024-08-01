<template>
    <div
        :class="`bacg flex min-h-[400px] flex-col justify-end overflow-hidden  bg-[url('${image}')] lg:max-w-[450px]`"
    >
        <div class="grad px-4">
            <div class="mb-2"></div>
            <div class="flex items-center justify-between border-t border-white py-4">
                <div>
                    <h2 class="text-[18px] font-semibold capitalize text-white">{{ name }}</h2>
                </div>
                <div>
                    <NuxtLink
                        class="bg-purple-1 h-[20px] cursor-pointer rounded-3xl px-[25px] py-[8px] text-[14px] font-semibold text-white transition-all hover:bg-red-400"
                        :to="`/inventory/${id}`"
                        >Подробнее</NuxtLink
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface IProps {
    id: number;
    name: string;
    description: string;
    image: string;
}

defineProps<IProps>();
</script>

<style scoped>
.bacg {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.grad {
    background: rgb(0, 0, 0);
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 12%,
        rgba(0, 0, 0, 1) 29%,
        rgba(0, 0, 0, 0.87718837535014) 46%,
        rgba(0, 0, 0, 0) 99%
    );
    transition: opacity 0.5s ease;
}
.grad:hover {
    opacity: 0.6;
}
</style>
