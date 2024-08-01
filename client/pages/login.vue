<template>
    <div class="w-full px-5">
        <div class="bg-purple-1 mx-auto my-5 min-h-[300px] w-full rounded-3xl px-5 py-10 lg:w-6/12">
            <form @submit.prevent="login">
                <p class="text-white">Введите ваш Email:</p>
                <input v-model="email" class="h-[50px] w-full px-5" placeholder="Email" type="email" />
                <p class="mt-5 text-white">Введите ваш пароль:</p>
                <input
                    v-model="password"
                    class="h-[50px] w-full px-5"
                    placeholder="Password"
                    type="password"
                />
                <p class="mt-5 text-red-700">{{ errResponse }}</p>

                <button
                    class="hover:text-black-2 mt-10 rounded-3xl border border-white px-5 py-2 text-white hover:bg-white"
                >
                    SEND
                </button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';

const email = ref('');
const password = ref('');
const errResponse = ref('');

const router = useRouter();

const login = async () => {
    try {
        errResponse.value = '';
        const response = await axios.post('http://localhost:4000/auth/login/', {
            email: email.value,
            password: password.value,
        });
        localStorage.setItem('token', response.data.access_token);
        router.push('upload');
    } catch (err) {
        console.log(err);
        errResponse.value = 'Неверный логин или пароль!';
    }
};
</script>

<style scoped></style>
