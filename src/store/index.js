import { createStore } from 'vuex'
import auth from './auth'

 const store = createStore({
  state: {
    title:"mytitle"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  }
})
export default store