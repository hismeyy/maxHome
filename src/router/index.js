import { createRouter, createWebHistory } from 'vue-router'
import MaxHome from '../views/MaxHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MaxHome
    }
  ]
})

export default router
