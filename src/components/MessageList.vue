<template>
  <div class="message-list flex-grow overflow-y-auto p-4">
    <div v-for="message in messages" :key="message[0]" class="message mb-4">
      <div class="flex justify-between">
        <span class="timestamp text-sm text-gray-500">{{ message[0] }}</span>
        <span class="username font-bold text-blue-600">{{ message[1] }}</span>
      </div>
      <p class="content text-gray-800">{{ message[2] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageList',
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* No additional styles needed with Tailwind */
</style>
