import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      component : Home
    },
    {
      path : '/:catchAll(.*)',
      component :()=>import('../views/404View.vue')
    },
    {
      path : '/AllProducts',
      component : ()=>import('../views/AllProducts.vue')
    },
    {
      path : '/cart',
      component : ()=>import('../views/cartView.vue')
    }
  ]
})

export default router
