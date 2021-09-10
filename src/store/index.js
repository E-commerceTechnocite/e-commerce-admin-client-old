import { createStore } from 'vuex'
import auth from './modules/auth'
import products from './modules/admin/products'
import dashboard from './modules/admin/dashboard'


 const store = createStore({
  state: {
  },
  getters: {
  },
  modules: {
    auth,
    products,
    dashboard
  }
})
export default store