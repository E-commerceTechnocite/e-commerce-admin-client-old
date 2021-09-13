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
                </ul> 
            </div>
            <div>
                <span>ACCOUNT</span>
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
    width: 220px;
    height: 100vh;
    padding: 30px 20px 0 20px;
    position:fixed;
}
.sidebar .logo {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 30px;
}
.sidebar .logo h1{
    font-size: 20px;
    color: white;
}
.sidebar .search-bar {
    background: #292929;
    border-radius: 10px;
    padding: 10px 0;
    width: 100%;
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
}
.sidebar .search-bar input::placeholder {
    color: #828282;
    font-size: 15px;

}


.sidebar nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
}
.sidebar nav > div {
    margin-bottom: 20px;
}
.sidebar ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 150px;
}
.sidebar li {
    width: 140px;
    margin: 8px 0;
    padding: 5px 0;
    border-radius: 4px;
    transition: 0.2s;
}
.sidebar li a {
    display: flex;
    align-items: center;
}
.sidebar li span {
    position: relative;
    display: block;
    background: #FFFFFF;
    border-radius: 4px;
    /* padding: 10px; */
    width: 36px;
    height: 36px;
    margin-right: 15px;
    box-shadow: 4px 4px 4px rgba(109, 151, 234, 0.25);
    transition: 0.2s;
}
.sidebar ul span i {
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
}
.sidebar div > span {
    margin-left: -31px;
}
.sidebar nav > div:nth-child(2) ul {
    margin-top: 20px
}
.sidebar li:hover {
    background: #FFFFFF;
    padding: 5px 20px 5px 10px;
    box-shadow: 4px 4px 4px rgba(109, 151, 234, 0.25);
}
.sidebar li:hover span {
    box-shadow: none;
}
.sidebar .sidebar-active {
    background: #FFFFFF;
    padding: 5px 20px 5px 10px;
    box-shadow: 4px 4px 4px rgba(109, 151, 234, 0.25);  
}
 .sidebar .sidebar-active span {
    box-shadow: none;
 }
</style>