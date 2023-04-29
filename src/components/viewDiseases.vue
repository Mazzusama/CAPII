<template>
    <Navbar/>
    <div class="flex items-start justify-start  m-10">
      <div class="w-80 px-6 py-4 bg-white rounded shadow-md ring-1 ring-gray-900/10 flex items-center flex-col justify-center">
      <h1 class="text-white text-lg font-bold p-4 bg-primary w-full">VIEW DISEASE</h1>
      <form @submit.prevent="submit">
        <h1 class="Text-md m-2">Current Disease name:</h1>
        <p class="font-semibold p-1 bg-blue-400 text-sm m-2 rounded-full text-center"> {{ displayDisease.disease_name }}</p>
        <div>
          <label class="block text-sm font-bold text-white w-full" for="name">
            Name of Disease
          </label>
          
        </div>
      </form>
      </div>
      <div class=" w-1/2 border-1 border-gray-500 p-2 bg-gray-200 m-10">
        <table class="p-5">
  
  <thead class="bg-green-600 font-semibold text-center">

    <tr class="divide-x">
      <th class="px-4 py-2 font-semibold text-white shadow-lg">PEOPLE WITH DISEASE</th>

      <th class="px-4 py-2 font-semibold text-white shadow-md">VIEW</th>
      <th class="px-4 py-2 font-semibold text-white shadow-md">SEND SMS</th>
    </tr>
         
  </thead>

  <tbody>
    <tr class="odd:bg-white even:bg-slate-50 divide-x" v-for="person in deceased" :key="person.id">
      <td class="px-4 py-2">{{ person.first_name }} {{ person.middle_name }} {{ person.last_name}}</td>
      <!-- <td class="px-4 py-2">
       <router-link :to="{name: 'editDisease', params: { id: person.id }}" class="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-900" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6 mx-auto">
        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
        <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
        </svg>
      </router-link>
      </td>
      <td class="px-4 py-2">
        <router-link :to="{name: 'ViewDisease', params: { id: disease.id }}" class="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-950" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
          <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
          </svg>
      </router-link>
      </td> -->
    </tr>
  </tbody>
</table>
      </div>
    </div>
  </template>

  <script>
  import axios from 'axios';
  import Navbar from '../components/Navbar.vue'

  export default {
    components:{
      Navbar
    },
    props: {  
    id: {
      type: String,
      required: true
    }
  },
    data() {
    return {
      deceased: [],
      displayDiseaseName: [],
      displayDisease: [],
      disease: null,
      id: this.$route.params.id
    };
    
  },
  created() {
    this.fetchDisease();
  },
  methods: {
    fetchDisease() {
      const url = `https://ejohncarlsrizz.pythonanywhere.com/disease/${this.id}/`;
      axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      .then(response => {
        this.deceased = response.data.data.persons; 
        this.displayDiseaseName = response.data.data;
        this.displayDisease = response.data.data
      })
      .catch(error => {
        this.$emit('error', error);
      });
    },
}
  }
  </script>