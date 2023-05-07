<template>
    <div>
        <Navbar />
        <div class="flex items-center justify-center">
            <div class="flex items-center">
                <div class="flex items-center justify-center px-4">
                    <div
                        class="flex flex-col w-auto m-10 border-2 max-w-md p-6 mx-auto bg-white rounded-md shadow-lg gap-3"
                    >
                        <div class="flex flex-row gap-4 p-1 bg-green-300">
                            <div class="flex-row">
                                <h1 class="text-black text-lg font-bold">
                                    Name:
                                </h1>
                                <p
                                    class="text-center p-2 bg-slate-200 rounded-lg"
                                >
                                    {{ displayProfile.first_name }}
                                    {{ displayProfile.middle_name }}
                                    {{ displayProfile.last_name }}
                                </p>
                            </div>
                            <div class="flex-row gap-3">
                                <h1 class="text-black text-lg font-bold">
                                    Purok#:
                                </h1>
                                <p
                                    class="text-center p-2 bg-slate-200 rounded-lg"
                                >
                                    {{ displayProfile.lives_at }}
                                </p>
                            </div>
                            <div class="flex-row">
                                <h1 class="text-black text-lg font-bold">
                                    Age:
                                </h1>
                                <p
                                    class="text-center p-2 bg-slate-200 rounded-lg"
                                >
                                    {{ displayProfile.age }}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div class="flex flex-row gap-4 p-1 bg-amber-200">
                                <div class="flex-1 bg-slate-100">
                                    <h1
                                        class="text-black text-lg font-bold p-1 bg-green-300"
                                    >
                                        Health Case
                                    </h1>
                                    <p
                                        class="text-center rounded-lg"
                                        v-for="disease in displayProfile.disease"
                                        :key="disease.id"
                                    >
                                        {{ disease.name }},
                                    </p>
                                </div>
                                <div class="flex-1 bg-slate-100">
                                    <h1
                                        class="text-black text-lg font-bold p-1 bg-red-300"
                                    >
                                        H.P.B.C
                                    </h1>
                                    <p
                                        v-for="labor in displayProfile.labor"
                                        :key="labor.id"
                                        class="text-center"
                                    >
                                        {{ labor.name }},
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-row gap-4 p-1 bg-rose-300">
                                <div class="flex-1 bg-slate-100">
                                    <h1
                                        class="text-black text-lg font-bold p-1 bg-pink-400"
                                    >
                                        Contact Number
                                    </h1>
                                    <p class="text-center p-1 rounded-lg">
                                        {{ displayProfile.phone_number }}
                                    </p>
                                </div>
                                <div class="flex-1 bg-slate-100">
                                    <h1
                                        class="text-black text-lg font-bold p-1 bg-blue-200"
                                    >
                                        Gender
                                    </h1>
                                    <p class="text-center p-1 rounded-lg">
                                        {{ displayProfile.gender }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Navbar from '../components/Navbar.vue'

export default {
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    components: {
        Navbar,
    },
    data() {
        return {
            displayProfile: [],
            id: this.$route.params.id,
        }
    },
    created() {
        this.fetchProfile()
    },

    methods: {
        fetchProfile() {
            const url = `https://ejohncarlsrizz.pythonanywhere.com/person/${this.id}/`
            console.log(this.displayProfile)
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
                    this.displayProfile = response.data.data
                })
                .catch((error) => {
                    this.$emit('error', error)
                })
        },
    },
}
</script>
