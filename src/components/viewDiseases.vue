<template>
    <Navbar />
    <div class="flex items-start justify-start m-10">
        <div
            class="w-80 px-6 py-4 bg-white rounded shadow-md ring-1 ring-gray-900/10 flex items-center flex-col justify-center"
        >
            <h1 class="text-white text-lg font-bold p-4 bg-primary w-full">
                VIEW DISEASE
            </h1>
            <form @submit.prevent="submit">
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
            </form>
        </div>
        <div class="w-1/2 border-1 border-gray-500 p-2 bg-gray-200 m-10">
            <table class="p-5">
                <thead class="bg-green-600 font-semibold text-center">
                    <tr class="divide-x">
                        <th
                            class="px-4 py-2 font-semibold text-white shadow-lg"
                        >
                            PEOPLE WITH DISEASE
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
                        class="odd:bg-white even:bg-slate-50 divide-x"
                        v-for="person in deceased"
                        :key="person.disease_name"
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
            deceased: [],
            displayDiseaseName: [],
            displayDisease: [],
            disease: null,
            id: this.$route.params.id,
        }
    },
    created() {
        this.fetchDisease()
    },
    methods: {
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
                    const persons = response.data.data.persons

                    // Filter persons with matching disease id
                    const filteredPersons = persons.filter((person) =>
                        person.disease.includes(this.id)
                    )

                    this.deceased = filteredPersons
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
