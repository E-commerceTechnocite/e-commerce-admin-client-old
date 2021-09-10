

export default {
    namespaced: true,
    state: {
         products: [
            {id:1, title : 'laptop' ,reference :'product01', description:'laptop serie oneyes' ,price:599},
            {id:2, title : 'TVp' ,reference :'product02', description:'Samsung tv ' ,price:800},
            {id:3, title : 'Desk' ,reference :'product03', description:'Desk for bos' ,price:1500},
            {id:4, title : 'GSM' ,reference :'product03', description:'Gsm 5e generation' ,price:900}
        ]
    },
    getters: {
         GET_PRODUCTS: (state) => {
             return state.products
            }
    },
    mutations: {
       
        
    },
    actions: {
        Search_Product: async () => {
            let requestOptions = {
                headers: { "Content-Type": "application/json" },
            } 
            try {  
                let response = await fetch("http://localhost:3000/products", requestOptions) 
                const data = await response.json()
                if (data === null || !response.ok) console.log('no data avalable')
                return data
            } catch (err) {
                return err
            }
       
    },

  }
}