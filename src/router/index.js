import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/client/Home.vue'
import LoginAdmin from '../views/admin/LoginAdmin.vue'
import Dashboard from '../views/admin/Dashboard.vue'

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
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
