<script setup>
import getUser from '@/composables/getUser';
import { serverTimestamp } from 'firebase/firestore';
import { ref } from 'vue';

let message = ref("");
let { user } = getUser();

let handleSubmit = () => {
    let chat = {
        message: message.value,
        name: user.value.displayName,
        created_at: serverTimestamp()
    }
    console.log(chat);
    message.value = "";
}
</script>

<template>
    <form>
        <textarea placeholder="text message and hit enter to send" v-model="message"
            @keypress.enter="handleSubmit"></textarea>
    </form>
</template>

<style>
form {
    margin: 10px;
}
textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}
</style>