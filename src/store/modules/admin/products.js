export default ({
    namespaced: true,
    state: {
        products : [],
        meta : []
    },
    getters: {
        PRODUCTS_: (state) => {
            return state.products
        },
        META_: (state) => {
            return state.meta
        }
    },
    mutations: {
        PRODUCTS_SET: (state, {data}) => {
            state.products = data
        },
        META_SET: (state, {data}) => {
            state.meta = data
        }
    },
    actions: {
        /*JE CHANGE DES CHOSES*/
        /*oui*/
        FETCH_PRODUCTS: async({commit}) => {
            try {
                let response = await fetch ('http://localhost:3000/v1/product?limit=10&page=1/data', {
                headers: {"Content-Type": "application/json"}
            }) 
            const jsonData = await response.json()
            if (jsonData !== null) commit('PRODUCTS_SET', {data: jsonData})
            } catch (err) {
                return err
            }
            /*try {
                let response = await fetch ('http://localhost:4000/meta', {
                headers: {"Content-Type": "application/json"}
            }) 
            const jsonData = await response.json()
            if (jsonData !== null) commit('META_SET', {data: jsonData})
            } catch (err) {
                return err
            }*/
        }
    }
  })