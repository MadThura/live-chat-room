<script setup>
import { db } from '@/firebase/config';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { ref } from 'vue';

let messages = ref([]);

let messagesCollection = collection(db, "messages");
let messagesQuery = query(messagesCollection, orderBy("created_at", "desc"));

onSnapshot(messagesQuery, (snapshot) => {
    snapshot.docs.forEach((doc) => {
        let document = { id: doc.id, ...doc.data() }
        doc.data().created_at && messages.value.push(document);
    });
});

</script>

<template>
    <div class="chat-window">
        <div class="messages" v-for="message in messages" :key="message.id">
            <div class="single">
                <span class="created-at">
                    {{ message.created_at.toDate() }}
                </span>
                <span class="name">{{ message.name }}</span>
                <span class="message">{{ message.message }}</span>
            </div>
        </div>
    </div>
</template>

<style>
.chat-window {
    background: #fafafa;
    padding: 30px 20px;
}

.single {
    margin: 18px 0;
}

.created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
}

.name {
    font-weight: bold;
    margin-right: 6px;
}

.messages {
    max-height: 400px;
    overflow: auto;
}
</style>