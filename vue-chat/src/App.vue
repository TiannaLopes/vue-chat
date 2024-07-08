<template>
  <div id="app" class="min-h-screen flex">
    <SidebarComponent :contacts="contacts" @selectContact="selectContact" />
    <div class="flex-grow flex flex-col items-center justify-center bg-gray-100">
      <ChatWindow v-if="selectedContact" :contact="selectedContact" :messages="messages" @sendMessage="sendMessage" />
      <div v-else class="text-center text-gray-500">Select a contact to start chatting</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SidebarComponent from './components/SidebarComponent.vue';
import ChatWindow from './components/ChatWindow.vue';

const SHEET_ID = '1qZ30RucRHD13pmg2eVd7NDgEcI1UXfyWfTwczuLW6yI';
const SHEET_NAME = 'Messages';

export default {
  name: 'App',
  components: {
    SidebarComponent,
    ChatWindow,
  },
  data() {
    return {
      contacts: ['Alice', 'Bob', 'Charlie'], // Replace with your contacts
      selectedContact: null,
      messages: [],
    };
  },
  mounted() {
    this.fetchMessages();
    setInterval(this.fetchMessages, 3000); // Fetch messages every 3 seconds
  },
  methods: {
    selectContact(contact) {
      this.selectedContact = contact;
      this.fetchMessages();
    },
    async fetchMessages() {
      if (!this.selectedContact) return;
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?`
        );
        this.messages = response.data.values.filter(message => message[1] === this.selectedContact || message[2] === this.selectedContact);
      } catch (error) {
        console.error(error);
      }
    },
    async sendMessage(message) {
      if (!this.selectedContact) return;
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await axios.post(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}:append?valueInputOption=USER_ENTERED`,
          {
            range: SHEET_NAME,
            majorDimension: 'ROWS',
            values: [[message.timestamp, this.selectedContact, message.message]],
          }
        );
        this.fetchMessages(); // Refresh messages after sending
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
