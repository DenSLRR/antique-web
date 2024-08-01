<template>
    <div class="flex w-full items-center justify-center">
        <div class="h-[2px] w-full border"></div>
        <div class="w-full text-center text-[30px]">{{ title }}</div>
        <div class="h-[2px] w-full border"></div>
    </div>
    <div class="mt-[2px] flex w-full items-center justify-center">
        <div class="h-[2px] w-full"></div>
        <div class="w-full text-center text-[18px]">{{ description }}</div>
        <div class="h-[2px] w-full"></div>
    </div>
</template>

<script setup lang="ts">
interface IProps {
    title: string;
    description: string;
}

defineProps<IProps>();
</script>

<style scoped></style>
