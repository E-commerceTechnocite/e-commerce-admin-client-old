<template>
    <div class="productListing" v-for="product in data.slice(0,numberOfListRows)" :key="product">
        <div class="titleProduct item" >{{ product.titleProduct }}</div>
        <div class="ref item">{{ product.refr }}</div>
        <div class="category item">{{ product.category }}</div>
        <div class="price item">{{ product.price }}</div>
        <div class="taxPrice item">{{ product.taxPrice }}</div>
        <button class="editButton">EDIT</button>
        <button class="trashButton"><i class="fas fa-trash"></i></button>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default ({
    props: ['numberOfListRows'],
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
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #E5E5E5; 
}

.productListing {
    background-color: #ffffff;
    box-shadow: 4px 4px 4px rgba(109, 151, 234, 0.25);
    padding: 10px 25px;
    margin: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.item {
    background-color: #ffffff;
    color: #67748E;
    font-size: 15px;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    padding-top: 2px;
    margin: 10px; 
    /* flex-grow: 1; */
    
    text-align: center;
    border: 1px solid #E8E8E8;
    box-sizing: border-box; 
}

.titleProduct {
    /* flex-grow: 3; */
    max-width: 250px;
    width: 100%;
}

.ref {
    flex-grow: 1;
}

.category {
    flex-grow: 2;
}

.price {
    flex-grow: 1;
}

.taxPrice {
    flex-grow: 1;
}

.editButton {
    border-radius: 5px;
    margin: 5px 5px 5px 25px;
    padding: 2px 20px;
    background-color: #6D97EA;
    color: #FFFFFF;
    box-shadow: 0px 0px 4px #6D97EA;
    font-size: 15px;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: normal;  
    border: none;
}

.trashButton {
    border-radius: 4px;
    margin: 5px;
    padding: 2px 5px;
    background-color: #ff0037;
    box-shadow: 0px 0px 4px #FF7777;
    font-size: 15px;
    border: none;
}

.fas {
    color: #ffffff;
} 
</style>
