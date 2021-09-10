<template>
    <div v-if="$store.getters['auth/AUTH_IS_AUTHENTICATED']">
        <div v-if="true" class="dashboard">
            <NavigationBar />
            <div>
                <SideBar />
                <div class="container">
                   <DailyInformation />
                   <GraphicInformation />
                   <ProductInformation :beginNumberOfListRows="beginNumberOfListRows" :endNumberOfListRows="endNumberOfListRows" />
                </div>
            </div>
            
        </div>
        <div v-else>
            loading
        </div>
    </div>
    <div v-else>
        Error 404
    </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import NavigationBar from '@/components/NavigationBar.vue'
import SideBar from '@/components/SideBar.vue'
import ProductInformation from '@/components/ProductInformation.vue'
import DailyInformation from '@/components/DailyInformation.vue'
import GraphicInformation from '@/components/GraphicInformation.vue'

export default {
    name: 'NavBar',
    components: {
        NavigationBar,
        SideBar,
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
.dashboard {
    display: flex;
    flex-direction: column;
}
.dashboard>div {
    display: flex;
}
.dashboard .container {
    flex-grow: 1;
}
</style>