<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <!-- Profile Modal Trigger -->
        <button
            @click="isModalOpen = true"
            class="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            View Profile
        </button>

        <!-- Profile Modal -->
        <div v-if="isModalOpen" class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex items-center justify-center min-h-screen px-4">
                <div
                    @click.away="isModalOpen = false"
                    class="relative w-full max-w-md p-6 mx-auto bg-white rounded-md shadow-lg"
                >
                    <!-- Close Button -->
                    <button
                        @click="isModalOpen = false"
                        class="absolute top-0 right-0 mt-4 mr-4 text-gray-400 hover:text-gray-500 focus:outline-none"
                    >
                        <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>

                    <!-- Profile Content -->
                    <div
                        class="flex flex-col items-center justify-center space-y-4"
                    >
                        <img
                            class="w-32 h-32 rounded-full"
                            src="https://via.placeholder.com/150"
                            alt="Profile Image"
                        />
                        <h2 class="text-xl font-medium">John Doe</h2>
                        <p class="text-gray-600">Web Developer</p>
                        <div class="flex items-center justify-center space-x-2">
                            <a href="#" class="text-blue-500 hover:underline"
                                >Website</a
                            >
                            <span>|</span>
                            <a href="#" class="text-blue-500 hover:underline"
                                >Twitter</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isModalOpen: false,
        }
    },
}
</script>

<style>
/* Modal Styles */
@media (min-width: 640px) {
    .modal {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .modal > * {
        max-width: 640px;
    }
}
</style>
