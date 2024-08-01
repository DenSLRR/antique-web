<template>
    <footer class="bg-purple-1 flex flex-col px-5 py-10">
        <div class="flex min-h-[300px] w-full flex-col lg:min-h-[100px]">
            <div
                class="flex h-[80px] w-full flex-col items-center gap-5 lg:flex-row lg:justify-between lg:gap-0"
            >
                <div>
                    <NuxtLink to="/">
                        <img class="h-[60px] w-[60px] cursor-pointer" src="/logo.webp" alt="logo" />
                    </NuxtLink>
                </div>
                <div class="flex flex-col items-center gap-5 lg:flex-row lg:gap-10">
                    <NuxtLink class="flex items-center gap-2 border-white hover:border-b" to="/contacts"
                        ><BsCalendarDate class="h-[22px] w-[22px] text-white" />
                        <p class="text-[22px] font-medium text-white hover:text-gray-300">
                            Пн-Сб: 09:00 - 18:00
                        </p></NuxtLink
                    >
                    <NuxtLink class="flex items-center gap-2 border-white hover:border-b" to="/contacts"
                        ><McLocation2Line class="h-[22px] w-[22px] text-white" />
                        <p class="text-[22px] font-medium text-white hover:text-gray-300">
                            Кишинев, Ул. Флорилор 14/1
                        </p></NuxtLink
                    >
                    <NuxtLink class="flex items-center gap-2 border-white hover:border-b" to="tel:069160809"
                        ><BsPhone class="h-[22px] w-[22px] text-white" />
                        <p class="text-[22px] font-medium text-white hover:text-gray-300">
                            +373 616-08-89
                        </p></NuxtLink
                    >
                </div>
                <div class="flex items-center gap-2">
                    <NuxtLink class="h-[30px] w-[30px]"
                        ><AnOutlinedInstagram
                            class="h-[30px] w-[30px] cursor-pointer text-white hover:text-gray-300"
                    /></NuxtLink>
                    <NuxtLink class="h-[30px] w-[30px]"
                        ><IcFacebookTag
                            class="h-[30px] w-[30px] cursor-pointer text-white hover:text-gray-300"
                    /></NuxtLink>
                </div>
            </div>
        </div>
        <div class="mt-10 min-h-[330px]">
            <iframe
                class="flex min-h-[330px] w-full rounded-3xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13201.091002887342!2d28.82853898468711!3d46.99477883489127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97ebbc2b6ace9%3A0x5984acc6f83e7779!2sHotel%20Tulip%20Residence%20%26%20Spa!5e0!3m2!1sru!2s!4v1721853190049!5m2!1sru!2s"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { BsCalendarDate } from '@kalimahapps/vue-icons';
import { McLocation2Line } from '@kalimahapps/vue-icons';
import { BsPhone } from '@kalimahapps/vue-icons';
import { AnOutlinedInstagram } from '@kalimahapps/vue-icons';
import { IcFacebookTag } from '@kalimahapps/vue-icons';
</script>

<style scoped></style>
