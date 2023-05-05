<template>
    <div class="grid grid-rows-2 w-screen h-screen">
        <div class="bg-primary"></div>

        <card class="flex flex-col mx-auto absolute card">
            <template v-slot:content>
                <form @submit.prevent="submitForm">
                    <!-- USERNAME TEXT FIELD -->
                    <div class="mb-4">
                        <label for="email">Email</label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="id_email"
                            type="email"
                            v-model="email"
                            placeholder="Email"
                        />
                    </div>
                    <!-- PASSWORD TEXT FIELD -->
                    <div class="mb-6">
                        <label for="password">Password</label>
                        <input
                            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="id_password"
                            type="password"
                            v-model="password"
                            placeholder="************"
                        />
                        <p class="text-red-500 text-xs italic">
                            Please input your password.
                        </p>
                    </div>
                    <!-- LOG IN BUTTON -->
                    <div class="flex items-center justify-between">
                        <button
                            class="bg-blue-500 py-2 px-7 rounded-lg align-baseline font-bold text-sm text-white hover:text-blue-800"
                            type="submit"
                        >
                            LOGIN
                        </button>
                        <!-- FORGOT PASSWORD BUTTON -->
                        <a
                            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            href="#"
                            >Forgot Password?</a
                        >
                    </div>
                </form>
            </template>
            <template v-slot:title>
                <div class="flex items-center flex-col">
                    <img
                        class="h-28 w-28 mb-5 p-1 bg-primary rounded-lg flex items-center justify-center"
                        src="../assets/C.A.P.I(1).png"
                    />
                    <h1 class="text-center text-3xl text-primary font-bold">
                        LOGIN
                    </h1>
                </div>
            </template>
        </card>

        <div class="bg-secondary"></div>
    </div>
</template>

<script>
import card from '../components/card.vue'

// import axios from 'axios';
export default {
    components: {
        card,
    },
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async submitForm() {
            try {
                const response = await this.$store.dispatch('user/login', {
                    email: this.email,
                    password: this.password,
                })

                this.$router.push('/records')
            } catch (error) {
                console.error(error)
            }
        },
    },
}
</script>

<style>
.card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.card .title {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card .title img {
    margin-right: 0.5rem;
}
</style>
<style>
.card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
label {
    display: block;
    color: #4a5568;
    font-size: 0.875rem; /* 14px */
    font-weight: 600;
    margin-bottom: 0.5rem; /* 8px */
}
</style>
