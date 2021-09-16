export default ({
    namespaced: true,
    state: {
        dailyInformations : []
    },
    getters: {
        DAILY_INFORMATIONS: (state) => {
            return state.dailyInformations
        }
    },
    mutations: {
        DAILY_INFORMATIONS_SET: (state, {data}) => {
            state.dailyInformations = data
        }
    },
    actions: {
        FETCH_INFORMATIONS: async({commit}) => {
            try {
                let response = await fetch ('http://localhost:4000/dailyInformations', {
                headers: {"Content-Type": "application/json"}
            }) 
            const jsonData = await response.json()
            //console.log(jsonData)
            if (jsonData !== null) commit('DAILY_INFORMATIONS_SET', {data: jsonData})
            } catch (err) {
                console.log("ERREUR") 
                return err
            }
        }
    }
  })