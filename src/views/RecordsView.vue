<template>
    <div class="relative flex min-h-screen">
        <!-- sidebar -->
        <div class="bg-primary w-44 flex flex-col space-y-6">
            <div class="flex flex-row">
                <img
                    class="rounded-md w-12 h-12 m-2"
                    src="../assets/C.A.P.I(1).png"
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
                        class="text-white flex items-center space-x-2 bg-blue-500 py-2 px-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-5 h-5"
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
                        class="text-white flex items-center space-x-2 bg-blue-800 hover:bg-blue-500 active:bg-blue-500 py-2 px-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-5 h-5"
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
                        class="text-white flex items-center space-x-2 bg-blue-800 hover:bg-blue-500 active:bg-blue-500 py-2 px-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-5 h-5"
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
                        to="/login"
                        @click="handleLogoutClick"
                        class="text-white flex items-center space-x-2 bg-blue-800 hover:bg-blue-500 active:bg-blue-500 py-2 px-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-5 h-5"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <span class="text-white font-semibold m-2">
                            {{ isLoading ? 'Logging out...' : 'Log out' }}
                        </span>
                    </router-link>

                    <!-- LOGOUT BUTTON -->
                    <router-link
                        to="/login"
                        @click="logout"
                        class="text-white flex items-center space-x-2 bg-blue-800 hover:bg-blue-500 active:bg-blue-500 py-2 px-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-5 h-5"
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
        <div class="flex-1 w-full overflow-x-auto">
            <!-- header -->
            <div class="bg-white shadow px-2 py-4 text-4xl w-full">RECORDS</div>
            <!-- content -->
            <div
                v-if="showForm"
                class="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
            >
                <addPerson @submit="addNewPerson" @cancel="showForm = false" />
            </div>
            <div class="w-max flex mx-auto">
                <div class="flex w-full">
                    <form class="bg-gray-200 shadow-md rounded-lg mb-2">
                        <!-- ########################################################################### SEARCH BAR ############################################################################################ -->
                        <div
                            class="flex flex-row p-4 bg-secondary rounded-t-lg"
                        >
                            <input
                                v-model="searchQuery"
                                @keydown.enter.prevent="fetchData"
                                class="placeholder:italic block font-semibold bg-sky-200 w-full border border-blue-600 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                placeholder="Search for people here..."
                                type="text"
                                name="search"
                            />

                            <button
                                @click.prevent="fetchData"
                                class="rounded-lg bg-blue-600 font-sans text-sm text-white p-2 font-semibold mx-2 shadow-md hover:bg-blue-900"
                            >
                                Search
                            </button>
                            <button
                                @click.prevent="showForm = true"
                                class="rounded-lg bg-green-500 font-sans text-sm text-white p-2 font-semibold mx-2 shadow-md hover:bg-green-900"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="w-5 h-5"
                                >
                                    <path
                                        d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <!-- ############################################################################## /SEARCH BAR ########################################################################################### -->
                        <div class="overflow-x-auto">
                            <table class="p-5 w-full">
                                <thead
                                    class="bg-green-600 font-semibold text-center"
                                >
                                    <tr class="divide-x">
                                        <th
                                            class="px-4 py-2 font-semibold shadow-md"
                                        >
                                            <img
                                                class="h-9 w-9 mx-auto"
                                                src="../assets/venusmars.png"
                                            />
                                        </th>
                                        <th
                                            class="px-4 py-2 font-semibold text-white shadow-lg"
                                        >
                                            NAME
                                        </th>
                                        <th
                                            class="px-4 py-2 font-semibold text-white shadow-md"
                                        >
                                            PUROK
                                        </th>
                                        <th
                                            class="px-4 py-2 font-semibold text-white shadow-md"
                                        >
                                            AGE
                                        </th>
                                        <th
                                            class="px-4 py-2 font-semibold text-white shadow-md"
                                        >
                                            PROFILE
                                        </th>
                                        <th
                                            class="px-4 py-2 font-semibold text-white shadow-md"
                                        >
                                            EDIT
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        class="odd:bg-white even:bg-slate-100 divide-x"
                                        v-for="person in filteredPeople"
                                        :key="person.id"
                                    >
                                        <td class="px-4 py-2">
                                            {{ person.gender }}
                                        </td>
                                        <td class="px-4 py-2">
                                            {{ person.first_name }}
                                            {{ person.middle_name }}
                                            {{ person.last_name }}
                                        </td>
                                        <td class="px-4 py-2">
                                            {{ person.lives_at }}
                                        </td>
                                        <td class="px-4 py-2">
                                            {{ person.age }}
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
                                        <td class="px-4 py-1">
                                            <router-link
                                                :to="{
                                                    name: 'EditRecords',
                                                    params: { id: person.id },
                                                }"
                                                type="button"
                                                class="px-3 py-2 bg-blue-500 rounded-lg hover:bg-blue-900"
                                                ><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="white"
                                                    class="w-5 h-5 mx-auto"
                                                >
                                                    <path
                                                        d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z"
                                                    />
                                                    <path
                                                        d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z"
                                                    />
                                                </svg>
                                            </router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import addPerson from '../components/addPerson.vue'
import axios from 'axios'

export default {
    props: {
        person: {
            type: Object,
            required: true,
        },
    },
    components: {
        addPerson,
    },
    data() {
        return {
            personList: [],
            showForm: false,
            searchQuery: [],
            isLoading: false,
            purok: [],
        }
    },
    created() {
        this.authenticate()
        this.fetchData()
    },
    computed: {
        filteredPeople() {
            if (this.searchQuery === '') {
                return this.personList
            } else {
                return this.personList.filter(
                    (person) =>
                        person.first_name
                            .toLowerCase()
                            .includes(this.searchQuery.toLowerCase()) ||
                        person.middle_name
                            .toLowerCase()
                            .includes(this.searchQuery.toLowerCase()) ||
                        person.last_name
                            .toLowerCase()
                            .includes(this.searchQuery.toLowerCase()) ||
                        person.lives_at
                            .toLowerCase()
                            .includes(this.searchQuery.toLowerCase())
                    // person.phone_number
                    //     .toLowerCase()
                    //     .includes(this.searchQuery.toLowerCase())
                )
            }
        },
    },
    methods: {
        async handleLogoutClick() {
            try {
                this.isLoading = true
                await this.$store.dispatch('user/logout')
                this.$toast.show('Logged out successfully')
            } catch (error) {
                console.error(error)
            } finally {
                this.isLoading = false
            }
        },
        fetchData() {
            this.searchQuery = ''
            const url = `https://ejohncarlsrizz.pythonanywhere.com/search/?search=${this.searchQuery}`

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
                .get('person/')
                .then((response) => {
                    console.log('DATA', response.data.data)
                    this.$store.commit('user/setUser', response.data.data)
                    this.personList = response.data.data
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        addNewPerson(newPerson) {
            const person = {
                id: this.personList.length,
            }
        },
    },
}
</script>
<style>
/* default styles */
.relative {
    position: relative;
}

.flex {
    display: flex;
}

.flex-col {
    flex-direction: column;
}

.min-h-screen {
    min-height: 100vh;
}

.space-y-6 > * + * {
    margin-top: 1.5rem;
}

.w-full {
    width: 100%;
}

.flex-1 {
    flex: 1;
}

/* responsive styles */
@media (min-width: 640px) {
    /* screen size larger than or equal to 640px */
    .sm:flex-row {
        flex-direction: row;
    }

    .sm:space-y-6 > * + * {
        margin-top: 0;
        margin-left: 1.5rem;
    }

    .sm:w-44 {
        width: 44px;
    }
}
</style>
