<template>
    <div class="fixed inset-x-0 top-0 z-50 flex items-center justify-center">
        <div
            class="bg-white border-l-4 border-red-500 text-red-700 px-4 py-3 rounded relative"
            role="alert"
            v-show="showAlert"
        >
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">{{ alertMessage }}</span>
            <span
                class="absolute top-0 bottom-0 right-0 px-4 py-3"
                @click="showAlert = false"
            >
                <svg
                    class="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <title>Close</title>
                    <path
                        d="M14.348 5.652a.999.999 0 1 0-1.414 1.414L11.414 9l-1.52 1.52a.999.999 0 1 0 1.414 1.414L13.414 10l1.52 1.52a.999.999 0 1 0 1.414-1.414L15.414 9l1.52-1.52a.999.999 0 1 0-1.414-1.414L13.414 8l-1.066-1.066z"
                    />
                </svg>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showAlert: false,
            alertMessage: '',
        }
    },
    methods: {
        showPopUp(message, type) {
            this.alertMessage = message
            this.showAlert = true
            setTimeout(() => {
                this.showAlert = false
            }, 3000)
        },
    },
}
</script>
