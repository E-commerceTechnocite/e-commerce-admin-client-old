<template>
  <div class="home">
    <router-link :to="{name: 'LoginAdmin'}">login admin</router-link>
  </div>

  <Products />
</template>

<script>
import { Products} from '../../components/CrudProduct/Products.vue'
export default {
  name: 'Home',
  components: { Products }
}
</script>
