<template>
    <div>
        <Navbar />
        <div class="flex m-10 justify-center">
            <div
                class="w-80 px-6 py-4 bg-white rounded shadow-md ring-1 ring-gray-900/10"
            >
                <h1 class="text-white text-lg font-bold p-4 bg-primary w-full">
                    EDIT LABOR
                </h1>
                <form @submit.prevent="submit">
                    <h1 class="Text-md m-2">Current Labor name:</h1>
                    <p
                        class="font-semibold p-1 bg-blue-400 text-sm m-2 rounded-full text-center"
                    >
                        {{ displaylabor.labor_name }}
                    </p>
                    <div>
                        <label
                            class="block text-sm font-bold w-full"
                            for="name"
                        >
                            Name of Labor
                        </label>
                        <input
                            v-model="laborName"
                            class="block w-full mt-3 border-2 p-2 border-gray-300 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-center focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            type="text"
                            placeholder="Input new labor name here"
                        />
                    </div>
                    <div class="flex justify-center mt-10 gap-x-2">
                        <button
                            type="submit"
                            class="px-6 py-2 text-sm font-semibold rounded-md shadow-md text-sky-100 bg-sky-500 hover:bg-sky-700 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            class="px-6 py-2 text-sm font-semibold text-red-100 bg-red-400 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                            @click="deleteLabor"
                        >
                            Delete
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
    </div>
</template>

<script>
import Navbar from './Navbar.vue'
import axios from 'axios'

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
            laborName: '',
            displaylaborName: [],
            displaylabor: [],
            labor: null,
            id: this.$route.params.id,
        }
    },
    created() {
        this.fetchLabor()
    },
    methods: {
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
                    this.displaylabor = response.data.data
                    this.displaylaborName = response.data.data
                })
                .catch((error) => {
                    this.$emit('error', error)
                })
        },
        submit() {
            const url = `https://ejohncarlsrizz.pythonanywhere.com/labor/${this.id}/`
            axios
                .put(
                    url,
                    { name: this.laborName },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${localStorage.getItem(
                                'access_token'
                            )}`,
                        },
                    }
                )
                .then((response) => {
                    this.$emit('success')
                    this.$router.push('/labors')
                })
                .catch((error) => {
                    this.$emit('error', error)
                })
        },
        deleteLabor() {
            const url = `https://ejohncarlsrizz.pythonanywhere.com/labor/${this.id}/`
            axios
                .delete(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem(
                            'access_token'
                        )}`,
                    },
                })
                .then((response) => {
                    this.$emit('success')
                    this.$router.push('/labors')
                })
                .catch((error) => {
                    this.$emit('error', error)
                })
        },
        cancel() {
            this.$router.push('/labors')
        },
    },
}
</script>
