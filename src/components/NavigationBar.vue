<template>
  <div class="navigation-bar">
    <div class="breadcrumbs">
      <div v-for="(crumb, index) in breadCrumbs" :key="index">
          <span>{{crumb}}</span>
          <i class="fas fa-chevron-right" v-if="!isLast(breadCrumbs, index)"></i>
      </div>
    </div>
    <div class="user-info">
      <div class="user" >
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
}
.navigation-bar .user-info .user-img {
  width: 38px;
  height: 38px;
  background: #DDDDDD;
  border-radius: 50%;
}


  /* .navigation-bar {
    position: relative;
    height: 85px;
  } 
  .navigation-bar .user-info {
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
  }
 .navigation-bar .search-bar > div {
   background: #FFFFFF;
   padding: 10px;
   border-radius: 4px;
   border: 1px solid #D6D6D6;
 }
 .navigation-bar .user-info {
   right: 60px;
   height: 100%;
   cursor: pointer;
 }
 .navigation-bar .user-img {
   background: rgba(109, 151, 234, 0.25);
   width: 38px;
   height: 38px;
   border-radius: 50%;
   margin-left: 15px;
 }
 .navigation-bar .user {
   display: flex;
   position: relative
 }
 .navigation-bar .user div:first-child {
   position: absolute;
   top: 30px;
   right: 20px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   background: wheat;
   min-width: 120px;
   border-radius: 4px;
 }
 .navigation-bar .user div:first-child a {
   margin: 0;
   padding: 10px;
   background: #FFFFFF;
   width: 100%;
   text-align: initial;
   box-shadow: 0px 0px 4px rgb(109 151 234 / 25%);
   transition: 0.2s;
 }
 .navigation-bar .user div:first-child a:hover {
   background: #F9F9F9;
 }
 .navigation-bar .user span {
   margin-left: 5px;
 }
 .navigation-bar .user i {
   margin-left: 10px;
   align-self: flex-start;
 }

 */

</style>