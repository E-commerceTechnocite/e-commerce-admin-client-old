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
        },
        UPLOAD_CURRENT_FILE: async ({state}, {file}) => {
            const formData = new FormData()
            for (let i = 0; i < file.length; i++) {
                console.log(file[i].file)
                formData.append('files', file[i].file)
            }
            let sessionToken = sessionStorage.getItem('token')
            let requestOptions = {
                method: "POST",
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM1MDA0NWEyLTRlYTEtNDU1YS1hZjg2LWNiNTJkNGFmMmFkZCIsInVzZXJuYW1lIjoiYWRtaW4iLCJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwicm9sZUlkIjoiZWQ1N2IxNjktNGNjZi00YWQ3LTg0M2MtNjY2NTUxMzJhY2IzIiwiaWF0IjoxNjMyMjA5MDcxLCJleHAiOjE2MzIyMTI2NzF9.11VDFs338ibjbq-hWTbvZsnnF36LSBUyTRfilRzH7GM`
                },
                body: formData
            } 
            try {/* "http://localhost:3000/v1/o-auth/login" */
                let response = await fetch("http://localhost:3000/v1/file/upload-bunch", requestOptions) 
                if (!response.ok) router.push({name: 'LoginAdmin'})
                console.log(response)
                const data = await response.json()
                console.log(data)
            } catch (err) {
                return err
            }
        }
    }
})