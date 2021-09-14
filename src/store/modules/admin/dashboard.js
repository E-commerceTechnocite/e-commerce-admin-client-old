export default ({
    namespaced: true,
    state: {
        breadCrumbs: [],
        images: [],
        currentImage: []
    },
    getters: {
        GET_BREADCRUMBS: (state) => {
            return Object.values(state.breadCrumbs) 
        },
        GET_IMAGES: (state) => {
            return state.images
        },
        GET_CURRENT_IMAGE: (state) => {
            return state.image
        }
    },
    mutations: {
        SET_BREADCRUMBS: (state, path) => {
            state.breadCrumbs = path
        },
        SET_PRODUCT_IMAGES: (state, imagesFile) => {
            state.images = imagesFile
        },
        SET_CURRENT_IMAGE: (state, imagesFile) => {
            state.image = imagesFile
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
        },
        PASS_IMAGE: ({commit}, imagesFile) => {
            commit('SET_PRODUCT_IMAGES', imagesFile)
        },
        PASS_CURRENT_IMAGE: ({commit}, imagesFile) => {
            commit('SET_CURRENT_IMAGE', imagesFile)
        }
    }
})