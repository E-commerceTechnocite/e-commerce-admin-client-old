<template>
dashboard page
  <div v-if="isLoggedIn">
      You are logged in
  </div>
  <div v-else>
      You are not allowed
  </div>
</template>

<script>
import {computed} from 'vue'

export default {
    /* setup() {
        const token = computed(() => store.getters['auth/AUTH_USER_TOKEN'])
        const sessionToken = sessionStorage(getItem('token'))
        const isLoggedIn = () => {
            token === sessionToken ? true : false
        }
        return {
            token,
            isLoggedIn
        }
    } */
}
</script>

<style>

</style>