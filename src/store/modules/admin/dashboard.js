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
        },
        SET_NEW_CURRENT_IMAGE: (state, file) => {
            state.images.splice(state.currentImageIndex, 1, Object.assign({}, file.file))
        },
        REMOVE_CURRENT_IMAGE: (state, index) => {
            state.images.splice(index, 1)
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
        PASS_UPDATE_CURRENT_IMAGE: ({commit}, file) => {
            commit('SET_NEW_CURRENT_IMAGE', file)
        },
        PASS_CURRENT_IMAGE: ({commit}, {file, index}) => {
            if (index !== null) commit('SET_CURRENT_IMAGE_INDEX', index)
            commit('SET_CURRENT_IMAGE', file)
        },
        PASS_REMOVE_CURRENT_IMAGE: ({commit}, index) => {
            if (typeof index === 'object') index = index.value
            commit('REMOVE_CURRENT_IMAGE', index)
        }
    }
})