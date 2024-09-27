<script setup>
import { reactive, ref } from 'vue';

// Create an array of objects to use in the v-for loop
const items = reactive([
  { checked: false, inputValue: '' },
  { checked: false, inputValue: '' },
  { checked: false, inputValue: '' },
  { checked: false, inputValue: '' },
  { checked: false, inputValue: '' }
]);

// Count to track the number of items
const count = ref(items.length);

// Increment function to add a new row (checkbox + input)
function increment() {
  items.push({ checked: false, inputValue: '' });
  count.value = items.length;
}

// Decrement function to remove the last row (checkbox + input)
function decrement() {
  if (items.length > 1) {
    items.pop();
    count.value = items.length;
  }
}
</script>

<template>
  <div class="div_for_list tw-w-full  tw-flex tw-justify-center tw-items-center tw-flex-col">
    <!-- Loop through the items array -->
    <div class="overlay tw-w-full  tw-flex tw-justify-center tw-items-center tw-flex-col">
       <div class="  input_container tw-flex tw-justify-center tw-items-center tw-flex-col">
        <div v-for="(item, index) in items" :key="index" class=" tw-w-1/2 tw-p-2 tw-flex tw-justify-center tw-items-center tw-mb-3">
      <label>
        <input type="checkbox" v-model="item.checked" />{{ index }}
      </label>
      
      <!-- Dashed line input with conditional style -->
      <div class="dashed-line tw-ml-4">
        <input 
          type="text" 
          v-model="item.inputValue" 
          placeholder="Input something here" 
          style="border: none; outline: none;" 
          :style="{ 'text-decoration': item.checked ? 'line-through' : 'none' }"
        >
      </div>
    </div>

    <!-- Buttons to add or remove items -->
    <div class="tw-flex tw-gap-3"> 
      <button v-on:click="increment" class="tw-w-12 tw-mt-7 tw-p-1 tw-bg-blue-900 tw-text-white tw-text-center tw-font-semibold tw-text-xl">+</button>
      <button v-on:click="decrement" class="tw-w-12 tw-mt-7 tw-p-1 tw-bg-blue-900 tw-text-white tw-text-center tw-font-semibold tw-text-xl">-</button>
    </div>
       </div>
    </div>
  </div>
</template>

<style scoped>
.dashed-line {
  border-bottom: 1px dashed #000;
  padding: 5px;
  width: 300px;
}
.div_for_list{
    background-image: url('src/assets/todo.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
     height: 83vh; 
}
.overlay{
    background-color: rgba(149, 149, 149, 0.435);
     height: 86vh;
}
.input_container{
   background-color: rgb(255,255,255);
   width: 40%;
}
</style>
