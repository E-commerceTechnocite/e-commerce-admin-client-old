<template>
    <div class="dashboard-home">
        <DailyInformation />
        <GraphicInformation />
        <div class="productButtonContainer">
            <h4>Last products added</h4>
            <router-link :to="{name: 'AddProduct'}" class="action">PRODUCT+</router-link>
        </div>
        <ProductInformation :productListLimit="productListLimit"/>
    </div>
</template>

<script>
import ProductInformation from '@/components/ProductInformation.vue'
import DailyInformation from '@/components/DailyInformation.vue'
import GraphicInformation from '@/components/GraphicInformation.vue'
import { useStore } from 'vuex'
import { onMounted } from '@vue/runtime-core'

export default {
    components: {
        ProductInformation,
        DailyInformation,
        GraphicInformation
    },
    setup() {
        const store = useStore()
        onMounted(async () => await store.dispatch('auth/AUTH_CHECK_USER_VALIDITY') )
        const productListLimit = 3
        return {
            productListLimit,
            store 
        }
    }
}
</script>

<style>
.dashboard-home .productButtonContainer {
    margin-top:15px;
    display:flex;
    flex-direction: row;
    /*justify-content: flex-end;*/
    justify-content: space-between;
}

.dashboard-home .productButton {
    border-radius: 5px;
    padding: 10px 20px;
    background-color: #6D97EA;
    color: #FFFFFF;
    box-shadow: 0px 0px 4px #6D97EA;
    font-size: 15px;
    font-family: Roboto, Arial, Helvetica, sans-serif; 
    border: none;
}
</style>