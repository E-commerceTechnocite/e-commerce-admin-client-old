<template>
<div v-if="loaded">
    <div v-if="$store.getters['auth/AUTH_IS_AUTHENTICATED']">
        <div class="dashboard">
            <NavigationBar />
            <div>
                <SideBar class="sidebar" />
                <div class="container" v-if="true"> <!-- v-if="containerLoaded" -->
                    <router-view/>
                </div>
                <div v-else class="container-loading">
                    <Loading />
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        Error 404
    </div>
</div>
<div v-else>
    <Loading />
</div>
</template>

<script>
import { onMounted, onUpdated, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Loading from '../../components/Loading.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import SideBar from '@/components/SideBar.vue'

export default {
    components: {
        NavigationBar,
        SideBar,
        Loading
    },
    setup() {
        const store = useStore()
        const router = useRouter()
        const loaded = ref(false)
        const checkUser = async () => {
                const response = await store.dispatch('auth/AUTH_CHECK_USER_VALIDITY')
                if (!response) router.push({name: 'LoginAdmin'})
                if (!loaded.value) loaded.value = true 
            
        } 
        onMounted(checkUser)
        onUpdated(checkUser)
        return { store, loaded }
    }
}
</script>

<style scoped>
.dashboard {
    display: flex;
    flex-direction: column;
    position: fixed;
}
.dashboard > div {
    display: flex;
}
.dashboard .sidebar {
    flex-basis: 250px;
}
.dashboard .container, .dashboard .container-loading {
    flex-grow:1;
}
</style>