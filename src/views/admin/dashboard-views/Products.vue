<template>
  <div class="products">
    <div class="productButtonContainer">
      <router-link :to="{name: 'AddProduct'}" class="action">PRODUCT+</router-link>
      <div class="search-bar">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="search">
      </div>
    </div>
      <ProductInformation />
    <div> 
      <Pagination :totalPages="meta.maxPages" :currentPage="meta.currentPage"/>
    </div>
  </div>   
</template>

<script>
import Loading from '../../../components/Loading.vue'
import ProductInformation from '@/components/ProductInformation.vue'
import Pagination from '@/components/Pagination.vue'
import { useStore } from 'vuex'
import { onMounted } from '@vue/runtime-core'
import { computed } from 'vue'

export default {
  components: { 
    Loading,
    ProductInformation,
    Pagination,
    },
    setup() {
        const store = useStore()
        store.dispatch('products/FETCH_PRODUCTS')
        const meta = computed(() => store.getters['products/META_'])
        onMounted(async () => await store.dispatch('auth/AUTH_CHECK_USER_VALIDITY') )
        return {
            store,
            meta       
        }
    }
}
</script>

<style>
.products .productButtonContainer {
    margin-top:15px;
    display:flex;
    flex-direction: row;
    align-items: center;
    /*justify-content: flex-end;*/
    justify-content: space-between;
}

.products .search-bar {
   left: 250px;
   height: 100%;
   background: white;
   padding: 10px 5px;
   border-radius: 4px;
}
.products .search-bar > div {
   background: #FFFFFF;
   padding: 10px;
   border-radius: 4px;
   border: 1px solid #D6D6D6;
}
.products .search-bar input {
   border: none;
   padding: 3px;
   margin-left: 5px;
}
.products .search-bar input::placeholder {
    color: #BBBBBB;
}
.products .search-bar i {
   color: #BBBBBB;
   font-size: 13px;
   margin-left: 10px;
}
</style>