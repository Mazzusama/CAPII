<template>
    <div class="relative w-screen h-screen grid grid-rows-2">
        <div class="inset-0 bg-primary"></div>

        <div class="flex justify-center items-center h-full w-full absolute">
            <router-link class="flex flex-col items-center" to="/login">
                <img
                    class="w-80 h-80 p-8 custom-btn bg-primary"
                    src="../assets/C.A.P.I(1).png"
                    alt="Logo"
                />
                <span class="font-sans text-4xl mt-4 text-white drop-shadow-lg"
                    >TAP TO START</span
                >
            </router-link>
        </div>

        <div class="inset-x-0 bottom-0 h-full bg-secondary"></div>
    </div>
</template>

<style>
.custom-btn {
    border-radius: 9999px;
}
</style>
