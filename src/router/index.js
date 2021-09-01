import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/client/Home.vue'
import LoginAdmin from '../views/admin/LoginAdmin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login-admin',
    name: 'LoginAdmin',
    component: LoginAdmin
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
