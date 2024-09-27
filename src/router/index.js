import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/',
      name: 'default',
      component: () => import('@/layout/AppLayout.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/layout/Hero.vue')
        },
        {
          path:'/about-us',
          name: 'aboutUs',
          component: () => import('@/views/AboutUs.vue')
        },
        {
          path:'/contact-us',
          name: 'contactUs',
          component: () => import('@/views/ContactUs.vue')
        },
        {
          path:'/api-data',
          name: 'api-data',
          component: () => import('@/views/Api.vue')
        },
        {
          path:'/form',
          name: 'form',
          component: () => import('@/views/Form.vue')
        },
        {
          path:'/shop',
          name: 'shop',
          component: () => import('@/views/Shop.vue')
        },
        {
          path:'/cart',
          name: 'cart',
          component: () => import('@/views/Cart.vue')
        }
      ]
    },
    {
      path:'/test',
      name: 'test',
      component: () => import('@/views/Test.vue')
    }
   
    
  ]
})

export default router
