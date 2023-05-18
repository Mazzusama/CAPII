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
                        class="text-white flex items-center space-x-2 bg-blue-800 hover:bg-blue-500 py-3 px-4"
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
                        class="text-white flex items-center space-x-2 bg-blue-800 hover:bg-blue-500 py-3 px-4"
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
                        class="text-white flex items-center space-x-2 bg-blue-500 py-3 px-4"
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
                        class="text-white flex items-center space-x-2 bg-blue-800 hover:bg-blue-500 py-3 px-4"
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
                            >Send Message</span
                        >
                    </router-link>

                    <!-- LOGOUT BUTTON -->
                    <router-link
                        to="/login"
                        @click="logout"
                        class="text-white flex items-center space-x-2 bg-blue-800 hover:bg-blue-500 py-3 px-4"
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
                >HEALTH CASES
            </div>
            <!-- content -->
            <div
                v-if="showForm"
                class="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
            >
                <addDisease
                    @submit="addNewDisease"
                    @cancel="showForm = false"
                />
            </div>
            <div class="w-max flex mx-auto">
                <div class="flex">
                    <form class="bg-gray-200 shadow-md rounded-lg mb-2">
                        <!-- ########################################################################### SEARCH BAR ############################################################################################ -->
                        <!-- search -->
                        <div
                            class="flex flex-row p-4 bg-secondary rounded-t-lg"
                        >
                            <input
                                v-model="searchQuery"
                                @keydown.enter.prevent="fetchData"
                                class="placeholder:italic block font-semibold bg-sky-200 w-full border border-blue-600 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                                placeholder="Search for health cases here..."
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
                                    class="w-6 h-6"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        <!-- ############################################################################## /SEARCH BAR ########################################################################################### -->
                        <table class="p-5">
                            <thead
                                class="bg-green-600 font-semibold text-center"
                            >
                                <tr class="divide-x">
                                    <th
                                        class="px-4 py-2 font-semibold text-white shadow-lg cursor-pointer"
                                        @click="sortTable('name')"
                                    >
                                        HEALTH CASE
                                        <span
                                            v-if="sortColumn === 'name'"
                                            class="ml-1"
                                        >
                                            <svg
                                                class="w-4 h-4 inline-block"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    :class="[
                                                        sortDirection === 'asc'
                                                            ? 'hidden'
                                                            : '',
                                                    ]"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                                <path
                                                    :class="[
                                                        sortDirection === 'desc'
                                                            ? 'hidden'
                                                            : '',
                                                    ]"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M5 15l7-7 7 7"
                                                />
                                            </svg>
                                        </span>
                                        <button
                                            v-if="sortColumn !== 'name'"
                                            class="text-green-600 hover:text-green-900 focus:outline-none"
                                            @click="sortTable('name')"
                                        >
                                            <svg
                                                class="w-4 h-4 inline-block"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 4v16m8-8H4"
                                                />
                                            </svg>
                                        </button>
                                    </th>
                                    <th
                                        class="px-4 py-2 font-semibold text-white shadow-md cursor-pointer"
                                        @click="sortTable('created_at')"
                                    >
                                        DATE CREATED
                                        <span
                                            v-if="sortColumn === 'created_at'"
                                            class="ml-1"
                                        >
                                            <svg
                                                class="w-4 h-4 inline-block"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    :class="[
                                                        sortDirection === 'asc'
                                                            ? 'hidden'
                                                            : '',
                                                    ]"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                                <path
                                                    :class="[
                                                        sortDirection === 'desc'
                                                            ? 'hidden'
                                                            : '',
                                                    ]"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M5 15l7-7 7 7"
                                                />
                                            </svg>
                                        </span>
                                        <button
                                            v-if="sortColumn !== 'created_at'"
                                            class="text-green-600 hover:text-green-900 focus:outline-none"
                                            @click="sortTable('created_at')"
                                        >
                                            <svg
                                                class="w-4 h-4 inline-block"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 4v16m8-8H4"
                                                />
                                            </svg>
                                        </button>
                                    </th>
                                    <th
                                        class="px-4 py-2 font-semibold text-white shadow-md cursor-pointer"
                                        @click="sortTable('modified_at')"
                                    >
                                        LAST MODIFIED
                                        <span
                                            v-if="sortColumn === 'modified_at'"
                                            class="ml-1"
                                        >
                                            <svg
                                                class="w-4 h-4 inline-block"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    :class="[
                                                        sortDirection === 'asc'
                                                            ? 'hidden'
                                                            : '',
                                                    ]"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                                <path
                                                    :class="[
                                                        sortDirection === 'desc'
                                                            ? 'hidden'
                                                            : '',
                                                    ]"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M5 15l7-7 7 7"
                                                />
                                            </svg>
                                        </span>
                                        <button
                                            v-if="sortColumn !== 'modified_at'"
                                            class="text-green-600 hover:text-green-900 focus:outline-none"
                                            @click="sortTable('modified_at')"
                                        >
                                            <svg
                                                class="w-4 h-4 inline-block"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 4v16m8-8H4"
                                                />
                                            </svg>
                                        </button>
                                    </th>
                                    <th
                                        class="px-4 py-2 font-semibold text-white shadow-md"
                                    >
                                        EDIT
                                    </th>
                                    <th
                                        class="px-4 py-2 font-semibold text-white shadow-md"
                                    >
                                        VIEW
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr
                                    class="odd:bg-white even:bg-slate-50 divide-x"
                                    v-for="disease in filteredDisease"
                                    :key="disease.id"
                                >
                                    <td class="px-4 py-2">
                                        {{ disease.name }}
                                    </td>
                                    <td class="px-4 py-1">
                                        {{ disease.created_at }}
                                    </td>
                                    <td class="px-4 py-1">
                                        {{ disease.modified_at }}
                                    </td>
                                    <td class="px-4 py-2">
                                        <router-link
                                            :to="{
                                                name: 'editDisease',
                                                params: { id: disease.id },
                                            }"
                                            class="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-900"
                                            type="button"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="white"
                                                class="w-6 h-6 mx-auto"
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
                                    <td class="px-4 py-2">
                                        <router-link
                                            :to="{
                                                name: 'ViewDisease',
                                                params: { id: disease.id },
                                            }"
                                            class="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-950"
                                            type="button"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="white"
                                                class="w-6 h-6"
                                            >
                                                <path
                                                    d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z"
                                                />
                                            </svg>
                                        </router-link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import addDisease from '../components/addDisease.vue'
import { ref } from 'vue'
export default {
    setup() {
        const showSidebar = ref(false)

        return {
            showSidebar,
        }
    },
    props: {
        disease: {
            type: Object,
            required: true,
        },
    },
    components: {
        addDisease,
    },
    data() {
        return {
            diseaseList: [],
            showForm: false,
            searchQuery: [],
            sortColumn: '',
            sortDirection: 'asc',
        }
    },
    created() {
        this.authenticate()
        this.fetchData()
    },
    computed: {
        filteredDisease() {
            if (this.searchQuery === '') {
                return this.diseaseList
            } else {
                return this.diseaseList.filter((disease) =>
                    disease.name
                        .toLowerCase()
                        .includes(this.searchQuery.toLowerCase())
                )
            }
        },
    },
    methods: {
        sortTable(column) {
            if (this.sortColumn === column) {
                // Reverse the sorting direction if the same column is clicked again
                this.sortDirection =
                    this.sortDirection === 'asc' ? 'desc' : 'asc'
            } else {
                // Set the new sorting column and default direction
                this.sortColumn = column
                this.sortDirection = 'asc'
            }

            // Perform the sorting
            this.diseaseList.sort((a, b) => {
                // Customize the comparison logic based on the column
                if (column === 'name') {
                    // Sort by name
                    const nameA = a.name.toLowerCase()
                    const nameB = b.name.toLowerCase()
                    return nameA.localeCompare(nameB)
                } else if (column === 'created_at') {
                    // Sort by date created
                    return new Date(a.created_at) - new Date(b.created_at)
                } else if (column === 'modified_at') {
                    // Sort by last modified
                    return new Date(a.modified_at) - new Date(b.modified_at)
                }

                return 0 // Default to no sorting
            })

            // Reverse the order if sorting in descending direction
            if (this.sortDirection === 'desc') {
                this.diseasList.reverse()
            }
        },

        fetchData() {
            this.searchQuery = ''
            const url = `https://ejohncarlsrizz.pythonanywhere.com/disease/?search=${this.searchQuery}`

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
                    this.disease = response.data.data.name
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
                .get('disease/')
                .then((response) => {
                    console.log('data', response.data.data)
                    this.$store.commit('user/setUser', response.data.data)
                    this.diseaseList = response.data.data
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        addNewDisease(newDisease) {
            const disease = {
                id: this.diseaseList.length,
            }
        },
    },
}
</script>
<style></style>
