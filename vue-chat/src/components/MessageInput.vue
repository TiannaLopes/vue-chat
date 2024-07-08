<template>
  <div class="message-input w-full max-w-2xl bg-white shadow-md rounded-lg p-4 mt-8 flex flex-col space-y-4">
    <input v-model="username" type="text" placeholder="Your name" class="input-field" />
    <textarea v-model="message" placeholder="Type a message" class="input-field h-24"></textarea>
    <button @click="handleSubmit" class="btn">Send</button>
  </div>
</template>

<script>
export default {
  name: 'MessageInput',
  data() {
    return {
      username: '',
      message: '',
    };
  },
  methods: {
    handleSubmit() {
      if (this.username && this.message) {
        const messageData = {
          timestamp: new Date().toISOString(),
          username: this.username,
          message: this.message,
        };
        this.$emit('sendMessage', messageData);
        this.message = '';
      }
    },
  },
};
</script>

<style scoped>
.input-field {
  @apply p-2 border border-gray-300 rounded;
}

.btn {
  @apply p-2 bg-blue-500 text-white rounded cursor-pointer;
}

.btn:hover {
  @apply bg-blue-600;
}
</style>
