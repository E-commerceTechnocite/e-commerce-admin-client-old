import { createStore } from 'vuex'
import auth from './modules/auth'
import products from './modules/admin/products'
import dashboard from './modules/admin/dashboard'
import images from './modules/admin/dashboard'


 const store = createStore({
  state: {
  },
  getters: {
  },
  modules: {
    auth,
    products,
    dashboard,
    images
  }
})
export default store