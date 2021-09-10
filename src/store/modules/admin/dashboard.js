export default ({
    namespaced: true,
    state: {
        breadCrumbs: []
    },
    getters: {
        GET_BREADCRUMBS: (state) => {
            return Object.values(state.breadCrumbs) 
        }
    },
    mutations: {
        SET_BREADCRUMBS: (state, path) => {
            state.breadCrumbs = path
        }
    },
    actions: {
        WATCH_BREADCRUMBS: ({commit, state}, path) => {
            let _ = require('lodash')
            let treatedPath = path.split("/")
            for ( let i = 0; i < treatedPath.length; i++) {
                treatedPath[i] = treatedPath[i].charAt(0).toUpperCase() + treatedPath[i].slice(1);
            }
            treatedPath.shift()
            let result = Object.assign({}, treatedPath)
            if (!_.isEqual( state.breadCrumbs, result)) commit('SET_BREADCRUMBS', result)

        }
    }
})