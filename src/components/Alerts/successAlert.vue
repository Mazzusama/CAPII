<template>
    <div class="fixed bottom-10 right-10 z-50">
      <div v-if="show" class="bg-green-500 text-white p-4 rounded-lg shadow-lg">
        <p class="font-bold mb-2">{{ message }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      message: {
        type: String,
        required: true,
      },
      duration: {
        type: Number,
        default: 3000,
      },
    },
    data() {
      return {
        show: false,
      };
    },
    methods: {
      showNotification() {
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, this.duration);
      },
    },
    watch: {
      message() {
        this.showNotification();
      },
    },
  };
  </script>