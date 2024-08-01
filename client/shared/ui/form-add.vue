<template>
    <div>
        <div
            v-if="isOpen"
            @click="closeModal"
            class="bg-black-2 fixed bottom-0 left-0 right-0 top-0 z-40 flex h-full w-full items-center justify-center bg-opacity-50"
        >
            <div @click.stop class="bg-purple-1 z-30 w-full p-10 lg:w-6/12">
                <p class="text-center text-2xl uppercase text-white">{{ text }}</p>
                <form @submit.prevent="createPost(uri)" class="flex flex-col">
                    <p class="text-red-700">Обязательно *</p>
                    <input v-model="name" class="px-5 py-3" placeholder="Название" required />
                    <p class="mt-5 text-red-700">Обязательно *</p>

                    <select v-model="category" class="py-3" required>
                        <option :value="option" v-for="option in categoryType" :key="option">
                            {{ option }}
                        </option>
                    </select>
                    <p class="mt-5 text-red-700">Обязательно *</p>
                    <input type="file" @change="onFileChange" required />
                    <p class="mt-5 text-red-700">Обязательно *</p>
                    <textarea
                        v-model="description"
                        class="min-h-[100px] px-5 py-2"
                        placeholder="Описание"
                        required
                    ></textarea>
                    <div class="flex w-full justify-end">
                        <shared-ui-button>{{ text }}</shared-ui-button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const name = ref('');
const description = ref('');
const category = ref('');
const file = ref<File | null>(null);
const categoryType = ['furniture', 'tech', 'glass'];

interface IProps {
    isOpen: boolean;
    uri: string;
    text: string;
    method: string;
}

const props = defineProps<IProps>();

const emit = defineEmits<{
    (event: 'close'): void;
}>();

const closeModal = () => {
    emit('close');
};

const onFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files) {
        file.value = target.files[0];
    }
};

const createPost = async (url: string) => {
    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('description', description.value);
    formData.append('category', category.value);
    if (file.value) {
        formData.append('image', file.value);
    }

    try {
        const token = localStorage.getItem('token');
        if (props.method == 'post') {
            await axios.post(url, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            closeModal();
            alert('Post created successfully');
        } else {
            await axios.patch(url, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            closeModal();
            alert('Post changed successfully');
        }
    } catch (error) {
        console.log(error);
        alert('Проверьте все поля на заполнение!');
    }
};
</script>

<style scoped></style>
