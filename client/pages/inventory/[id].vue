<template>
    <div class="bg-purple-1 cont mx-auto my-5 min-h-[500px] w-11/12 gap-5 rounded-3xl p-5">
        <div
            :class="`bacg mx-auto h-full min-h-[400px] w-full  max-w-[400px] overflow-hidden rounded-3xl border border-white bg-[url('${product.image}')]`"
        ></div>
        <div class="w-full p-5">
            <p class="text-4xl uppercase text-white">{{ product.name }}</p>
            <p class="mt-10 text-2xl text-white">
                {{ product.description }}
            </p>
            <NuxtLink
                class="hover:text-black-2 mt-20 flex h-[50px] w-full items-center justify-center rounded-xl border border-white text-center uppercase text-white shadow-2xl transition-all hover:bg-white"
                to="tel:061102331"
                >Узнать детали</NuxtLink
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';

const route = useRoute();
const userId = route.params.id;

const product = ref({});
const title = ref('');

async function fetchProducts() {
    try {
        const response = await axios.get(`http://localhost:4000/posts/${userId}`);
        product.value = response.data;
        title.value = response.data.name;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

onMounted(fetchProducts);

useHead({
    title: `${title.value}`,
    meta: [{ name: 'description', content: `${product.value.name}` }],
});
</script>

<style scoped>
.bacg {
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 1s ease;
}

@media (max-width: 460px) {
    .round {
        border-radius: 0px;
    }
}

.cont {
    display: flex;
}

@media (max-width: 844px) {
    .cont {
        flex-direction: column;
    }
}
</style>
