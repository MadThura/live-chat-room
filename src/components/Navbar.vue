<script setup>
import { auth } from '@/firebase/config';
import { signOut } from 'firebase/auth';
import { ref } from 'vue';
import getUser from '@/composables/getUser';

let error = ref(null);

let { user } = getUser();

let logout = async () => {
    try {
        await signOut(auth);
    } catch (err) {
        error.value = err.message;
        console.log(err.value);
    }
}

</script>

<template>
    <nav v-if="user">
        <div>
            <p>{{ user.displayName }}</p>
            <p class="email">{{ user.email }}</p>
        </div>
        <button @click="logout">Logout</button>
    </nav>
</template>

<style>
nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
}

nav p.email {
    font-size: 14px;
    color: #999;
}
</style>