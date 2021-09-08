import router from "../../router"

export default ({
    namespaced: true,
    state: {
        token: null,
        user: undefined,
        authenticate: false
    },
    getters: {
        AUTH_USER_TOKEN: (state) => {
            return state.user.accessToken
        },

        AUTH_USER: (state) => {
            return state.user.user
        },

        AUTH_IS_AUTHENTICATED: (state) => {
            return state.authenticate
        }
    },
    mutations: {
        AUTH_SET_USER: (state, {userData}) => {
            state.user = userData
        },

        AUTH_AUTHENTICATION: (state) => {
            state.authenticate = true
        },

        AUTH_DESTROY: (state) => {
            state.authenticate = false
        }
    },
    actions: {
        // fetch user token when login and set the token in auth module
        // can be used to register user
        AUTH_FETCH_USER_TOKEN: async ({commit}, email) => {
            let requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email.email, password: email.password})
            } 
            try {
                let response = await fetch("http://localhost:4000/login", requestOptions) 
                if (!response.ok) router.push({name: 'LoginAdmin'})
                const data = await response.json()
                if (data !== null) commit('AUTH_SET_USER', {userData: data})
            } catch (err) {
                return err
            }
        },

        // Check the user token validity on the page by server request with token bearer 
        AUTH_CHECK_USER_VALIDITY: async ({commit}) => {
            if (!sessionStorage.getItem('token') || sessionStorage.getItem('token') === 'undefined') router.push({name: 'LoginAdmin'})
                let sessionToken = JSON.parse(sessionStorage.getItem('token')) 
            try {
                let response = await fetch ('http://localhost:4000/660/users', {
                headers: {'Authorization': `Bearer ${sessionToken}`}
            })
            !response.ok ? commit('AUTH_DESTROY') : commit('AUTH_AUTHENTICATION')
            return response.ok
            } catch (err) {
                return err
            }
        },

        // Set token in session storage and redirect to desired link
        // data object
        AUTH_STORE_USER_TOKEN({}, data) {
            sessionStorage.setItem('token', JSON.stringify(data.token))
            if (data.token) router.push({name: data.uri})
        }
    }
})