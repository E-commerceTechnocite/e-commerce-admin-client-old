<template>
dashboard page
  <div v-if="$store.getters['auth/AUTH_IS_LOGGED_IN']">
      You are logged in 
  </div>
  <div v-else>
      Error 404
  </div>
</template>

<script>
import {useStore} from 'vuex'

export default {
    setup() {
        const store = useStore()

        return {
            store,
            token,
        }
    }
}
</script>

<style>

</style>