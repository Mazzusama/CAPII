<template>
    <Navbar />
    <div class="flex items-start justify-start m-10">
        <div
            class="w-80 px-6 py-4 bg-white rounded shadow-md ring-1 ring-gray-900/10 flex items-center flex-col justify-center"
        >
            <h1 class="text-white text-lg font-bold p-4 bg-primary w-full">
                VIEW DISEASE
            </h1>

            <h1 class="Text-md m-2">Current Disease name:</h1>
            <p
                class="font-semibold p-1 bg-blue-400 text-sm m-2 rounded-full text-center"
            >
                {{ displayDisease.disease_name }}
            </p>
            <div>
                <label
                    class="block text-sm font-bold text-white w-full"
                    for="name"
                >
                    Name of Disease
                </label>
            </div>
        </div>

        <div class="border-1 border-gray-500 p-2 bg-gray-200 rounded-md">
            <!-- search -->
            <div class="p-1 bg-blue-300 rounded-t-md flex flex-row">
                <input
                    v-model="searchQuery"
                    @keydown.enter.prevent="fetchData"
                    class="placeholder:italic block font-semibold bg-sky-200 w-full border border-blue-600 rounded-md py-2 pl-7 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Search for people..."
                    type="text"
                />
                <button
                    @click.prevent="fetchData"
                    class="rounded-lg bg-blue-600 font-sans text-sm text-white p-2 font-semibold mx-2 shadow-md hover:bg-blue-900"
                >
                    Search
                </button>
            </div>

            <table class="border-2 border-t-emerald-700">
                <thead class="bg-green-600 font-semibold text-center">
                    <tr class="divide-x">
                        <th
                            class="px-4 py-2 font-semibold text-white shadow-lg"
                        >
                            People with this Health Case
                        </th>
                        <th
                            class="px-4 py-2 font-semibold text-white shadow-md"
                        >
                            VIEW
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr
                        class="odd:bg-white even:bg-slate-50 divide-x"
                        v-for="person in filteredPeople"
                        :key="person.id"
                    >
                        <td class="px-4 py-2">
                            {{ person.first_name }} {{ person.middle_name }}
                            {{ person.last_name }}
                        </td>
                        <td class="px-4 py-1">
                            <router-link
                                :to="{
                                    name: 'ViewProfile',
                                    params: { id: person.id },
                                }"
                                class="px-3 py-2 bg-green-600 rounded-lg hover:bg-green-950"
                                type="button"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    class="w-5 h-5"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Navbar from '../components/Navbar.vue'
export default {
    components: {
        Navbar,
    },
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            deceased: [],
            persons: [],
            searchQuery: [],
            displayDiseaseName: [],
            displayDisease: [],
            disease: null,
            id: this.$route.params.id,
        }
    },
    created() {
        this.fetchDisease()
        this.fetchData()
    },
    computed: {
        filteredPeople() {
            return this.deceased.filter(
                (person) =>
                    person.first_name
                        .toLowerCase()
                        .includes(this.searchQuery.toLowerCase()) ||
                    person.middle_name
                        .toLowerCase()
                        .includes(this.searchQuery.toLowerCase()) ||
                    person.last_name
                        .toLowerCase()
                        .includes(this.searchQuery.toLowerCase())
            )
        },
    },
    methods: {
        fetchData() {
            this.searchQuery = ''
            const url = `https://ejohncarlsrizz.pythonanywhere.com/disease/${this.id}/?search=${this.searchQuery}`
            axios
                .get(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem(
                            'access_token'
                        )}`,
                    },
                })
                .then((response) => {
                    this.persons = response.data.data.persons
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        fetchDisease() {
            const url = `https://ejohncarlsrizz.pythonanywhere.com/disease/${this.id}/`
            axios
                .get(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem(
                            'access_token'
                        )}`,
                    },
                })
                .then((response) => {
                    this.deceased = response.data.data.persons
                    this.displayDiseaseName = response.data.data
                    this.displayDisease = response.data.data
                })
                .catch((error) => {
                    this.$emit('error', error)
                })
        },
    },
}
</script>
