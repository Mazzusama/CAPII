<template>
    <div class="relative flex min-h-screen">
        <!-- sidebar -->
        <div
            class="bg-primary w-44 flex flex-col space-y-6 md:relative md:-translate-x-0 px-2 py-4 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out"
            :class="{ 'relative -translate-x-0': showSidebar }"
        >
            <div class="flex flex-row">
                <img
                    class="rounded-md w-12 h-12 m-2"
                    src="../../assets/C.A.P.I(1).png"
                />
                <a
                    class="font-sans text-2xl py-4 text-white hover:text-gray-200 hover:opacity-70"
                    >C.A.P.I
                </a>
            </div>

            <div>
                <nav class="sidebar-nav">
                    <!-- RECORDS -->
                    <router-link
                        tag="button"
                        to="/records"
                        class="text-white flex items-center space-x-2 bg-blue-800 hover:bg-blue-500 active:bg-blue-500 py-3 px-4"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"
                            />
                        </svg>
                        <span class="text-white font-semibold m-2"
                            >Records</span
                        >
                    </router-link>

                    <!-- LABORS BUTTON -->
                    <router-link
                        tag="button"
                        to="/labors"
                        class="text-white flex items-center space-x-2 bg-blue-800 hover:bg-blue-500 active:bg-blue-500 py-3 px-4"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                clip-rule="evenodd"
                            />
                            <path
                                d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z"
                            />
                        </svg>
                        <span class="text-white font-semibold m-2"
                            >H.P.B.C</span
                        >
                    </router-link>
                    <!-- DISEASES BUTTON -->
                    <router-link
                        tag="button"
                        to="/disease"
                        class="text-white flex items-center space-x-2 bg-blue-800 hover:bg-blue-500 active:bg-blue-500 py-3 px-4"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                                clip-rule="evenodd"
                            />
                            <path
                                fill-rule="evenodd"
                                d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="text-white font-semibold m-2"
                            >Health Cases</span
                        >
                    </router-link>
                    <!-- MESSAGES BUTTON -->
                    <router-link
                        tag="button"
                        to="/sms"
                        class="text-white flex items-center space-x-2 bg-blue-500 py-3 px-4"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
                            />
                            <path
                                d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
                            />
                        </svg>
                        <span class="text-white font-semibold m-2"
                            >Send Messages</span
                        >
                    </router-link>

                    <!-- LOGOUT BUTTON -->
                    <router-link
                        to="/login"
                        @click="logout"
                        class="text-white flex items-center space-x-2 bg-blue-800 hover:bg-blue-500 active:bg-blue-500 py-3 px-4"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="text-white font-semibold m-2"
                            >Log out</span
                        >
                    </router-link>
                </nav>
            </div>
        </div>

        <!-- main content -->
        <div class="flex-1">
            <!-- header -->
            <div
                class="shadow px-2 py-4 text-4xl w-full flex flex-row items-center bg-secondary mb-5"
            >
                <button
                    @click="showSidebar = !showSidebar"
                    class="flex flex-row p-2 bg-primary mx-2 rounded-md"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="white"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                        />
                    </svg></button
                >RECORDS
            </div>
            <!-- content -->
            <div
                class="flex items-center flex-col p-5 bg-slate-200 max-w-3xl mx-auto"
            >
                <div
                    class="grid my-2 grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 w-full"
                >
                    <router-link
                        type="button"
                        class="p-2 text-white font-semibold text-sm bg-primary hover:bg-blue-950"
                        to="/sendPurok"
                        >By Purok</router-link
                    >
                    <router-link
                        type="button"
                        class="p-2 text-white font-semibold text-sm bg-blue-950"
                        to="/sendLabor"
                        >By H.P.B.C</router-link
                    >
                    <router-link
                        type="button"
                        class="p-2 text-white font-semibold text-sm bg-primary hover:bg-blue-950"
                        to="/sendDisease"
                        >By Health Case</router-link
                    >
                    <router-link
                        type="button"
                        class="p-2 text-white font-semibold text-sm bg-primary hover:bg-blue-950"
                        to="/sendUser"
                        >By Person</router-link
                    >

                    <router-link
                        type="button"
                        class="p-2 text-white font-semibold text-sm bg-primary hover:bg-blue-950"
                        to="/smsHistory"
                        >View SMS History</router-link
                    >
                </div>
                <div class="w-full my-2">
                    <form @submit.prevent="submit">
                        <div class="mb-4 w-full">
                            <label
                                class="text-center block font-bold mb-2 w-full bg-secondary p-1"
                                for="recipients"
                                >Send SMS by H.P.B.C</label
                            >
                            <select
                                v-model="labor"
                                class="w-full p-2 border border-gray-900 bg-slate-400 text-lg font-semibold text-white"
                            >
                                <option disabled selected value="">
                                    Select a labor
                                </option>
                                <option
                                    v-for="labor in laborList"
                                    :value="labor.name"
                                    class="text-sm font-semibold text-white"
                                >
                                    {{ labor.name }}
                                </option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label
                                class="block font-bold m-2 bg-secondary p-1 bg-opacity-40 rounded-lg w-full"
                                for="message"
                                >Message</label
                            >
                            <textarea
                                v-model="message"
                                class="form-textarea block w-full m-2 border"
                                rows="4"
                                placeholder="Type your message here..."
                            ></textarea>
                        </div>
                        <button
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            type="submit"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { ref } from 'vue'
export default {
    setup() {
        const showSidebar = ref(false)

        return {
            showSidebar,
        }
    },
    created() {
        this.authenticate()
    },
    data() {
        return {
            laborList: [],
            message: '',
            labor: '',
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('user/logout')
        },
        authenticate() {
            const axiosInstance = axios.create({
                baseURL: 'https://ejohncarlsrizz.pythonanywhere.com/',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem(
                        'access_token'
                    )}`,
                },
            })
            axiosInstance
                .get('labor/')
                .then((response) => {
                    console.log('data', response.data)
                    this.$store.commit('user/setUser', response.data.data)
                    this.laborList = response.data.data
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        submit() {
            axios
                .post(
                    `https://ejohncarlsrizz.pythonanywhere.com/sms/labor/`,
                    {
                        labor: this.labor,
                        message: this.message,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                                'access_token'
                            )}`,
                        },
                    }
                )
                .then((response) => {
                    console.log(response)
                    if (response.data.status === '200') {
                        this.$toast.success(response.data.message)
                    } else if (response.data.status === '400') {
                        this.$toast.error(response.data.message)
                    }
                })
        },
    },
}
</script>
<style></style>
