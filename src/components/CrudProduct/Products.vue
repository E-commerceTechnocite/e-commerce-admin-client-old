<template>
    <div>
       <h1> List of products </h1>
       <button @click="getProducts"> show product</button>
    </div>
    <div class="container"> 
        <table class="table table-success table-striped" >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Reference</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr  v-for="product in productList" :key="product.id">
                    <td>{{product.id}}</td>
                    <td>{{product.title}}</td>
                    <td>{{product.reference}}</td>
                    <td>{{product.description}}</td>
                    <td>{{product.price}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'

import { useStore } from 'vuex'
    export default {
        name :'Products',
        
         
        setup(){
            const store = useStore()
            let productList = ref([])
            const getProducts = () => { 
                store.dispatch('products/Search_Product').then((res) => productList=JSON.stringify(res))
                console.log('ici')
                console.log(productList)
                
                console.log('laba')
            }
            return {productList, getProducts}
        } 
         
        
    }
</script>

<style scoped>

</style>