<template>
    <span class="titleProduct">{{ titleProduct }}</span>
    <a> - </a>
    <span class="ref">{{ refr }}</span>
    <a> - </a>
    <span class="category">{{ category }}</span>
    <a> - </a>
    <span class="price">{{ price }}</span>
    <a> - </a>
    <span class="taxPrice">{{ taxPrice }}</span>
    <button>EDIT</button>
    <button>BIN</button>
</template>

<script>
export default ({
    setup() {
        let titleProduct = "title"
        let refr = "ref"
        let category = "category"
        let price = 150
        let taxPrice = "21%"
        return {
            titleProduct,
            refr,
            category,
            price,
            taxPrice
        }
    }
})
</script>

<style>
  span{ 
   border: 1px solid black; padding: 5px; 
}
</style>
