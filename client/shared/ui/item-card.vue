<template>
    <NuxtLink
        to="`/inventory/`"
        class="round flex min-h-[460px] max-w-[442px] cursor-pointer flex-col overflow-hidden rounded-3xl border-red-500 hover:border"
    >
        <div class="`bacg bg-[url('/test.webp')]` h-full w-full"></div>
        <div class="flex h-1/2 flex-col items-center justify-between gap-2 pb-4">
            <div class="bg-black-1 z-20 w-full">
                <h3 class="py-3 text-center text-xl font-bold uppercase text-white">Модель</h3>
            </div>
            <div>
                <h2 class="text-black-2 text-3xl font-bold uppercase">2999</h2>
            </div>
            <div class="flex w-full justify-center px-2">
                <h2 class="rounded-3xl bg-red-500 px-5 py-1 text-2xl font-bold uppercase text-white">
                    стул деревянный
                </h2>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts"></script>

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
