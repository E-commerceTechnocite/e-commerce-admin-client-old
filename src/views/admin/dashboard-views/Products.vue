<template>
  <div class="products">
    <div class="productButtonContainer">
      <button class="action">PRODUCT+</button>
      <div class="search-bar">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="search">
      </div>
    </div>
    <ProductInformation :beginNumberOfListRows="beginNumberOfListRows" :endNumberOfListRows="endNumberOfListRows" />
    <div> 
      <Pagination />
    </div>
  </div>   
</template>

<script>
import Loading from '../../../components/Loading.vue'
import ProductInformation from '@/components/ProductInformation.vue'
import Pagination from '@/components/Pagination.vue'
import { useStore } from 'vuex'
import { onMounted } from '@vue/runtime-core'
/*import Pagination from '../../../components/Pagination.vue'*/

export default {
  components: { 
    Loading,
    ProductInformation,
    Pagination,
    },
    setup() {
        const store = useStore()
        onMounted(async () => await store.dispatch('auth/AUTH_CHECK_USER_VALIDITY') )
        let beginNumberOfListRows = 0
        let endNumberOfListRows = 10
        return {
            beginNumberOfListRows,
            endNumberOfListRows,
            store 
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