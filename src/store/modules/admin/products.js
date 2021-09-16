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
        FETCH_PRODUCTS: async({commit}, id=1) => {
            if (!sessionStorage.getItem('token') || sessionStorage.getItem('token') === 'undefined') return 
            let sessionToken = JSON.parse(sessionStorage.getItem('token'))
            try {
                let response = await fetch ('http://localhost:3000/v1/product?limit=10&page=' + id, {
                headers: {'Authorization': `Bearer ${sessionToken}`}
            }) 
            const jsonData = await response.json()
            console.log("prodprod" + jsonData.data)
            console.log(jsonData.meta)
            //console.log("tosseomiel")
            if (jsonData !== null) {
              commit('PRODUCTS_SET', {data: jsonData.data})
              commit('META_SET', {data: jsonData.meta})
            }
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