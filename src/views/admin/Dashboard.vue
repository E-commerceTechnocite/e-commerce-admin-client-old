<template>
  <div v-if="isLoggedIn" class="navbar">
      <!--You are logged in-->
      <NavigationBar  />
      <SideBar />
  </div>
  <div v-else>
     <ProductInformation />
     <br>
     <ProductInformation />
     <br>
     <ProductInformation />
  </div>
</template>

<script>
import {computed} from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'
import SideBar from '@/components/SideBar.vue'
import ProductInformation from '@/components/ProductInformation.vue'

export default {
    /* setup() {
        const token = computed(() => store.getters['auth/AUTH_USER_TOKEN'])
        const sessionToken = sessionStorage(getItem('token'))
        const isLoggedIn = () => {
            token === sessionToken ? true : false
        }
        return {
            token,
            isLoggedIn
        }
    } */
    name: 'NavBar',
    components: {
        NavigationBar,
        SideBar,
        ProductInformation
    },
    setup() {
        //const components = NavigationBar
    }
}
</script>

<style>
   @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

*{
    list-style: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}

body{
    background: #f5f6fa;
}

.wrapper .sidebar{
    background: rgb(5, 68, 104);
    position: fixed;
    top: 0;
    left: 0;
    width: 225px;
    height: 100%;
    padding: 20px 0;
    transition: all 0.5s ease;
}
</style>