
export default ({
    namespaced: true,
    state: {
        products : []
    },
    getters: {
        PRODUCTS_: (state) => {
            return state.products
        }
    },
    mutations: {
        PRODUCTS_SET: (state, {data}) => {
            state.products = data
        }
    },
    actions: {
        FETCH_PRODUCTS: async({commit}) => {
            try {
                let response = await fetch ('http://localhost:3000/products', {
                headers: {"Content-Type": "application/json"}
            }) 
            const jsonData = await response.json()
            if (jsonData !== null) commit('PRODUCTS_SET', {data: jsonData})
            } catch (err) {
                return err
            }
        }
    }
  })