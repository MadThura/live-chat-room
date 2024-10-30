<script setup>
import Signup from '@/components/Signup.vue';
import Login from '@/components/Login.vue';
import { ref } from 'vue';
import router from '@/router';

let showLoginForm = ref(true);

let enterChatroom = () => {
    router.push({ name: "Chatroom" })
}

</script>

<template>
    <div class="welcome container">
        <div v-if="showLoginForm">
            <Login @enterChatroom="enterChatroom"></Login>
            <p>not a member? <span @click="showLoginForm = !showLoginForm">create account?</span></p>
        </div>
        <div v-else>
            <Signup @enterChatroom="enterChatroom"></Signup>
            <p>Already member? <span @click="showLoginForm = !showLoginForm">Login Account?</span></p>
        </div>
    </div>
</template>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}

.welcome form {
    width: 300px;
    margin: 20px auto;
}

.welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
}

.welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}

.welcome button {
    margin: 20px auto;
}
</style>