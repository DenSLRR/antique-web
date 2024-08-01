<template>
    <widget-inventory-wrapper>
        <div class="flex min-h-[100px] w-full justify-between bg-green-600">
            <div class="mx-auto flex w-full flex-col items-center justify-center px-5">
                <button
                    @click="openModal('http://localhost:4000/posts/create', 'Создать', 'post')"
                    class="hover:text-black-2 w-full rounded-3xl border border-white py-2 text-white hover:bg-white"
                >
                    Создать
                </button>
            </div>
        </div>
        <widget-inventory-items-wrapper class="mt-5">
            <shared-ui-admin-card
                v-for="(item, i) in products"
                :key="item.id"
                :data="{
                    ...item,
                    parentFunc: deletePost,
                    changePost: changePost,
                }"
            />
        </widget-inventory-items-wrapper>
        <shared-ui-form-add
            :method="method"
            :text="text"
            :uri="uri"
            :isOpen="isModalOpen"
            @close="closeModal"
        ></shared-ui-form-add>
    </widget-inventory-wrapper>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const products = ref([]);
const uri = ref('');
const text = ref('');
const method = ref('');
const isModalOpen = ref(false);

const openModal = (newUri: string, newText: string, newMethod: string) => {
    uri.value = newUri;
    text.value = newText;
    method.value = newMethod;

    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};

const changePost = async (id: number) => {
    openModal(`http://localhost:4000/posts/${id}`, 'Изменить', 'patch');
};

const deletePost = async (id: number) => {
    try {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:4000/posts/delete/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        fetchProducts();
        alert('Post deleted successfully');
    } catch (error) {
        console.error(error);
        alert('Error deleting post');
    }
};

const fetchProducts = async () => {
    try {
        const response = await axios.get('http://localhost:4000/posts');
        products.value = response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

onMounted(() => {
    fetchProducts();
    const token = localStorage.getItem('token');
    if (!token) {
        router.push('/login');
    }
});
</script>

<style scoped></style>
