<template>
  <div class="w-full max-w-4xl bg-white shadow-md rounded-lg flex flex-col">
    <div class="p-4 border-b text-lg font-bold">{{ contact }}</div>
    <MessageList :messages="messages" />
    <MessageInput @sendMessage="sendMessage" />
  </div>
</template>

<script>
import MessageList from './MessageList.vue';
import MessageInput from './MessageInput.vue';

export default {
  name: 'ChatWindow',
  components: {
    MessageList,
    MessageInput,
  },
  props: {
    contact: {
      type: String,
      required: true,
    },
    messages: {
      type: Array,
      required: true,
    },
  },
  methods: {
    sendMessage(message) {
      this.$emit('sendMessage', message);
    },
  },
};
</script>

<style scoped>
/* No additional styles needed with Tailwind */
</style>

