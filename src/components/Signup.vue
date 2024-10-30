<script setup>
import { ref } from 'vue';
import useSignup from '@/composables/useSignup';

let displayName = ref("");
let email = ref("");
let password = ref("");

let emit = defineEmits(['enterChatroom']);

let { error, createAccount } = useSignup();

let signUp = async () => {
  let response = await createAccount(email.value, password.value, displayName.value);
  if (response) {
    emit('enterChatroom');
  }
}

</script>

<template>
  <h2>Sign Up</h2>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="display name" v-model="displayName">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <div v-if="error" class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<style></style>