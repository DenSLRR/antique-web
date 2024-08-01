<template>
    <div class="mx-auto w-11/12">
        <div data-aos="fade-up" class="flex w-full flex-col gap-2 pt-[50px] md:flex-row">
            <div class="w-full">
                <NuxtLink
                    class="bg-purple-1 flex min-h-[300px] items-center gap-3 rounded-3xl border border-gray-400 p-[20px] text-[30px] text-white transition"
                    to="tel:61108466"
                >
                    <BsTelephoneFill class="text-red-700" />
                    061108466
                </NuxtLink>
            </div>
            <div class="w-full">
                <NuxtLink
                    class="bg-purple-1 flex min-h-[300px] items-center gap-3 rounded-3xl border border-gray-400 p-[20px] text-[30px] text-white transition"
                    to="mailto:info@gmail.com"
                >
                    <FlFilledMail class="text-red-700" />
                    antique@gmail.com
                </NuxtLink>
            </div>
            <div class="w-full">
                <NuxtLink
                    class="bg-purple-1 flex min-h-[300px] items-center gap-3 rounded-3xl border border-gray-400 p-[20px] text-[30px] text-white transition"
                    to=""
                >
                    <FaMapLocationDot class="text-red-700" />
                    Grenoble 128
                </NuxtLink>
            </div>
        </div>
        <div class="flex w-full flex-col gap-2 py-[50px] md:flex-row">
            <div class="w-full">
                <NuxtLink
                    class="bg-purple-1 flex min-h-[300px] items-center gap-3 rounded-3xl border border-gray-400 p-[20px] text-[30px] text-white transition"
                    to=""
                >
                    <IoLogoInstagram class="text-[60px] text-white" />
                    instagram
                </NuxtLink>
            </div>
            <div class="w-full">
                <NuxtLink
                    class="bg-purple-1 flex min-h-[300px] items-center gap-3 rounded-3xl border border-gray-400 p-[20px] text-[30px] text-white transition"
                    to=""
                >
                    <IcFacebookTag class="text-[60px] text-white" />
                    facebook
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { BsTelephoneFill } from '@kalimahapps/vue-icons';
import { FlFilledMail } from '@kalimahapps/vue-icons';
import { FaMapLocationDot } from '@kalimahapps/vue-icons';
import { IoLogoInstagram } from '@kalimahapps/vue-icons';
import { IcFacebookTag } from '@kalimahapps/vue-icons';
</script>

<style scoped></style>
