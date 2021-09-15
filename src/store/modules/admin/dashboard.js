export default ({
    namespaced: true,
    state: {
        breadCrumbs: [],
        images: [],
        currentImage: [],
        currentImageIndex: null
    },
    getters: {
        GET_BREADCRUMBS: (state) => {
            return Object.values(state.breadCrumbs) 
        },
        GET_IMAGES: (state) => {
            return state.images
        },
        GET_CURRENT_IMAGE: (state) => {
            return state.currentImage
        },
        GET_CURRENT_IMAGE_INDEX: (state) => {
            return state.currentImageIndex
        }
    },
    mutations: {
        SET_BREADCRUMBS: (state, path) => {
            state.breadCrumbs = path
        },
        SET_PRODUCT_IMAGES: (state, imagesFile) => {
            state.images = imagesFile
        },
        SET_CURRENT_IMAGE: (state, file) => {
            state.currentImage = file
        },
        SET_CURRENT_IMAGE_INDEX: (state, index) => {
            state.currentImageIndex = index
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
        /* UPDATE_IMAGE: ({}) {

        }, */
        PASS_CURRENT_IMAGE: ({commit}, {file, index}) => {
            if (index !== null) commit('SET_CURRENT_IMAGE_INDEX', index)
            commit('SET_CURRENT_IMAGE', file)
        }
    }
})