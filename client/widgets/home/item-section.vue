<template>
    <div class="py-[50px]">
        <shared-ui-section-store :title="title" :description="description"></shared-ui-section-store>
        <items-carousel :data="data" />
    </div>
</template>
<script setup lang="ts">
import SectionStore from '~/shared/ui/section-store.vue';
import ItemsCarousel from '~/widgets/home/items-carousel.vue';
interface IProps {
    title: string;
    description: string;
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
