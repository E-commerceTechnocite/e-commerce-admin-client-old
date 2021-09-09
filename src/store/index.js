import { createStore } from 'vuex'
import auth from './modules/auth'
import products from './modules/products'

 const store = createStore({
  state: {
  },
  getters: {
  },
  modules: {
    auth,
    products
  }
})
export default store