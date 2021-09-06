import router from "../../router"

export default ({
    namespaced: true,
    state: {
        user: null,
        storage: ''
    },
    getters: {
        AUTH_USER_TOKEN: (state) => {
            return state.user
        },

        AUTH_IS_LOGGED_IN: () => {
            return sessionStorage.getItem('token') ? true : false
          }
    },
    mutations: {
        AUTH_SET_USER: (state, {userData}) => {
            state.user = userData.accessToken
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
                let response = await fetch("http://localhost:3000/login", requestOptions) 
                if (!response.ok) {
                    return console.log('wrong id')
                } 
                const data = await response.json()
                if (data !== null) commit('AUTH_SET_USER', {userData: data})
            } catch (err) {
                return err
            }
        },

        // Set token in session storage and redirect to desired link
        // data object
        AUTH_STORE_USER_TOKEN({}, data) {
            sessionStorage.setItem('token', JSON.stringify(data.token))
            if (data.token) router.push({name: data.uri})
        },

        AUTH_CHECK_TOKEN: async ({}, route) => {
            let sessionToken = JSON.parse(sessionStorage.getItem('token'))
            let requestOptions = {
                method: "GET",
                headers: {'Authentication': `Bearer ${sessionToken}`}
            }
            //////////////////////////
            try {
                let response = await fetch("http://localhost:3000/users", requestOptions)
                if (!response.ok) {
                    return console.log('oops')
                } 
                router.push({name: route})
                //////////////////////
            } catch (err) {
                return err
            }
        }
    }
})