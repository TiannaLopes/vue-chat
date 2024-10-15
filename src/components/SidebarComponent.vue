<template>
  <div class="w-64 bg-white shadow-md">
    <div class="p-4 font-bold text-lg">Contacts</div>
    <ul>
      <li
        v-for="contact in contacts"
        :key="contact"
        @click="select(contact)"
        class="cursor-pointer p-4 hover:bg-gray-100"
      >
        {{ contact }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidenbarComponent',
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    select(contact) {
      this.$emit('selectContact', contact);
    },
  },
};
</script>

<style scoped>
/* No additional styles needed with Tailwind */
</style>

