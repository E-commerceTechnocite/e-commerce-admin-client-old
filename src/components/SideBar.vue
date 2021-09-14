<template>
    <div class="sidebar">
        <div class="logo">
            <router-link :to="{name: 'DashboardHome'}"><h1>LOGO</h1></router-link>
        </div>
        <div class="search-bar">
            <div>
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search...">
            </div>
        </div>
        <nav>
            <div>
                <ul>
                    <li :class="{ 'sidebar-active': isRouteActive({name: 'DashboardHome'}) }" ><router-link :to="{name: 'DashboardHome'}"><span><i class="fas fa-tachometer-alt "></i></span>Dashboard</router-link></li>
                    <li :class="{ 'sidebar-active': isRouteActive({name: 'Products'}) }"><router-link :to="{name: 'Products'}"><span><i class="fas fa-folder-open"></i></span>Products</router-link></li>
                    <li :class="{ 'sidebar-active': isRouteActive({name: 'Billing'}) }"><router-link :to="{name: 'Billing'}"><span><i class="fas fa-file-invoice-dollar"></i></span>Billing</router-link></li>
                    <li :class="{ 'sidebar-active': isRouteActive({name: 'Customers'}) }"><router-link :to="{name: 'Customers'}"><span><i class="fas fa-user"></i></span>Customers</router-link></li>
                    <li :class="{ 'sidebar-active': isRouteActive({name: 'Shipping'}) }"><router-link :to="{name: 'Shipping'}"><span><i class="fas fa-dolly"></i></span>Shipping</router-link></li>

                    <!-- <li><a href="#"><span><i class="fas fa-dolly"></i></span>Shipping</a></li>
                    <li><a href="#"><span><i class="fas fa-dolly"></i></span>Shipping</a></li>
                    <li><a href="#"><span><i class="fas fa-dolly"></i></span>Shipping</a></li>
                    <li><a href="#"><span><i class="fas fa-dolly"></i></span>Shipping</a></li>

                    <li><a href="#"><span><i class="fas fa-dolly"></i></span>Shipping</a></li>
                    <li><a href="#"><span><i class="fas fa-dolly"></i></span>Shipping</a></li>
                    <li><a href="#"><span><i class="fas fa-dolly"></i></span>Shipping</a></li>
                    <li><a href="#"><span><i class="fas fa-dolly"></i></span>Shipping</a></li> -->

                    


                </ul> 
            </div>
            <div>
                <ul>
                    <li :class="{ 'sidebar-active': false }"><router-link to=""><span><i class="fas fa-id-badge"></i></span>Profile</router-link></li>
                    <li @click="logout"><router-link to="#"><span><i class="fas fa-sign-out-alt"></i></span>Sign out</router-link></li>
                </ul> 
            </div>
        </nav>
    </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
    setup() {
        const router = useRouter()
        const route = useRoute()
        const store = useStore()
        const logout = () => { store.dispatch('auth/AUTH_LOGOUT', true)}
        const isRouteActive = (path) => { return router.resolve(path).fullPath === route.path }
        return { logout, isRouteActive }
    },
}
</script>

<style>
.sidebar {
    display: flex;
    justify-content: flex-start;
    background: #0A0A0A;
    width: 260px;
    height: 100vh;
    padding: 30px 0;
    position:fixed;
}
.sidebar .logo {
    display: flex;
    justify-content: flex-start;
    margin: 0 0 30px 20px;
}
.sidebar .logo h1{
    font-size: 20px;
    color: white;
}
.sidebar .search-bar {
    background: #292929;
    border-radius: 10px;
    padding: 10px 0;
    width: 220px;
    align-self: center;
}
.sidebar .search-bar div {
    height: 20px;
}
.sidebar .search-bar i {
    color: white;
    margin: 0 13px;
    font-size: 15px;
}
.sidebar .search-bar input{
    background: none;
    border: none;
    color: white;
}
.sidebar .search-bar input::placeholder {
    color: #828282;
    font-size: 15px;
}
.sidebar nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
    width: 242px;
    margin: 30px 0;
    overflow: hidden;
    margin-left: -4px;
}
.sidebar nav > div:first-child {
    margin-bottom: 20px;
    overflow-y: scroll;
    overflow-x: hidden;
    direction: rtl;
    height: 470px;
    width: 242px;
}
.sidebar nav > div:first-child::-webkit-scrollbar {
    background: none;
}
.sidebar nav > div:first-child::-webkit-scrollbar-track {
    background: none;
}
.sidebar nav > div:first-child::-webkit-scrollbar-thumb {
    background: #292929;
    border-radius: 50px;
    width: 5px;
    border: 3px solid transparent;
    background-clip: content-box;
}

.sidebar nav > div:first-child ul {
    direction: ltr;
}
.sidebar nav > div:first-child li {
    margin-left: 4px;
}
.sidebar ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 220px;
}
.sidebar li {
    width: 140px;
    padding: 5px 0 5px 7px;
    margin: 3px 0;
    transition: 0.2s;
    position: relative;
    border-radius:  7px 0 0 7px ;

}
.sidebar li::after {
    content:'';
    position:absolute;
    left: 100%;
    top: 0;
    background: none;
    height: 46px;
    width: 69px;
    transition: 0.2s;
    z-index: 3;
    border-radius: 0 7px 7px 0;
}
.sidebar li a {
    display: flex;
    align-items: center;
    color: white;
}
.sidebar li span {
    position: relative;
    display: block;
    width: 36px;
    height: 36px;
    transition: 0.2s;
}
.sidebar ul span i {
    color: white;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
}
.sidebar div > span {
    margin-left: -31px;
}
.sidebar nav > div:nth-child(2) span {
    color:white
}
.sidebar nav > div:nth-child(2) ul {
    margin-top: 20px;
    margin-left: 20px;
}
.sidebar li:hover {
    background: #292929;
}
.sidebar li:hover::after, .sidebar li:hover::before {
    background: #292929;
}
.sidebar .sidebar-active, .sidebar .sidebar-active::after {
    background: #292929;
}
</style>