// import {ref, computed, watch, reactive} from 'vue';
// import{ defineStore} from 'pinia';
// export const globalInput = defineStore('global', () =>{
//     const itemName = ref('');
//     const itemPrice = ref('');
//     const itemImg = ref('');
//     const itemId = reactive([]);
//     return {
//         itemName,
//         itemPrice,
//         itemImg,
//         itemId,
//       };
// })

const item = reactive({
  name: '',
  price: '',
  img: ''
});

import {ref, computed, watch, reactive} from 'vue';
import{ defineStore} from 'pinia';
export const globalInput = defineStore('global', () =>{
  const item = reactive({
    name: '',
    price: '',
    img: ''
  });
    const itemId = reactive([]);
    return {
        item,
        itemId,
      };
})