<script setup>
import { ref } from 'vue';
import useSignup from '@/composables/useSignup';

let displayName = ref("");
let email = ref("");
let password = ref("");

let { error, createAccount } = useSignup();

let signUp = async () => {
  let response = await createAccount(email.value, password.value, displayName.value);
  console.log(response.user);
}

</script>

<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="display name" v-model="displayName">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button>Sign Up</button>
  </form>
</template>

<style></style>