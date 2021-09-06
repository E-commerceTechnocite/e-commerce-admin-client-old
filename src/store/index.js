import { createStore } from 'vuex'
import auth from './modules/auth'

 const store = createStore({
  state: {
    title:"mytitle"
  },
  getters: {
    /* isLoggedIn: () => {
     router.push('/')
    } */
  },
  modules: {
    auth
  }
})
export default store