<template>
    <div data-aos="fade-up" class="mx-auto mb-10 w-11/12">
        <div class="mt-14 hidden w-full overflow-hidden md:block">
            <swiper
                :modules="[SwiperAutoplay]"
                :autoplay="{
                    delay: 4000,
                    disableOnInteraction: true,
                }"
                :watchSlidesProgress="true"
                :slidesPerView="3"
                class="mySwiper"
            >
                <swiper-slide v-for="item in data" class="mx-[5px] min-w-[250px] lg:min-w-[400px]">
                    <shared-ui-home-card-inventory
                        :key="item.id"
                        :name="item.name"
                        :id="item.id"
                        :text="item.description"
                        :image="item.image"
                    />
                </swiper-slide>
            </swiper>
        </div>
        <div class="mt-14 w-full overflow-hidden md:hidden">
            <swiper
                :modules="[SwiperAutoplay]"
                :autoplay="{
                    delay: 4000,
                    disableOnInteraction: true,
                }"
                :watchSlidesProgress="true"
                :slidesPerView="1"
                class="mySwiper"
            >
                <swiper-slide v-for="item in data" class="w-full lg:min-w-[400px]">
                    <shared-ui-home-card-inventory
                        :key="item.id"
                        :id="item.id"
                        :name="item.name"
                        :text="item.description"
                        :image="item.image"
                    />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup lang="ts">
interface IProps {
    data: {
        id: number;
        name: string;
        description: string;
        image: string;
        category: string;
    };
}

defineProps<IProps>();
</script>

<style scoped></style>
