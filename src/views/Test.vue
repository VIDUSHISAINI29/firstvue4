<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onUpdated,
  onBeforeUpdate,
  onBeforeUnmount,
  onUnmounted,
  watch,
  watchEffect,
} from "vue";

const show = ref(false);

const loading = ref(false);

onMounted(() => {
  console.log("Loading Complete");

  setTimeout(() => {
    loading.value = true;
  }, 2000);
});


// onUpdated(() => {
//   console.log("Updated");
// });

// onUnmounted(() => {
//   console.log("Unmount");
// });

function showSomething() {
  console.log("Value Changed " + show.value);
}

function loadingFunc() {
  console.log(loading.value);
}

// watch(show, showSomething)

watchEffect(() => {
  showSomething();
  
  loadingFunc()
});
</script>

<template>
  <div v-if="loading">
    <button @click="show = !show">Check</button>
    <h1 v-show="show">Hello</h1>
  </div>
  <div v-else>Loading...</div>
</template>
