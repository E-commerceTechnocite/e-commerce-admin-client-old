<template>
    <ul>
     <li>
      <div class="productListing" v-for="product in productData" :key="product">
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

export default ({
    setup() {
        const productData = ref([])
        const fetchProducts = async() => {
            try {
                let response = await fetch ('http://localhost:3000/products', {
                headers: {"Content-Type": "application/json"}
            }) 
            const data = await response.json()
            productData.value = data
            } catch (err) {
                return err
            }
        }
        fetchProducts()
        
        return {
            productData
        }
    }
})


</script>

<style>
  .productListing span{ 
   border: 1px solid black; 
}

</style>
