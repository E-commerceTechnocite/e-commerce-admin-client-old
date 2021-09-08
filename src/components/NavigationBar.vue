<template>
  <div class="navigation-bar">
    <div class="logo">
      <h1>LOGO</h1>
    </div>
      <div class="search-bar">
        <i class="fas fa-search"></i>
        <input type="text">
      </div>
      <div class="user-info">
        <div class="user">
          <span>Doe</span>
          <span>John</span>
          <i class="fas fa-sort-down"></i>
        </div>
        <div class="user-img">
          <img src="" alt="">
        </div>
      </div>
    
    
  </div>
</template>

<style>
  .navigation-bar {
    position: relative;
    background: rgb(201, 201, 201);
    width: 100vw;
    height: 50px;
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

 .navigation-bar .user-info {
   right: 60px;
   height: 100%;
 }
 .navigation-bar .user-img {
   background: lightcoral;
   width: 38px;
   height: 38px;
   border-radius: 50%;
   margin-left: 15px;
 }
 .navigation-bar .user span {
   margin-left: 5px;
 }

 .navigation-bar .user i {
   margin-left: 10px;
 }


</style>