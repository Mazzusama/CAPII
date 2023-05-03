<template>
  <div class="fixed bottom-10 right-10 z-50">
    <div v-if="show" class="bg-green-500 text-white p-4 rounded-lg shadow-lg">
      <p class="font-bold mb-2" v-for="msg in successMessages">{{ msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    response: {
      type: Object,
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
      successMessages: [],
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
    response() {
      if (this.response && this.response.data && this.response.data.success) {
        this.successMessages = this.response.data.success;
        this.showNotification();
      }
    },
  },
};
</script>