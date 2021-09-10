<template>
    <div class="dashboard-home">
        <DailyInformation />
        <GraphicInformation />
        <ProductInformation :beginNumberOfListRows="beginNumberOfListRows" :endNumberOfListRows="endNumberOfListRows" />
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
        let beginNumberOfListRows = 0
        let endNumberOfListRows = 3
        return {
            beginNumberOfListRows,
            endNumberOfListRows,
            store 
        }
    }
}
</script>

<style>

</style>