 <template>

    <div class="relative bg-primary shadow px-2 py-4 w-screen grid grid-cols-2"><div class="flex flex-row">
        <img class="rounded-md w-16 h-16 m-4" src="../assets/C.A.P.I (1).png">
      <a class="font-sans text-5xl py-6 text-white hover:text-gray-200 hover:opacity-70"
      >C.A.P.I
      </a></div>
      <div class="flex flex-row-reverse items-center ">
        <button @click="$router.go(-1)" class="p-4 rounded-full hover:bg-blue-950 font-bold text-4xl text-white bg-blue-500 flex flex-row ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
            </svg>
            Return
        </button>
    </div>
    </div>
   


 </template>
 <script>
 export default {
 }
</script>
<style>
</style>