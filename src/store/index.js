import { createStore } from 'vuex'
import auth from './modules/auth'
import dashboard from './modules/admin/dashboard'


 const store = createStore({
  state: {
  },
  getters: {
  },
  modules: {
    auth,
    dashboard
  }
})
export default store