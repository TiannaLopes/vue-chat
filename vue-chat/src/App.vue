<template>
  <div id="app" class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <h1 class="text-4xl font-bold mb-8">Live Messaging App</h1>
    <MessageList :messages="messages" />
    <MessageInput @sendMessage="sendMessage" />
  </div>
</template>

<script>
import axios from 'axios';
import MessageList from './components/MessageList.vue';
import MessageInput from './components/MessageInput.vue';

const SHEET_ID = '1qZ30RucRHD13pmg2eVd7NDgEcI1UXfyWfTwczuLW6yI';
const SHEET_NAME = 'Messages';
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key

export default {
  name: 'App',
  components: {
    MessageList,
    MessageInput,
  },
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    this.fetchMessages();
    setInterval(this.fetchMessages, 3000); // Fetch messages every 3 seconds
  },
  methods: {
    async fetchMessages() {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
        );
        console.log(response)
        this.messages = response.data.values;
      } catch (error) {
        console.error(error);
      }
    },
    async sendMessage(message) {
      try {
        const response = await axios.post(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}:append?valueInputOption=USER_ENTERED&key=${API_KEY}`,
          {
            range: SHEET_NAME,
            majorDimension: 'ROWS',
            values: [[message.timestamp, message.username, message.message]],
          }
        );
        console.log(response)
        this.fetchMessages(); 
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
/* Tailwind styles included via import in main.js */
</style>
