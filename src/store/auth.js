export default ({
    state: {
        user: {accessToken: "je suis l'access token", user: "je suis un user"},
        email: '',
        password: '',
    },
    getters: {
        USER_TOKEN: ({state}) => {
            return state.user.accessToken
        }
    },
    mutations: {
        SET_USER: ({state}, data) => {
            return state.objectUser = data
        }
    },
    actions: {
        FETCH_USER_TOKEN: async ({commit}, email, password) => {
            console.log('coucou')
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email.value, password: password.value })
            }
            try {
                const response = await fetch("http://localhost:3000/users", requestOptions) 
                if (!response.ok) {
                    return console.log('No response from user')
                }
                const data = await response.json()
                return commit('USER_OBJECT', data)
            } catch (err) {
                return err
            }
        }
    }
})
