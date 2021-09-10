import { createStore } from 'vuex'
import auth from './modules/auth'
import products from './modules/products'
import dailyInformations from './modules/dailyInformations'

 const store = createStore({
  state: {
  },
  getters: {
  },
  modules: {
    auth,
    products,
    dailyInformations
  }
})
export default store