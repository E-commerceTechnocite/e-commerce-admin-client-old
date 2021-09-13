<template>
<div v-if="loaded">
    <div v-if="$store.getters['auth/AUTH_IS_AUTHENTICATED']">
        <div class="dashboard">
            <SideBar class="sidebar" />
            <div class="view">
                <NavigationBar :path="$route.fullPath"/>
                <div class="container" v-if="true"> <!-- v-if="containerLoaded" -->
                        
                    <router-view /> <!-- class="container-link" -->
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
import { computed, onMounted, onUpdated, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
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
        const route = useRoute()
        const loaded = ref(false)
        const checkUser = async () => {
                const response = await store.dispatch('auth/AUTH_CHECK_USER_VALIDITY')
                if (!response) router.push({name: 'LoginAdmin'})
                if (response) loaded.value = true 
        }
        onMounted(() => {
            checkUser()
        })
        onUpdated(() => {
            checkUser()
        })
        return { 
            store, 
            loaded
        }
    }
}
</script>

<style scoped>
.dashboard {
    display: flex;
    /* overflow-x: hidden; */
}
.dashboard > div {
    display: flex;
    flex-direction: column;
}
.dashboard .view {
    margin-left: 260px;
    flex-grow: 1;
}
.dashboard .sidebar {
    flex-basis: 260px;
}
.dashboard .container, .dashboard .container-loading {
    background: lightcyan;
    flex-grow:1;
}
.dashboard .breadcrumbs {
    display: flex;
    flex-direction: row;
    margin: 36px 0;
    font-weight: bold;
}
.dashboard .breadcrumbs i {
    font-size: 12px;
    margin: 0 10px;
}
.dashboard .container-link {
    margin-right: 60px;
    background: black;
}
</style>