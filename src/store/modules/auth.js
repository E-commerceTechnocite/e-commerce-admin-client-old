export default ({
    namespaced: true,
    state: {
        user: {},
        storage: ''
    },
    getters: {
        AUTH_USER_TOKEN: (state) => {
            return state.user.accessToken
        }
    },
    mutations: {
        AUTH_SET_USER: (state, {userData}) => {
            state.user = userData
        }
    },
    actions: {
        AUTH_FETCH_USER_TOKEN: async ({commit}, email) => {
            console.log('coucou')
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email.email, password: email.password})
            } 
            try {
                const response = await fetch("http://localhost:3000/users", requestOptions) 
                if (!response.ok) {
                    return console.log('No response from user')
                } 
                const data = await response.json()
                commit('AUTH_SET_USER', {userData: data})
            } catch (err) {
                return err
            }
        },
        AUTH_STORE_USER_TOKEN: ({}, data) => {
            sessionStorage.setItem('token', data.token)
            window.location.href = data.uri
        }
    }
})