<template>
    <div>
        <Navbar />
        <div class="flex items-center m-5 mx-auto justify-center">
            <div
                class="w-80 px-6 py-2 bg-white rounded shadow-md min-h-full flex items-center flex-col justify-center"
            >
                <h1
                    class="text-white text-lg font-bold p-4 text-center bg-primary w-full"
                >
                    SMS HISTORY
                </h1>
                <h1 class="text-md m-2">Message Details:</h1>
                <div class="flex bg-slate-200 p-2 rounded-md max-w-full">
                    <p class="text-left whitespace-pre-wrap">
                        {{ messageList }}
                    </p>
                </div>
                <button
                    type="button"
                    class="px-6 py-2 text-sm font-semibold text-red-100 bg-red-400 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                    @click="deleteMessage"
                >
                    Delete
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Navbar from '../Navbar.vue'

export default {
    components: {
        Navbar,
    },
    props: {
        id: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            messageList: '',
            id: this.$route.params.id,
        }
    },
    created() {
        this.fetchMessage()
    },

    methods: {
        fetchMessage() {
            const url = `https://ejohncarlsrizz.pythonanywhere.com/message/${this.id}/`
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
                    console.log('data', response.data.data.content)
                    this.messageList = response.data.data.content
                })
                .catch((error) => {
                    this.$emit('error', error)
                })
        },
        deleteMessage() {
            const url = `https://ejohncarlsrizz.pythonanywhere.com/message/${this.id}/`
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
                    console.log(response)
                    if (response.data.status === '204') {
                        this.$toast.success(response.data.message)
                        this.$router.go(-1)
                    }
                })
        },
    },
}
</script>
