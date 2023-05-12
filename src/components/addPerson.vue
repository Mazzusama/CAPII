<template>
    <div
        class="w-auto px-6 py-4 bg-white rounded shadow-md ring-1 ring-gray-900/10 absolute"
    >
        <form @submit.prevent="submit">
            <div>
                <label
                    class="block w-full bg-gray-200 text-md font-bold text-gray-700 p-4 text-center"
                >
                    Complete the fields below
                </label>
                <div class="flex fles-row gap-5">
                    <input
                        v-model="firstName"
                        class="block w-64 p-2 my-3 border-gray-200 border-2 rounded-md placeholder:text-gray-400 placeholder:text-start focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        type="text"
                        placeholder="First name"
                    />
                    <input
                        v-model="lastName"
                        class="block w-64 p-2 my-3 border-gray-200 border-2 rounded-md placeholder:text-gray-400 placeholder:text-start focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        type="text"
                        placeholder="Last name"
                    />
                    <input
                        v-model="middleName"
                        class="block w-64 p-2 my-3 border-gray-200 border-2 rounded-md placeholder:text-gray-400 placeholder:text-start focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        type="text"
                        placeholder="Middle name"
                    />
                </div>
                <div class="flex flex-row mt-5 gap-5">
                    <div class="flex flex-col">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-state"
                        >
                            Gender
                        </label>

                        <select
                            v-model="gender"
                            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        >
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                    </div>
                    <div class="flex flex-col">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-state"
                        >
                            Phone Number
                        </label>
                        <input
                            v-model="phone_number"
                            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="09123456789"
                            type="tel"
                            length="11"
                        />
                    </div>
                    <div class="flex flex-col">
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-state"
                        >
                            purok #
                        </label>
                        <select
                            v-model="purok"
                            class="block appearance-none w-24 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="number"
                        >
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
                        <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-state"
                        >
                            Birthday
                        </label>
                        <input
                            v-model="birthday"
                            class="block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="date"
                        />
                    </div>
                </div>
                <div class="flex flex-col">
                    <label
                        class="bg-yellow-400 text-center uppercase tracking-wide rounded-md text-gray-700 font-bold mt-2 text-lg"
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
                            <span class="m-2 text-black">{{ labor.name }}</span>
                        </label>
                    </div>
                </div>
                <div class="flex flex-col">
                    <label
                        class="block uppercase bg-sky-400 text-center tracking-wide text-gray-700 text-lg font-bold mb-2"
                        for="grid-state"
                    >
                        Case/s
                    </label>
                    <div class="grid grid-cols-4 bg-blue-300 p-2 rounded-md">
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
import axios from 'axios'

export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            middleName: '',
            birthday: '',
            gender: '',
            phone_number: '',
            purok: '',
            selectedLabor: [],
            laborList: [],
            selectedDisease: [],
            diseaseList: [],
        }
    },
    created() {
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
        submit() {
            const diseaseArr = [...this.selectedDisease]
            const laborArr = [...this.selectedLabor]
            const formData = new FormData()
            console.log(this.selectedDisease)
            formData.append('first_name', this.firstName)
            formData.append('middle_name', this.middleName)
            formData.append('last_name', this.lastName)
            formData.append('lives_at', this.purok)
            formData.append('phone_number', this.phone_number)
            formData.append('gender', this.gender)
            formData.append('birthday', this.birthday)
            formData.append('disease', diseaseArr)
            formData.append('labor', laborArr)
            axios
                .post(
                    'https://ejohncarlsrizz.pythonanywhere.com/person/',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            Authorization: `Bearer ${localStorage.getItem(
                                'access_token'
                            )}`,
                        },
                    }
                )
                .then((response) => {
                    console.log(response)
                    if (response.data.status === '201') {
                        this.$toast.success(response.data.message)
                    } else if (response.data.status === '400') {
                        this.$toast.error(response.data.message)
                    }
                })
            // .catch((error) => {
            //     console.log(error.response)
            //     this.$toast.error(error.response.data.Message)
            // })
        },
        cancel() {
            this.$emit('cancel')
        },
    },
}
</script>
