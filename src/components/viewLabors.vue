<template>
    <Navbar />
    <div class="flex items-center m-10">
        <div
            class="w-80 px-6 py-2 bg-white rounded shadow-md ring-1 ring-gray-900/10 flex items-center flex-col justify-center"
        >
            <h1
                class="text-white text-lg font-bold p-4 text-center bg-primary w-full"
            >
                EDIT HEALTH PROGRAM BENEFICIARY CATEGORY (H.P.B.C)
            </h1>

            <h1 class="Text-md m-2">Current HPBC name:</h1>
            <p
                class="font-semibold p-2 bg-blue-400 text-sm rounded-full text-center"
            >
                {{ displayLabor.labor_name }}
            </p>
            <div>
                <label
                    class="block text-sm font-bold text-white w-full"
                    for="name"
                >
                    input HPBC here
                </label>
            </div>
        </div>

        <div class="w-1/2 border-1 border-gray-500 p-2 bg-gray-200 m-2">
            <!-- search -->
            <div class="p-1 bg-blue-300 rounded-t-md flex flex-row">
                <input
                    v-model="searchQuery"
                    @keydown.enter.prevent="fetchData"
                    class="placeholder:italic block font-semibold bg-sky-200 w-full border border-blue-600 rounded-md py-2 pl-7 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Search for anything..."
                    type="text"
                />
                <button
                    @click.prevent="fetchData"
                    class="rounded-lg bg-blue-600 font-sans text-sm text-white p-2 font-semibold mx-2 shadow-md hover:bg-blue-900"
                >
                    Search
                </button>
            </div>
            <!-- /search -->
            <table class="border-2 border-t-emerald-700">
                <thead class="bg-green-600 font-semibold text-center">
                    <tr class="divide-x">
                        <th
                            class="px-4 py-2 font-semibold text-white shadow-lg"
                        >
                            People with this H.P.B.C
                        </th>
                        <th
                            class="px-4 py-2 font-semibold text-white shadow-md"
                        >
                            VIEW
                        </th>
                        <th
                            class="px-4 py-2 font-semibold text-white shadow-md"
                        >
                            SEND SMS
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr
                        class="odd:bg-white even:bg-slate-200 divide-x"
                        v-for="person in filteredPeople"
                        :key="person.id"
                    >
                        <td class="px-4 py-2">
                            {{ person.first_name }} {{ person.middle_name }}
                            {{ person.last_name }}
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
            LaborName: [],
            persons: [],
            searchQuery: [],
            displayLaborName: [],
            displayLabor: [],
            labor: null,
            id: this.$route.params.id,
        }
    },
    created() {
        this.fetchLabor()
        this.fetchData()
    },
    computed: {
        filteredPeople() {
            return this.LaborName.filter(
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
            const url = `https://ejohncarlsrizz.pythonanywhere.com/labor/${this.id}/?search=${this.searchQuery}`

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
        fetchLabor() {
            const url = `https://ejohncarlsrizz.pythonanywhere.com/labor/${this.id}/`
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
                    this.LaborName = response.data.data.persons
                    this.displayLabor = response.data.data
                    this.displayLaborName = response.data.data
                })
                .catch((error) => {
                    this.$emit('error', error)
                })
        },
    },
}
</script>
