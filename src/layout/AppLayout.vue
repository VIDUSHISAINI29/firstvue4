<script setup>

import Navbar from "@/layout/Navbar.vue";
import Footer from "@/layout/Footer.vue";
import Hero from "@/layout/Hero.vue";

</script>

<template>
   <div>
      <Navbar />
     
   
        
         <RouterView/>
      
      <Footer />
   </div>
</template>

<style scoped>
   /* .routed{
      height: 86vh;
   } */
</style>
