<template>
    <div>
        <Navbar />
        <div class="flex items-center justify-center bg-gray-100">
            <div class="flex items-center">
                <div class="flex items-center justify-center h-screen px-4">
                    <div
                        class="w-full max-w-md p-6 mx-auto bg-white rounded-md shadow-lg"
                    >
                        <div>
                            <h1 class="text-black text-lg font-bold">Name:</h1>
                            <p class="text-center">
                                {{ displayProfile.first_name }}
                                {{ displayProfile.middle_name }}
                                {{ displayProfile.last_name }}
                            </p>
                            <h1 class="text-black text-lg font-bold">
                                Purok#:
                            </h1>
                            <p class="text-center">
                                {{ displayProfile.lives_at }}
                            </p>
                            <h1>Age</h1>
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
