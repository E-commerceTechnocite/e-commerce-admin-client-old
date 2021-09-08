export default ({
    state: {
        titleProduct,
        ref,
        category,
        price,
        taxPrice
    },
    getters: {
        PRODUCT_TITLE: (state) => {
            return state.titleProduct
        },

        PRODUCT_REF: (state) => {
            return state.ref
        },

        PRODUCT_CATEGORY: (state) => {
            return state.category
        },

        PRODUCT_PRICE: (state) => {
            return state.price
        },

        PRODUCT_TAXPRICE: (state) => {
            return state.taxPrice
        },
    },
    mutations: {
        PRODUCT_SET_TITLE: (state, {tdata}) => {
            state.titleProduct = data
        },

        PRODUCT_SET_REF: (state, {rdata}) => {
            state.ref = data
        },

        PRODUCT_SET_CATEGORY: (state, {cdata}) => {
            state.category = data
        },

        PRODUCT_SET_PRICE: (state, {pdata}) => {
            state.price = data
        },

        PRODUCT_SET_TAXPRICE: (state, {txdata}) => {
            state.taxPrice = data
        }
    },
    actions: {
        FETCH_PRODUCT_LIST: () => {
            fetch(" http://localhost:3000/products")
    .then(async response => {
      const data = await response.json();
      if (data !== null) commit('PRODUCT_SET_TITLE', {tdata: data})
      // check for error response
      if (!response.ok) {
          console.log("error")   
      }
      
    })
    .catch(err => {
      console.error("There was an error!", error);
    });
        }
    }
  })