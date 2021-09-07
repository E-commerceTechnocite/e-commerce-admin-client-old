<template>
dashboard page
  <div v-if="$store.getters['auth/AUTH_IS_AUTHENTICATED']">
      You are logged in 
  </div>
  <div v-else>
      Error 404
  </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import {computed} from 'vue'
import {useStore} from 'vuex'

export default {
    setup() {
        const store = useStore()
        onMounted(async () => {
            await store.dispatch('auth/AUTH_CHECK_USER_VALIDITY') 
        })
        return {
            store
        }
    }
}
</script>

<style>

</style>