<template>
    <widget-inventory-wrapper>
        <widget-inventory-items-wrapper class="mt-5">
            <shared-ui-card v-for="item in filteredProducts" :data="item" />
        </widget-inventory-items-wrapper>
    </widget-inventory-wrapper>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const products = ref([]);

async function fetchProducts() {
    try {
        const response = await axios.get('http://localhost:4000/posts');
        products.value = response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

const filteredProducts = computed(() => {
    return products.value.filter((product) => product.category === 'tech');
});

onMounted(fetchProducts);
</script>

<style scoped></style>
