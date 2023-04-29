<template>
    <div class="bg-white h-screen w-screen">
        <!-- <router-view v-slot="{ Component }">
            <Transition name="page" mode="out-in"
            ><component :is="Component"/>
            </Transition>
        </router-view> -->
        <!-- <Navbar/> -->
        <router-view/>
        </div>  
</template>

<script>


// import Navbar from './components/Navbar.vue'
export default {

    name: "App",
    
    components: {
        // Navbar
    },

};

</script>

<style>
    .page-enter-active,
    .page-leave-active {
        transition: 600ms ease all;
    }

    .page-enter-form,
    .page-leave-to {
        opacity: 0;
    }
</style>