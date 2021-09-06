import { createStore } from 'vuex'
import auth from './modules/auth'

 const store = createStore({
  state: {
    title:"mytitle"
  },
  getters: {
    myTitle: () => {
      return 'this is a title'
    }
  },
  modules: {
    auth
  }
})
export default store