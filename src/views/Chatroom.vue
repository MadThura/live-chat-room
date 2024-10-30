<script setup>
import Navbar from '@/components/Navbar.vue';
import NewChatForm from '@/components/NewChatForm.vue';
import ChatWindow from '@/components/ChatWindow.vue';
import { watch } from 'vue';
import getUser from '@/composables/getUser';
import router from '@/router';

let { user } = getUser();

watch(user, () => {
    if (!user.value) {
        router.push("/");
    }
})
</script>

<template>
    <div class="container">
        <Navbar></Navbar>
        <ChatWindow></ChatWindow>
        <NewChatForm></NewChatForm>
    </div>
</template>

<style></style>