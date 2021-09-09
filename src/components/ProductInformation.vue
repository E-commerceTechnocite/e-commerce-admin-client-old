<template>
    <ul>
     <li>
      <div class="productListing" v-for="product in data/*productData*/" :key="product">
        <span class="titleProduct" >{{ product.titleProduct }}</span>
        <a> - </a>
        <span class="ref">{{ product.refr }}</span>
        <a> - </a>
        <span class="category">{{ product.category }}</span>
        <a> - </a>
        <span class="price">{{ product.price }}</span>
        <a> - </a>
        <span class="taxPrice">{{ product.taxPrice }}</span>
        <button>EDIT</button>
        <button>BIN</button>
      </div>
     </li>
    </ul>
</template>

<script>
import { ref } from "@vue/reactivity"
import { computed } from 'vue'
import { useStore } from 'vuex'

export default ({
    setup() {
        const store = useStore()
        store.dispatch('products/FETCH_PRODUCTS') 
        const data = computed(() => store.getters['products/PRODUCTS_']) 
        return {
            data
        }  
    }
})
</script>

<style>
  .productListing span{ 
   border: 1px solid black; 
}

</style>
