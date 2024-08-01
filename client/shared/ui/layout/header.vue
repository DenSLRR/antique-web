<template>
    <header>
        <div class="bg-purple-1 flex hidden h-[80px] w-full items-center justify-between px-10 md:flex">
            <div>
                <div class="flex items-center justify-between gap-8">
                    <div class="w-[60px]] h-[60px]">
                        <NuxtLink to="/">
                            <img class="h-[60px] w-[60px] cursor-pointer" src="/logo.webp" alt="logo" />
                        </NuxtLink>
                    </div>
                    <div>
                        <ul class="flex gap-5">
                            <li v-for="(item, i) in navigation" :key="i" class="group border-white">
                                <NuxtLink
                                    active-class="border-b border-white "
                                    class="0 relative flex items-center gap-2 border-white text-[15px] font-medium uppercase text-white transition hover:border-b hover:text-gray-300 focus:decoration-red-500"
                                    :to="`${item.path}`"
                                    >{{ item.name }}
                                    <BsChevronDown class="h-[10px] w-[10px]" v-if="item.subNav" />
                                </NuxtLink>
                                <div
                                    class="absolute hidden bg-white drop-shadow-2xl group-hover:block"
                                    v-if="item.subNav"
                                >
                                    <ul class="flex flex-col">
                                        <li
                                            class="hover:text-purple-1 p-[10px] transition duration-300"
                                            v-for="subitem in item.subNav"
                                        >
                                            <NuxtLink
                                                active-class=" text-black-2"
                                                class="text-l flex font-medium uppercase"
                                                :to="`${subitem.path}`"
                                                >{{ subitem.name }}</NuxtLink
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <NuxtLink
                    class="hover:text-black-2 h-[40px] w-[80px] cursor-pointer rounded-2xl border border-white p-3 text-white transition-all hover:bg-white"
                    >Позвонить</NuxtLink
                >
            </div>
        </div>
        <div class="bg-purple-1 relative flex w-full items-center justify-between px-[15px] md:hidden">
            <div class="flex h-[60px] items-center justify-center">
                <NuxtLink to="/">
                    <img class="h-[40px] w-[40px] cursor-pointer" src="/logo.webp" alt="logo" />
                </NuxtLink>
            </div>
            <div @click="handleActive" class="h-[30px] w-[30px]">
                <CgMenuRight v-if="!isActive" class="h-[30px] w-[30px] text-white" />
                <AkXSmall v-else class="h-[30px] w-[30px] text-white" />
            </div>
        </div>
        <div
            v-if="isActive"
            :class="{
                'translate-y bg-purple-1  absolute right-0 top-[60px] z-50 min-h-[400px] w-full transform border-b border-t border-white py-5 shadow-xl  duration-500 ':
                    isActive,
            }"
        >
            <div class="mt-10 w-full">
                <ul class="flex flex-col items-center gap-10 px-[40px]">
                    <li
                        v-for="(item, i) in navigation"
                        :key="i"
                        class="group w-full border-white text-center"
                    >
                        <NuxtLink
                            @click="handleActive(item)"
                            class="w-full gap-2 text-[15px] font-medium uppercase text-white hover:text-gray-300"
                            :to="`${item.path}`"
                        >
                            <div class="jusify-start flex items-center gap-2">
                                {{ item.name }}
                                <BsChevronDown class="h-[10px] w-[10px]" v-if="item.subNav" />
                                <span class="h-[1px]"></span>
                            </div>
                        </NuxtLink>
                        <div class="hidden group-hover:block" v-if="item.subNav">
                            <ul class="flex flex-col pt-5">
                                <li
                                    @click="handleActive(subitem)"
                                    class="hover:text-black-2 w-full p-[10px] text-white"
                                    v-for="subitem in item.subNav"
                                    :key="subitem.path"
                                >
                                    <NuxtLink
                                        class="text-l flex font-medium uppercase"
                                        :to="`${subitem.path}`"
                                    >
                                        {{ subitem.name }}
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="mx-auto w-10/12">
                <NuxtLink
                    class="hover:text-black-2 mt-20 flex h-[50px] w-full items-center justify-center rounded-3xl border border-white text-center uppercase text-white shadow-2xl transition-all hover:bg-white"
                    to="tel:061102331"
                    >Позвонить</NuxtLink
                >
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { CgMenuRight } from '@kalimahapps/vue-icons';
import { BsChevronDown } from '@kalimahapps/vue-icons';
import type { NavItem } from '~/shared/types/common';
import { AkXSmall } from '@kalimahapps/vue-icons';

const handleActive = (item) => {
    if (!item.subNav) {
        isActive.value = !isActive.value;
    }
};

interface IProps {
    navigation: NavItem[];
}
const props = defineProps<IProps>();

const isActive = ref(false);
</script>

<style scoped></style>
