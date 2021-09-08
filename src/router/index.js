import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/client/Home.vue'
import LoginAdmin from '../views/admin/LoginAdmin.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import DashboardHome from '../views/admin/dashboard-views/DashboardHome.vue'
import Products from '../views/admin/dashboard-views/Products.vue'
import Billing from '../views/admin/dashboard-views/Billing.vue'
import Customers from '../views/admin/dashboard-views/Customers.vue'
import Shipping from '../views/admin/dashboard-views/Shipping.vue'
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
    children: [
      {
        path: 'home',
        name: 'DashboardHome',
        component: DashboardHome
      },
      {
        path: 'products',
        name: 'Products',
        component: Products
      },
      {
        path: 'billing',
        name: 'Billing',
        component: Billing
      },
      {
        path: 'customers',
        name: 'Customers',
        component: Customers
      },
      {
        path: 'products',
        name: 'Shipping',
        component: Shipping
      },
    ]
  },
  {
    path: '/',
    name: 'Catalog',
    component: Dashboard
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
