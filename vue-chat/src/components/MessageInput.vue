<template>
  <div class="message-input w-full p-4 border-t flex space-x-4">
    <textarea v-model="message" placeholder="Type a message" class="input-field flex-grow h-12 resize-none"></textarea>
    <button @click="handleSubmit" class="btn">Send</button>
  </div>
</template>

<script>
export default {
  name: 'MessageInput',
  data() {
    return {
      message: '',
    };
  },
  methods: {
    handleSubmit() {
      if (this.message) {
        const messageData = {
          timestamp: new Date().toISOString(),
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
