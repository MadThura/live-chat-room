<script setup>
import { ref } from 'vue';
import useLogin from '@/composables/useLogin';

let email = ref("");
let password = ref("");
let emit = defineEmits(['enterChatroom']);

let { error, signIn } = useLogin();

let login = async () => {
    let res = await signIn(email.value, password.value);
    if (res) {
        emit('enterChatroom');
    }
}

</script>

<template>
    <h2>Login</h2>
    <form @submit.prevent="login">
        <input type="email" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <div v-if="error" class="error">{{ error }}</div>
        <button>Login</button>
    </form>
</template>

<style></style>