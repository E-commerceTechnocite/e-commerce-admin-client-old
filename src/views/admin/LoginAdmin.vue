<template>
    <div class="login-admin">
        <div>
            <h1>LOGO</h1>
            <h2>SIgn in to WNDR</h2>
            {{email}}
            {{password}}
            {{token}}
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
</template>

<script>
import { ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
export default {
    setup() {
        const token = ref('')
        const email = ref('')
        const password = ref('')
        
        const handleSubmit = () => {
            // if (email.length & password.length) {
                const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email, password: password })
                }
                fetch("http://localhost:3000/users", requestOptions)
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err))
            // }         
        }

        // console.log(token) 
        
        return {
            token, 
            email, 
            password, 
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