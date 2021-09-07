import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/client/Home.vue'
import LoginAdmin from '../views/admin/LoginAdmin.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import store from '../store'

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
    component: Dashboard,
    /* meta: {
      requiresAuth: true
    } */
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters['auth/AUTH_IS_LOGGED_IN']) {
      next ({ name: 'LoginAdmin'})
    } else {
        next()
      }
    }  
  else {
     next()
  }
})

export default router
