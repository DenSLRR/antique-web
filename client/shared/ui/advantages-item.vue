<template>
    <div class="mb-[50px] flex w-full flex-col px-[10px] sm:w-8/12 lg:mb-0 lg:w-4/12">
        <div class="flex justify-start">
            <img :src="image" alt="" />
        </div>
        <div class="mt-[10px]">
            <p class="text-[24px] font-bold">{{ title }}</p>
            <p class="text-[18px]">{{ description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
interface IProps {
    title: string;
    description: string;
    image: string;
}

defineProps<IProps>();
</script>

<style scoped></style>
