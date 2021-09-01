<template>
    <div class="login-admin">
        <form action="#">
            <div class="username">
                <label for="username">Username</label>                    <input type="text" id="username" name="username">
             </div>
            <div class="password">
                <label for="password">Password</label>
                <input type="password" id ="password" name="password">
              </div>
            <div class="checkbox">
                <input type="checkbox" id="checkbox" name="checkbox">
                <label for="checkbox">Remember me</label>
            </div>
            <div>
                <input type="submit" value="login">
            </div>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .login-admin {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: white;
        width: 560px;
        height: 420px;
        border-radius: 5px;
        box-shadow: 4px 4px 5px rgba(109, 151, 234, 0.25);
        display: flex;
        justify-content: center;
    }
    .login-admin form {
        /* position: relative;
        top: 50%;
        transform: translateY(-50%); */
        
    }
    .login-admin div {
        margin: 0 auto;
        width: 350px;
        display: flex;

    }
    .login-admin div:nth-child(-n+2) {
        flex-direction: column;
        justify-content: center;
    }
    .login-admin label {
        align-self: flex-start;
        margin: 54px 0 38px 0;
    }
    .login-admin div input {
        border: none;
        border-bottom: 1px solid #DDDDDD;
    }
    .checkbox {
        margin: 20px 0 45px 0!important;
    }
    .checkbox label {
        margin: 0 15px;
    }
    .checkbox input {
        margin-top: 1px;
    }
</style>