<script setup>

import { RouterLink } from 'vue-router';

</script>

<template>
    
    <div class="navbar tw-bg-white tw-sticky tw-top-0 tw-left-0 tw-w-full tw-p-2 tw-flex tw-justify-around tw-items-center">

        <div class="nav_inn w-3/5 tw-bg-pnk tw-p-2 tw-flex ">
            <div class="logo  tw-text-4xl tw-text-white tw-bg-blue-900 tw-rounded-md tw-p-2 tw-text-center tw-font-bold tw-flex-col">Day <small class="tw-text-sm tw-font-bold">Plan</small></div>
          
        </div>
        <div class=" tw-text-blue-900 tw-text-lg tw-font-bold tw-flex tw-items-center tw-justify-end tw-gap-10">
                <RouterLink to="/home">Home </RouterLink>
                <RouterLink to="/about-us">About Us </RouterLink>
                <RouterLink to="/contact-us">Contact Us </RouterLink>
                <RouterLink to="/api-data">Fetched Data</RouterLink>
                <RouterLink to="/form">Form</RouterLink>
                <RouterLink to="/shop">Shop</RouterLink>
                <RouterLink to="/cart">Cart</RouterLink>
            </div>
    </div>
</template>
<style scope>
    li{
        list-style: none;
        
    }
    .nav_inn{
        border-radius: 5px;
    }
    .navbar{
        box-shadow: 0px 0px 10px 2px rgb(205, 205, 205);
        
    }
</style>