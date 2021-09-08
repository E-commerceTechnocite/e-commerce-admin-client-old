<template>
    <div class="sidebar">
        <nav>
            <div>
                <ul>
                    <li class="sidebar-active"><span><i class="fas fa-tachometer-alt "></i></span>Dashboard</li>
                    <li><span><i class="fas fa-folder-open"></i></span>Catalog</li>
                    <li><span><i class="fas fa-file-invoice-dollar"></i></span>Billing</li>
                    <li><span><i class="fas fa-user"></i></span>Customers</li>
                    <li><span><i class="fas fa-dolly"></i></span>Shipping</li>
                </ul> 
            </div>
            <div>
                <span>ACCOUNT</span>
                <ul>
                    <li><span><i class="fas fa-id-badge"></i></span>Profile</li>
                    <li><span><i class="fas fa-sign-out-alt"></i></span>Sign out</li>
                </ul> 
            </div>
        </nav>
    </div>
</template>

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
    display: flex;
    align-items: center;
    margin: 8px 0;
    padding: 5px 0;
    border-radius: 4px;
    transition: 0.2s;
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