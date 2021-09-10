<template>
  <div class="products">
    <!-- <button @click="isAddProduct">PRODUCT +</button>
    <AddProduct v-if="addProductBool"/> -->

    <router-link :to="{name: 'AddProduct'}">PRODUCT +</router-link>

    
  </div>
</template>

<script>
import Loading from '../../../components/Loading.vue'
// import AddProduct from '../../../components/CrudProduct/AddProduct.vue'
import { ref } from '@vue/reactivity'


export default {
  components: { Loading, /* AddProduct */ },
  setup() {
    const addProductBool = ref(false)
    const isAddProduct = () => {
      addProductBool.value = !addProductBool.value
    }
    return {addProductBool, isAddProduct}
  }
}
</script>

<style>

</style>