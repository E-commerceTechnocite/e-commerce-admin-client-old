<template>
<div class="product-information">
    <div class="productListing" v-for="product in data.slice(beginNumberOfListRows,endNumberOfListRows)" :key="product">
        <div class="titleProduct item" >{{ product.title }}</div>
        <div class="ref item">{{ product.reference }}</div>
        <div class="category item">{{ product.category.label }}</div>
        <div class="price item">{{ product.price }}€</div>
        <div class="taxPrice item">TAXE</div>
        <button class="editButton">EDIT</button>
        <button class="trashButton"><i class="fas fa-trash"></i></button>
    </div>
</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default ({
    props: ['beginNumberOfListRows','endNumberOfListRows'],
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
.productListing {
    background-color: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    padding: 10px 25px;
    margin: 10px 0px 15px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.productListing .item {
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

.productListing .titleProduct {
    /* flex-grow: 3; */
    max-width: 250px;
    width: 100%;
}

.productListing .ref {
    flex-grow: 1;
}

.productListing .category {
    flex-grow: 2;
}

.productListing .price {
    flex-grow: 1;
}

.productListing .taxPrice {
    flex-grow: 1;
}

.productListing .editButton {
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

.productListing .trashButton {
    border-radius: 4px;
    margin: 5px;
    padding: 2px 5px;
    background-color: #ff0037;
    box-shadow: 0px 0px 4px #FF7777;
    font-size: 15px;
    border: none;
}

.productListing .trashButton .fas {
    color:#ffffff;
}
</style>
