export default ({
    namespaced: true,
    state: {
        files: null,
        pagination: null
    },
    getters: {
        GET_FILES: (state) => {
            return state.files
        },
        GET_PAGINATION: (state) => {
            return state.pagination
        }
    },
    mutations: {
        SET_FILE: (state, files) => {
            state.files = files.files
        },
        SET_PAGINATION: (state, pagination) => {
            state.pagination = pagination
        }
    },
    actions: {
        CALL_MEDIA_LIBRARY: async ({commit}, page) => {
            if (!sessionStorage.getItem('token') || sessionStorage.getItem('token') === 'undefined') return 
            let sessionToken = JSON.parse(sessionStorage.getItem('token')) 
            try {
                let response = await fetch ('http://localhost:3000/v1/file', {
                headers: {'Authorization': `Bearer ${sessionToken}`}
                })
                if (response.ok) {
                    const data = await response.json()
                    console.log(data)
                    commit('SET_FILE', {files: data.data})
                    commit('SET_PAGINATION', {pagination: data.meta})
                }
            } catch (err) {
                return err
            }
        
        }
    }
})