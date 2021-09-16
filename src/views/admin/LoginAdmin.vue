<template>
    <div class="login-admin" v-if="loaded"> <!-- v-if="loaded" -->
        <div>
            <h1>LOGO</h1>
            <h2>Sign in to WNDR</h2>
        </div>
        <div>
            <form @submit.prevent="handleSubmit">
                <div class="email">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required v-model="email">
                </div>
                <div class="password">
                    <label for="password">Password</label>
                    <input type="password" id ="password" name="password" required v-model="password">
                </div>
                <div class="checkbox">
                    <input type="checkbox" id="checkbox" name="checkbox">
                    <label for="checkbox">Remember me</label>
                </div>
                    <input type="submit" value="login" class="action">
            </form>
        </div>
    </div>
    <div v-else>
        <Loading />
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Loading from '../../components/Loading.vue'


export default {
    components: {
        Loading
    },
    setup() {
        const store = useStore()
        const router = useRouter()
        const email = ref('')
        const password = ref('')
        const loaded = ref(true)
        const token = computed(() => store.getters['auth/AUTH_USER_TOKEN'])
        const handleSubmit = async () => {
            if (loaded.value) {
                loaded.value = false
                await store.dispatch( 'auth/AUTH_FETCH_USER_TOKEN', {email: email.value, password: password.value} )
                await store.dispatch( 'auth/AUTH_STORE_USER_TOKEN', {token: token.value, uri: 'DashboardHome'} )
            }
        }
        const checkUser = async () => {
                const response = await store.dispatch('auth/AUTH_CHECK_USER_VALIDITY')
                if (response) return router.push({name: 'DashboardHome'})
                if (!loaded.value) loaded.value = true
            
        }
        onMounted(checkUser)


        return {
            email,
            password,
            token,
            loaded,
            handleSubmit
        }
    }
}
</script>

<style>
    .login-admin {
        position: relative;
        left: 50%;
        transform: translate(-50%, 15%);
        width: 560px;
        height: 600px;
    }
    .login-admin > div:nth-child(n+2) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login-admin > div:first-child {
        height: 185px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    .login-admin h2 {
        font-family: Roboto-Medium, Avenir, Helvetica, Arial, sans-serif;
        font-weight: normal;
    }
    .login-admin > div:nth-child(2) {
        background: #FFFFFF;
        height: 415px;
        box-shadow: 4px 4px 5px rgba(109, 151, 234, 0.25);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .login-admin form {
        width: 60%;
        margin-bottom: 30px;
    }
    .login-admin .email, .login-admin .password, .login-admin .checkbox {
        display: flex;
        align-items: flex-start;
    }
    .login-admin .email, .login-admin .password {
        flex-direction: column;
    }
    .login-admin .email label, .login-admin .password label {
        margin: 50px 0 15px 0;
    }
    .login-admin [type=email], [type=password] {
        border: none;
        border-bottom: 1px solid #DDDDDD;
        width: 100%;
        height: 30px;
    }
    .login-admin .checkbox {
        margin: 20px 0 50px 0
    }
    .login-admin [type=checkbox]{
        margin: 1px 15px 0 0;
    }
    .login-admin [type=checkbox] + label {
        position: relative;
    }
    .login-admin [type=checkbox] + label::before {
        content: '';
        position: absolute;
        left: -29px;
        top: 0;
        width: 15px;
        height: 15px;
        background: #EEEEEE;
        border-radius: 4px;
    }
    .login-admin [type=checkbox]:focus + label::before {
        background: 0;
     }
</style>