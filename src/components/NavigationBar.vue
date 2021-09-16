<template>
  <div class="navigation-bar">
    <div class="breadcrumbs">
      <div v-for="(crumb, index) in breadCrumbs" :key="index">
          <span>{{crumb}}</span>
          <i class="fas fa-chevron-right" v-if="!isLast(breadCrumbs, index)"></i>
      </div>
    </div>
    <div class="user-info">
      <div class="user">
        <div ref="dropMenu" v-show="userDropMenu">
          <router-link to="#">Profile</router-link>
          <router-link to="#" @click="logout">Logout</router-link>
        </div>
        <div  @click="handleClick">
          <span>John</span>
          <span>Doe</span>
          <i class="fas fa-sort-down"></i>
        </div>
      </div>
      <div class="user-img">
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { onMounted, onUpdated } from '@vue/runtime-core'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const route = useRoute()
    const dropMenu = ref(null)
    const userDropMenu = ref(false)
    const breadCrumbs = computed(() => store.getters['dashboard/GET_BREADCRUMBS'])
    const logout = () => { store.dispatch('auth/AUTH_LOGOUT', true)}
    const handleClick = () => {
      userDropMenu.value = !userDropMenu.value
    }
    const isLast = (array, index) => {
      if (index === array.length -1) return true
    }
    onMounted(() => store.dispatch( 'dashboard/WATCH_BREADCRUMBS', route.path) )

    onUpdated(() => store.dispatch( 'dashboard/WATCH_BREADCRUMBS', route.path) )

    return {
      breadCrumbs,
      userDropMenu,
      dropMenu,
      isLast,
      handleClick,
      logout
    }
  },
}
</script>

<style>
.navigation-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
}
.navigation-bar .breadcrumbs > div {
  display: inline-block;
  font-weight: bold;
}
.navigation-bar .breadcrumbs i {
  font-size: 12px;
  margin: 0 10px;
}
.navigation-bar .user-info {
  display: flex;
  align-items: center;
}
.navigation-bar .user-info i {
  margin-left: 10px;
}
 .navigation-bar .user-info span {
   margin-left: 5px;
 }
.navigation-bar .user-info .user-img {
  width: 38px;
  height: 38px;
  background: #DDDDDD;
  border-radius: 50%;
  margin-left: 10px;
}
.navigation-bar .user-info .user {
  position: relative;
}
.navigation-bar .user-info .user div:first-child {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  top: 24px;
  right: 40px;
  width: 80px;
}
.navigation-bar .user-info .user div:first-child a{
  padding: 10px 20px;
  text-align: left;
  width: 100%;
  background: rgb(255, 254, 254);
  transition: 0.2s;
}
.navigation-bar .user-info .user div:first-child a:hover {
  background: rgb(247, 246, 246);
}
</style>