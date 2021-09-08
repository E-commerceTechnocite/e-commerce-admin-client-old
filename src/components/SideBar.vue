<template>
    <div class="sidebar">
        <nav>
            <div>
                <ul>
                    <li class="sidebar-active"><router-link :to="{name: 'DashboardHome'}"><span><i class="fas fa-tachometer-alt "></i></span>Dashboard</router-link></li>
                    <li><router-link :to="{name: 'Products'}"><span><i class="fas fa-folder-open"></i></span>Products</router-link></li>
                    <li><router-link :to="{name: 'Billing'}"><span><i class="fas fa-file-invoice-dollar"></i></span>Billing</router-link></li>
                    <li><router-link :to="{name: 'Customers'}"><span><i class="fas fa-user"></i></span>Customers</router-link></li>
                    <li><router-link :to="{name: 'Shipping'}"><span><i class="fas fa-dolly"></i></span>Shipping</router-link></li>
                </ul> 
            </div>
            <div>
                <span>ACCOUNT</span>
                <ul>
                    <li><router-link to=""><span><i class="fas fa-id-badge"></i></span>Profile</router-link></li>
                    <li @click="logout"><router-link to="#"><span><i class="fas fa-sign-out-alt"></i></span>Sign out</router-link></li>
                </ul> 
            </div>
        </nav>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
    setup() {
        const router = useRouter()
        const logout = () => {
            sessionStorage.removeItem('token')
            router.push({name: 'LoginAdmin'})
        }
        
        return { logout }
    },
}
</script>

<style>
.sidebar {
    display: flex;
    justify-content: center;
    width: 250px;
    height: 100vh;
    margin-top: 30px;
}
.sidebar nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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