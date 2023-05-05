<template>
    <div><Navbar/>
    <div class="w-screen flex items-center justify-center px-6 py-4 bg-white rounded shadow-md ring-1 ring-gray-900/10">
      <form @submit.prevent="submit">
      
        <div>
          <label class="block w-full uppercase bg-gray-200 text-lg font-bold text-gray-700 p-4 text-center">
            Complete the fields below
          </label>
        <div class="flex flex-row items-center gap-5">
          <label>First Name
          <input
            v-model="firstName"
            class="block w-auto p-2 my-3
            border-gray-200
            border-2 rounded-md 
            placeholder:text-gray-400 
            placeholder:text-start
            focus:border-indigo-300 focus:ring 
            focus:ring-indigo-200 
            focus:ring-opacity-50"
            type="text"
            placeholder=firstName
          /></label>
          <label>Last Name
          <input
            v-model="lastName"
            class="block w-auto p-2 my-3
            border-gray-200 border-2
            rounded-md 
            placeholder:text-gray-400 
            placeholder:text-start
            focus:border-indigo-300 
            focus:ring 
            focus:ring-indigo-200 
            focus:ring-opacity-50"
            type="text"
            placeholder="Last name"
          /></label>
          <label>Middle Name
          <input
            v-model="middleName"
            class="block w-auto p-2 my-3
            border-gray-200 border-2
            rounded-md 
            placeholder:text-gray-400 
            placeholder:text-start 
            focus:border-indigo-300 
            focus:ring 
            focus:ring-indigo-200 
            focus:ring-opacity-50"
            type="text"
            placeholder="Middle name"
          /></label>
        </div>
        <div class="flex flex-row mt-5 gap-5">
        <div class="flex flex-col">

            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Gender
            </label>

            <select 
                v-model="gender"
                class="block appearance-none w-auto 
                bg-gray-200 border 
                border-gray-200 
                text-gray-700 py-3 px-4 pr-8 
                rounded leading-tight 
                focus:outline-none
                focus:bg-white
                focus:border-gray-500" 
                 >
                    <option value="M">Male</option>
                    <option value="F">Female</option>
            </select>
    
        </div>
        <div class="flex flex-col">

            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Phone Number
            </label>
            <input 
                v-model="phone_number"
                class="block appearance-none w-auto 
                bg-gray-200 border 
                border-gray-200 
                text-gray-700 py-3 px-4 pr-8 
                rounded leading-tight 
                focus:outline-none
                focus:bg-white
                focus:border-gray-500"
                placeholder="09123456789"
                type="tel"
                length="11"
            />
        </div>
        <div class="flex flex-col">

            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            purok #
            </label>
            <select
                v-model="purok"
             
                class="block appearance-none w-auto
                bg-gray-200 border 
                border-gray-200 
                text-gray-700 py-3 px-4 pr-8 
                rounded leading-tight 
                focus:outline-none
                focus:bg-white
                focus:border-gray-500"
                type="number">
                <option>Purok 1</option>
                <option>Purok 2</option>
                <option>Purok 3</option>
                <option>Purok 4</option>
                <option>Purok 5</option>
                <option>Purok 6</option>
                <option>Purok 7</option>
            </select>
        </div>
        <div class="flex flex-col">

            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Birthday
            </label>
            <input 
                v-model="birthday"
                class="block appearance-none
                bg-gray-200 border 
                border-gray-200 
                text-gray-700 py-3 px-4 pr-8 
                rounded leading-tight 
                focus:outline-none
                focus:bg-white
                focus:border-gray-500"
                type="date"
            />
        </div>
        </div>
        <!-- choose labor -->
       
        <div class="flex flex-col">
                    <label
                        class="bg-yellow-400 text-center uppercase tracking-wide rounded-md  text-gray-700 font-bold mt-2 text-lg"
                        for="grid-state"
                    >
                        Health Category
                    </label>
                    <div class="grid grid-cols-4 bg-yellow-200">
                        <label
                            v-for="labor in laborList"
                            :key="labor.id"
                            class="inline-flex items-center"
                        >
                            <input
                                type="checkbox"
                                v-model="selectedLabor"
                                multiple
                                :value="labor.id"
                                class="m-2 form-checkbox h-4 w-4 text-gray-600"
                            />
                            <span class="m-2 text-black">{{
                                labor.name
                            }}</span>
                        </label>       
                    </div>
                </div>
                <!-- choose disease -->
                <div class="flex flex-col">
                    <label
                        class="block uppercase bg-sky-400 text-center tracking-wide text-gray-700 text-lg font-bold mb-2"
                        for="grid-state"
                    >
                        Case/s
                    </label>
                    <div class="grid grid-cols-5 bg-blue-300 p-2 rounded-md">
                        <label
                            v-for="disease in diseaseList"
                            :key="disease.id"
                            class="inline-flex items-center"
                        >
                            <input
                                type="checkbox"
                                v-model="selectedDisease"
                                multiple
                                :value="disease.id"
                                class="form-checkbox h-4 w-4 text-gray-600"
                            />
                            <span class="m-2 text-black">{{
                                disease.name
                            }}</span>
                        </label>
                        
                    </div>
                </div>
              
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
              class="px-6 py-2 text-sm font-semibold text-red-100 bg-red-400 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
              @click="deleteRecord"
            >
              Delete Record
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
</div>
</template>
  
  <script>
  import axios from 'axios';
  import Navbar from './Navbar.vue'

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
      firstName: '',
      middleName: '',
      lastName: '',
      purok: '',
      phoneNumber: '',
      gender: '',
      birthday: '',
      records: [],
      selectedLabor: [],
      laborList: [],
      selectedDisease: [],
      diseaseList: [],
      id: this.$route.params.id
    };
    },
    created() {
    this.fetchRecords();
    this.fetchLabor()
    this.fetchDisease()

  },
  methods: {
    fetchLabor() {
            const url = 'https://ejohncarlsrizz.pythonanywhere.com/labor/'
            axios
                .get(url, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'access_token'
                        )}`,
                    },
                })
                .then((response) => {
                    this.laborList = response.data.data
                })
                .catch((error) => {
                    this.$emit('error', error)
                })
        },
        fetchDisease() {
            const url = 'https://ejohncarlsrizz.pythonanywhere.com/disease/'
            axios
                .get(url, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'access_token'
                        )}`,
                    },
                })
                .then((response) => {
                    this.diseaseList = response.data.data
                })
                .catch((error) => {
                    this.$emit('error', error)
                })
        },
    fetchRecords() {
      const url = `https://ejohncarlsrizz.pythonanywhere.com/person/${this.id}/`;
      axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      
      .then(response => {
        this.records = response.data.data;
        this.firstName = this.records.first_name;
        this.middleName = this.records.middle_name;
        this.lastName = this.records.last_name;
        this.purok = this.records.lives_at;
        this.phoneNumber = this.records.phone_number;
        this.gender = this.records.gender;
        this.birthday = this.records.birthday;
        this.laborList = this.records.labor;
        this.diseaseList = this.records.disease
      })
      .catch(error => {
        this.$emit('error', error);
      });
    },
    submit() {
     
      console.log({
        firstName: this.firstName,
        middleName: this.middleName,
        lastName: this.lastName,
        purok: this.purok,
        phoneNumber: this.phoneNumber,
        gender: this.gender,
        birthday: this.birthday,
        disease: this.selectedDisease,
        labor: this.selectedLabor,
      });

      axios.put(`https://ejohncarlsrizz.pythonanywhere.com/person/${this.id}/`, {
          first_name: this.firstName,
          middle_name: this.middleName,
          last_name: this.lastName,
          lives_at: this.purok,
          phone_number: this.phoneNumber,
          gender: this.gender,
          birthday: this.birthday,
          disease: this.selectedDisease,
          labor: this.selectedLabor,


        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then(response => {
          this.$emit('success');
          // window.location.reload();
        })
        .catch(error => {
          this.$emit('error', error);
        });
    },
    deleteRecord() {
      const url = `https://ejohncarlsrizz.pythonanywhere.com/person/${this.id}/`;
      axios.delete(url, {
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      })
      .then(response => {
      this.$emit('success');
      this.$router.push('/records');
      })
      .catch(error => {
        this.$emit('error', error);
      });
    },
    cancel() {
      this.$router.push('/records');
    },
  },
  };
  </script>