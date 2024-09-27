<script setup>
import { globalInput } from "@/stores/global";
import { ref, reactive, watchEffect } from "vue";

const global = globalInput();
console.log("we are ids", global.itemId.length);

import mouseImage from "@/assets/mouse.jpg";
import keyboardImage from "@/assets/keyboard.jpg";
import laptopStandImage from "@/assets/laptop_stand.jpg";
import usbImage from "@/assets/usb.jpeg";
import speakerImage from "@/assets/speaker.jpg";
import headsetImage from "@/assets/headset.jpg";
import phoneStandImage from "@/assets/phone_stand.jpg";
// import { list } from "postcss";

const cartItems = [
  {
    id: 1,
    name: "Wireless Mouse",
    quantity: 2,
    pricePerUnit: 25.99,
    imageUrl: mouseImage,
    quantity: 1,
    totalPrice: function () {
      return this.quantity * this.pricePerUnit;
    },
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    quantity: 1,
    pricePerUnit: 89.99,
    imageUrl: keyboardImage,
    quantity: 1,
    totalPrice: function () {
      return this.quantity * this.pricePerUnit;
    },
  },
  {
    id: 3,
    name: "Laptop Stand",
    quantity: 1,
    pricePerUnit: 34.99,
    imageUrl: laptopStandImage,
    quantity: 1,
    totalPrice: function () {
      return this.quantity * this.pricePerUnit;
    },
  },
  {
    i: 4,
    name: "USB-C Hub",
    quantity: 3,
    pricePerUnit: 19.99,
    imageUrl: usbImage,
    quantity: 1,
    totalPrice: function () {
      return this.quantity * this.pricePerUnit;
    },
  },
  {
    i: 5,
    name: "Bluetooth Speaker",
    quantity: 1,
    pricePerUnit: 59.99,
    imageUrl: speakerImage,
    quantity: 1,
    totalPrice: function () {
      return this.quantity * this.pricePerUnit;
    },
  },
  {
    id: 6,
    name: "Gaming Headset",
    quantity: 2,
    pricePerUnit: 28,
    imageUrl: headsetImage,
    quantity: 1,
    totalPrice: function () {
      return this.quantity * this.pricePerUnit;
    },
  },
  {
    id: 7,
    name: "Smartphone Stand",
    quantity: 2,
    pricePerUnit: 14.99,
    imageUrl: phoneStandImage,
    quantity: 1,
    totalPrice: function () {
      return this.quantity * this.pricePerUnit;
    },
  },
];

const listItems = reactive([]);

function cartPlus(id) {
  listItems.forEach((elem) => {
    if (elem.id === id) {
      let unitRate = elem.initialPrice || elem.price;
      elem.quantity += 1;
      elem.price = elem.quantity * unitRate;
      elem.initialPrice = unitRate;
      console.log("quantity increased");
    }
  });
}
function cartMinus(id) {
  listItems.forEach((elem) => {
    if (elem.id === id && elem.quantity > 0) {
      let unitRate = elem.initialPrice || elem.price;
      elem.quantity -= 1;
      elem.price = elem.quantity * unitRate;
      console.log("quantity increased");
    }
  });
}

function cartUpdated(id) {
  console.log("valueChanged" + global.itemId);
  cartItems.forEach((elem) => {
    if (elem.id === id) {
      listItems.push({
        name: elem.name,
        id: elem.id,
        price: elem.pricePerUnit,
        quantity: elem.quantity,
      });
    }
  });
}

// watchEffect(() => {
//   // Ensure global.itemId has values
 
// });

function deleteItem(id) {
  listItems.forEach((elem, index) => {
    if (elem.id === id) {
      listItems.splice(index, 1);
      console.log("hogya delete.....!!");
    }
  });
}

watchEffect(() => {
  console.log(global.itemId);
  const test = global.itemId[global.itemId.length - 1];
  console.log("list is", listItems.length);

  if (global.itemId.length > 0) {
    const numberSet = new Set(global.itemId);
    const uniqueNumbersArray = [...numberSet];
    console.log("unique numbers mil gaye!!", uniqueNumbersArray);

    // Call cartUpdated for each unique number
    uniqueNumbersArray.forEach((elem) => {
      cartUpdated(elem);
    });

  }
});
</script>

<template>
  <div
    class="tw-w-full tw-p-2 tw-bg-gray-300 tw-h-screen tw-flex tw-justify-center tw-items-center"
  >
    <table class="tw-w-3/4 tw-border-2 tw-bg-white tw-p-2">
      <thead>
        <tr class="tw-border-b tw-text-lg tw-bg-gray-100">
          <th class="tw-w-28 tw-text-center tw-p-3">Name</th>
          <th class="tw-w-28 tw-text-center tw-p-3">Item Id</th>
          <th class="tw-w-28 tw-text-center tw-p-3">Quantity</th>
          <th class="tw-w-28 tw-text-center tw-p-3">Price</th>
          <th class="tw-w-28 tw-text-center tw-p-3">Cut</th>
          <th class="tw-w-28 tw-text-center tw-p-3">++</th>
          <th class="tw-w-28 tw-text-center tw-p-3">--</th>
        </tr>
      </thead>
      <tbody class="tw-p-10">
        <tr class="tw-border-b" v-for="item in listItems" :key="item.id">
          <td class="tw-w-28 tw-text-center tw-p-3">
            {{ item.name }}
          </td>
          <td class="tw-w-28 tw-text-center tw-p-3">
            {{ item.id }}
          </td>
          <td class="tw-w-28 tw-text-center tw-p-3">
            {{ item.quantity }}
          </td>
          <td class="tw-w-28 tw-text-center tw-p-3">$ {{ item.price }}</td>
          <td class="tw-w-28 tw-text-center tw-p-3">
            <button
              @click="deleteItem(item.id)"
              class="tw-w-16 tw-p-1 tw-text-white tw-rounded-md tw-bg-red-600"
            >
              Delete
            </button>
          </td>
          <td class="tw-w-28 tw-text-center tw-p-3">
            <button
              @click="cartPlus(item.id)"
              class="tw-w-10 tw-text-center tw-text-white tw-rounded-md tw-text-2xl tw-bg-blue-500"
            >
              +
            </button>
          </td>
          <td class="tw-w-28 tw-text-center tw-p-3">
            <button
              @click="cartMinus(item.id)"
              class="tw-w-10 tw-text-center tw-text-white tw-rounded-md tw-text-2xl tw-bg-yellow-400"
            >
              -
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
