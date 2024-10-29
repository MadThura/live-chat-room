<script setup>
import { ref } from 'vue';
import { auth } from '@/firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

let displayName = ref("");
let email = ref("");
let password = ref("");
let error = ref("");

let signUp = async () => {
  try {
    let response = await createUserWithEmailAndPassword(auth, email.value, password.value);
    if(!response) {
      throw new Error("could not create new user")
    }
  } catch(err) {
    error.value = err.message;
  }
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