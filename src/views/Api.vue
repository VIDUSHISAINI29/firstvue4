<script setup>
import { ref } from "vue";

let inpTitle = ref('')
    let inpCategoryId = ref('')
    let inpPrice = ref('')

import { globalInput } from "@/stores/global";
const global = globalInput()

inpTitle = global.titleInput 
    inpCategoryId = global.categoryInput
    inpPrice = global.priceInput


function col(){
    console.log('title =',global.titleInput)
    console.log('id =',global.categoryInput)
    console.log('rs =',global.priceInput)
}

const productsData = ref(null);

async function fetchData() {
    const fetchApi = await fetch("https://api.escuelajs.co/api/v1/products");
    const resp = await fetchApi.json();

    productsData.value = resp;

  
}

fetchData();

async function deleteIt(id) {
    console.log('hello vids')
    const api = `https://api.escuelajs.co/api/v1/products/${id}`;
    const resp = await fetch(api, {
        method: "DELETE"
    })
    if(resp.ok){
        fetchData();
    }
    else{
        alert('Failed to delete product');
    }
    

}

// async function editIt(id) {
//     const url = `https://api.escuelajs.co/api/v1/products/${id}`;
//     const response = await fetch(url);
//     const product = await response.json();

//     document.querySelector('#title').value = product.title;
//     document.querySelector('#price').value = product.price;
//     document.querySelector('#description').value = product.description;
//     document.querySelector('#categoryId').value = product.category.id;
    
// }

async function editIt(id) {
    const url = `https://api.escuelajs.co/api/v1/products/${id}`;
    const response = await fetch(url);
    const product = await response.json();

   inpTitle = product.title;
   inpPrice = product.price;
    inpCategoryId = product.id;
    console.log(inpTitle)
}


</script>

<template>
    <div class="tw-w-full tw-flex tw-items-center tw-p-2 tw-gap-2 tw-flex-col">
        <RouterLink to="/form"  class="tw-p-2 tw-px-4 tw-my-10 tw-text-xl tw-text-white tw-rounded-md tw-bg-blue-400">
            Create +</RouterLink>
        <table class="tw-w-1/2 tw-p-2">
            <thead>
               <tr>
                <th class="tw-p-2 tw-text-black">Category</th>
                <th class="tw-p-2 tw-text-black">Name</th>
                <th class="tw-p-2 tw-text-black">Price</th>
                <th class="tw-p-2 tw-text-black">Edit</th>
                <th class="tw-p-2 tw-text-black">Delete</th>
               </tr>
            </thead>

            <tbody>
                <tr v-for="data in productsData" :key="data.id">
                    <td class="tw-p-2 tw-text-center tw-text-black">{{ data.id }}</td>
                    <td class="tw-p-2 tw-text-center tw-text-black">{{ data.title }}</td>
                    <td class="tw-p-2 tw-text-center tw-text-black">${{ data.price }}</td>
                    <td class="tw-text-center">
                        <RouterLink to="/form" @click="editIt(data.id)" class="tw-text-center tw-p-2 tw-px-5 tw-rounded-md tw-bg-green-400 tw-text-white">
                            Edit
                        </RouterLink>
                    </td>
                    <td class="tw-text-center">
                        <button @click="deleteIt(data.id)"  class="tw-text-center tw-rounded-md tw-p-2 tw-bg-red-500 tw-text-white tw-px-3">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style scoped>
th,
td {
    width: 18%;
    border-bottom: 1px solid rgb(194, 194, 194);
}

table {
    border: 1px solid rgb(194, 194, 194);
}
</style>
