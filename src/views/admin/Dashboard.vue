<template>
<div v-if="loaded">
    <div v-if="$store.getters['auth/AUTH_IS_AUTHENTICATED']">
        <div class="dashboard">
            <NavigationBar />
            <div>
                <SideBar class="sidebar" />
                <div class="container" v-if="true"> <!-- v-if="containerLoaded" -->
                        <div class="breadcrumbs">
                            <div v-for="(crumb, index) in breadCrumbs" :key="index">
                                <span>{{crumb}}</span>
                                <i class="fas fa-chevron-right" v-if="!isLast(breadCrumbs, index)"></i>
                            </div>
                        </div>
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
        const breadCrumbs = computed(() => store.getters['dashboard/GET_BREADCRUMBS'])
        const checkUser = async () => {
                const response = await store.dispatch('auth/AUTH_CHECK_USER_VALIDITY')
                if (!response) router.push({name: 'LoginAdmin'})
                if (response) loaded.value = true 
        }
        const isLast = (array, index) => {
            if (index === array.length -1) return true
        }
        onMounted(() => {
            checkUser()
            store.dispatch('dashboard/WATCH_BREADCRUMBS', route.path)
        })
        onUpdated(() => {
            checkUser()
            store.dispatch('dashboard/WATCH_BREADCRUMBS', route.path)
        })
        return { 
            store, 
            loaded,
            breadCrumbs,
            isLast 
        }
    }
}
</script>

<style scoped>
.dashboard {
    display: flex;
    flex-direction: column;
    /* position: fixed; */
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
.dashboard .breadcrumbs {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    font-weight: bold;
}
.dashboard .breadcrumbs i {
    font-size: 12px;
    margin: 0 10px;
}
</style>