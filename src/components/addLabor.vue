<template>
  <div class="min-w-64 px-6 py-4 bg-white rounded shadow-md ring-1 ring-gray-900/10 absolute">
    <form @submit.prevent="submit">
    
      <div>
        <label class="block text-sm font-bold text-gray-700" for="name">
          Name of labor
        </label>
        <input
          v-model="laborName"
          class="block w-full mt-1 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-center focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="text"
          placeholder="Input labor name here"
        />
      </div>
      <div class="flex items-center justify-start mt-4 gap-x-2">
        <button
          type="submit"
          class="px-6 py-2 text-sm font-semibold rounded-md shadow-md text-sky-100 bg-sky-500 hover:bg-sky-700 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
        >
          Save
        </button>
        <button
          type="button"
          class="px-6 py-2 text-sm font-semibold text-gray-100 bg-gray-400 rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
          @click="cancel"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      laborName: '',
    };
  },
  methods: {
    submit() {
      axios.post('https://ejohncarlsrizz.pythonanywhere.com/labor/', {
        name: this.laborName
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      .then(response => {
        this.$emit('success');
        window.location.reload();
      })
      .catch(error => {
        this.$emit('error', error);
      });
    },
    cancel() {
      this.$router.push('/labors');
    },
  },
};
</script>