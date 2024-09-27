<script setup>
import { ref, reactive } from 'vue';

import { globalInput } from "@/stores/global";

const global = globalInput()

import mouseImage from '@/assets/mouse.jpg';
import keyboardImage from '@/assets/keyboard.jpg';
import laptopStandImage from '@/assets/laptop_stand.jpg';
import usbImage from '@/assets/usb.jpeg';
import speakerImage from '@/assets/speaker.jpg';
import headsetImage from '@/assets/headset.jpg';
import phoneStandImage from '@/assets/phone_stand.jpg';



const cartItems = [
  {
    id: 1,
    name: 'Wireless Mouse',
    quantity: 2,
    pricePerUnit: 25.99,
    imageUrl: mouseImage,
    totalPrice: function() {
      return this.quantity * this.pricePerUnit;
    }
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    quantity: 1,
    pricePerUnit: 89.99,
    imageUrl: keyboardImage,
    totalPrice: function() {
      return this.quantity * this.pricePerUnit;
    }
  },
  {
    id: 3,
    name: 'Laptop Stand',
    quantity: 1,
    pricePerUnit: 34.99,
    imageUrl: laptopStandImage,
    totalPrice: function() {
      return this.quantity * this.pricePerUnit;
    }
  },
  {
    id: 4,
    name: 'USB-C Hub',
    quantity: 3,
    pricePerUnit: 19.99,
    imageUrl: usbImage,
    totalPrice: function() {
      return this.quantity * this.pricePerUnit;
    }
  },
  {
    id: 5,
    name: 'Bluetooth Speaker',
    quantity: 1,
    pricePerUnit: 59.99,
    imageUrl: speakerImage,
    totalPrice: function() {
      return this.quantity * this.pricePerUnit;
    }
  },
  {
    id: 6,
    name: 'Gaming Headset',
    quantity: 2,
    pricePerUnit: 45.50,
    imageUrl: headsetImage,
    totalPrice: function() {
      return this.quantity * this.pricePerUnit;
    }
  },
  {
    id: 7,
    name: 'Smartphone Stand',
    quantity: 2,
    pricePerUnit: 14.99,
    imageUrl: phoneStandImage,
    totalPrice: function() {
      return this.quantity * this.pricePerUnit;
    }
  }
];

// Example to calculate total price for each item
cartItems.forEach(item => {
  console.log(`Item: ${item.name}, Total Price: $${item.totalPrice().toFixed(2)}, Image: ${item.imageUrl}`);
});

// function addToCart(iid){
//  global.itemId.push(iid)
//    console.log(' my id is', typeof(global.itemId))
//    console.log('array = ', global.itemId)
// }

function addToCart(iid) {
  // Check if the item is already in the cart
  // if (!global.itemId.includes(iid)) {
    global.itemId.push(iid);
// }
  console.log('My id is', typeof(global.itemId));
  console.log('Array = ', global.itemId);
}




</script>

<template>
    <div class="tw-w-full tw-py-20 tw-gap-5 tw-p-2 tw-flex  tw-justify-evenly tw-flex-wrap">
        <div class="tw-w-full tw-p-4 tw-flex tw-justify-evenly tw-flex-wrap tw-gap-5">
          <div v-for="item in cartItems" :key="item.id" class=" tw-shadow-md tw-rounded-md tw-flex tw-items-center tw-w-2/12 tw-bg-gray-200 tw-p-2 tw-flex-col">
          <div class="tw-w-11/12 h-52">

            <img :src="item.imageUrl" alt="Item Image" class="tw-w-full" />
          </div>
          <span class="tw-block tw-px-2 tw-py-1 tw-text-xl tw-w-full  tw-font-semibold tw-text-blue-950">{{ item.name }}</span>
          <span class="tw-block tw-px-2 tw-text-xl tw-w-full  tw-font-semibold tw-text-blue-950">${{ item.pricePerUnit }}</span>
          <button @click="addToCart(item.id)" class="tw-text-blue-100 tw-bg-blue-950 tw-text-lg tw-p-2 tw-my-2 tw-rounded-md">Add To Cart</button>
        </div>
        </div>
       

    </div>
</template>