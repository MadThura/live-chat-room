<script setup>
import { ref } from 'vue';

let displayName = ref("");
let email = ref("");
let password = ref("");

let login = () => {
    console.log(displayName.value, email.value, password.value)
}

</script>

<template>
    <h2>Login</h2>
    <form @submit.prevent="login">
        <input type="email" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <button>Login</button>
    </form>
</template>

<style></style>