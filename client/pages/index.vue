<template>
    <div>
        <widget-home-banner></widget-home-banner>
        <widget-home-item-section
            description="Изысканные предметы с богатой историей. Украсьте дом уникальными вещами, придающими уют и элегантность."
            title="Антикварный декор"
            :data="glassProducts"
        />
        <widget-home-item-section
            description="Предметы с неповторимым характером. Привнесите в ваш интерьер уникальный стиль и шарм."
            title="Мебель"
            :data="furnitureProducts"
        />
        <widget-home-item-section
            description="Современные устройства для вашего удобства. Облегчите повседневные задачи с нашим широким выбором товаров."
            title="Бытовая техника"
            :data="techProducts"
        />
        <widget-home-advantages />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const products = ref([]);
const furnitureProducts = ref([]);
const techProducts = ref([]);
const glassProducts = ref([]);

const fetchProducts = async () => {
    try {
        const response = await axios.get('http://localhost:4000/posts');
        products.value = response.data;
        filterProducts();
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

const filterProducts = () => {
    furnitureProducts.value = products.value.filter((product) => product.category === 'furniture');
    techProducts.value = products.value.filter((product) => product.category === 'tech');
    glassProducts.value = products.value.filter((product) => product.category === 'glass');
};

onMounted(fetchProducts);
</script>

<style scoped></style>
