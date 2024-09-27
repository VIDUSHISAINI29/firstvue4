<script setup>
import { createStructuralDirectiveTransform } from '@vue/compiler-core';
import { ref, reactive } from 'vue';
import { RouterLink } from 'vue-router';
let inpName = ''
let inpClass = ''
let inpRollNo = ''

let student = reactive([{
    name: 'Vidushi Saini',
    class: '12',
    rollNo: '29'
},])
let name_ = ref('')
let class_ = ref('')
let rollno = ref('')
function formFilled(){
console.log('hello vids');

    name_ = inpName,
    class_ = inpClass,
    rollno = inpRollNo
    student.push({name: name_, class: class_, rollNo: rollno})
    inpName = ''
    inpClass = ''
    inpRollNo = ''
}


async function deleteIt(id) {
    student.forEach((elem, index) =>{
        if(elem.rollNo === id)
        {
            student.splice(index,1)
        }
    })
}

</script>

<template>

    <div class="div_for_list tw-w-full  tw-flex tw-justify-center tw-items-center tw-flex-col">
        <div class="overlay tw-w-full  tw-flex tw-justify-center tw-items-center tw-gap-10">

            <div class="tw-w-2/5 tw-flex tw-justify-center">
                <form @submit.prevent="formFilled()"  class=" tw-w-full tw-bg-gray-100 tw-p-2 tw-flex tw-flex-col tw-items-center tw-justify-center">
                    <span 
                        class="tw-my-8 tw-text-xl tw-block tw-text-center tw-text-white tw-w-48 tw-bg-teal-800 tw-p-2 tw-rounded-md">Students
                        Form</span>
                    <div class="tw-flex tw-m-10 tw-text-lg tw-items-center tw-gap-40">
                        <span
                            class="tw-font-semibold tw-rounded-md tw-text-white tw-bg-teal-600 tw-p-2 tw-block tw-text-center tw-w-28">Name
                            :</span>
                        <input placeholder="Enter Name" id="title" name="title" class="tw-border tw-border-teal-600 tw-rounded tw-p-2"
                            type="text" v-model="inpName">
                         

                    </div>
                    <div class="tw-flex tw-m-10 tw-text-lg tw-items-center tw-gap-40">
                        <span
                            class="tw-font-semibold tw-rounded-md tw-text-white tw-bg-teal-600 tw-p-2 tw-block tw-text-center tw-w-28">Class
                            :</span>
                        <input placeholder="EnterClass" id="title" name="title" class="tw-border tw-border-teal-600 tw-rounded tw-p-2"
                            type="number" v-model="inpClass">
                            

                    </div>
                    <div class="tw-flex tw-m-10 tw-text-lg tw-items-center tw-gap-40">
                        <span
                            class="tw-font-semibold tw-rounded-md tw-text-white tw-bg-teal-600 tw-p-2 tw-block tw-text-center tw-w-28">Roll no.
                            :</span>
                        <input placeholder="Enter Roll Number" id="title" name="title" class="tw-border tw-border-teal-600 tw-rounded tw-p-2"
                            type="number" v-model="inpRollNo">

                    </div>

                    <button
                        class="tw-my-8 tw-text-xl tw-block tw-text-center tw-text-white tw-w-48 tw-bg-teal-800 tw-p-2 tw-rounded-md"
                        type="submit">Submit</button>
                </form>
            </div>

            <div class="tw-w-2/5 tw-bg-gray-100 tw-p-2 tw-flex tw-flex-col tw-items-center tw-justify-center">
                <table class="tw-w-1/2 tw-p-2">
                    <thead>
                       <tr>
                        <th class="tw-p-2 tw-text-black">Name</th>
                        <th class="tw-p-2 tw-text-black">Class</th>
                        <th class="tw-p-2 tw-text-black">Roll No.</th>
                        <th class="tw-p-2 tw-text-black">Delete</th>
                       </tr>
                    </thead>
                    <tbody>
                        <tr v-for="stu in student" :key="stu.rollNo">
                            <td class="tw-p-2 tw-text-center tw-text-black">{{stu.name}}</td>
                            <td class="tw-p-2 tw-text-center tw-text-black">{{ stu.class}}</td>
                            <td class="tw-p-2 tw-text-center tw-text-black">{{ stu.rollNo}}</td>
                            <td class="tw-p-2 tw-text-center tw-text-black">
                                <button @click="deleteIt(stu.rollNo)" class="tw-text-center tw-rounded-md tw-p-2 tw-bg-red-500 tw-text-white tw-px-3">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>





</template>
<style scoped>
input {
    outline: none;
    color: teal;
}

.div_for_list {
    background-image: url('src/assets/todo.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 83vh;
}

.overlay {
    background-color: rgba(149, 149, 149, 0.435);
    height: 86vh;
}
th,
td {
    width: 18%;
    border-bottom: 1px solid rgb(194, 194, 194);
}

table {
    border: 1px solid rgb(194, 194, 194);
}
</style>