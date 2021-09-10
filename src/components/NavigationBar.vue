<template>
  <div class="navigation-bar">
    <div class="logo">
      <router-link :to="{name: 'DashboardHome'}"><h1>LOGO</h1></router-link>
    </div>
      <div class="search-bar">
        <div>
          <i class="fas fa-search"></i>
          <input type="text" placeholder="search">
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
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const dropMenu = ref(null)
    const userDropMenu = ref(false)
    const logout = () => { store.dispatch('auth/AUTH_LOGOUT', true)}
    const handleClick = () => {
      userDropMenu.value = !userDropMenu.value
    }
    
    return {
      userDropMenu,
      dropMenu,
      handleClick,
      logout
    }
  },
}
</script>

<style>
  .navigation-bar {
    position: relative;
    background: #FFFFFF;
    width: 100vw;
    height: 85px;
    box-shadow: 0px 4px 4px rgba(109, 151, 234, 0.25)
  } 
  .navigation-bar .logo, .navigation-bar .search-bar, .navigation-bar .user-info {
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;

  }
 .navigation-bar .logo {
   left: 0;
   width: 250px;
   height: 100%;
 }
 .navigation-bar .search-bar {
   left: 250px;
   height: 100%;
 }
 .navigation-bar .search-bar > div {
   background: #FFFFFF;
   padding: 10px;
   border-radius: 4px;
   border: 1px solid #D6D6D6;
 }
 .navigation-bar .search-bar input {
   border: none;
   padding: 3px;
   margin-left: 5px;
 }
  .navigation-bar .search-bar input::placeholder {
    color: #BBBBBB;
  }
 .navigation-bar .search-bar i {
   color: #BBBBBB;
   font-size: 13px;
   margin-left: 10px;
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



</style>