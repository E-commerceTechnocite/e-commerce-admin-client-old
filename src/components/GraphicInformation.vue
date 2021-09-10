<template>
    <div class="graphic-information">
        <div class="wrap">
            <div class="graphicItem graph1"></div>
            <div class="graphicItem graph2"></div>     
        </div>
    </div>
</template>

<style>
.graphic-information .wrap {
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
}

.graphic-information .graphicItem {
    background-color: #ffffff;  
    color: #67748E;
    border-radius: 4px;
    box-shadow: 4px 4px 4px rgba(109, 151, 234, 0.25);
    /*max-width: 700px;*/
    height: 300px;
    /*flex-grow: 1;*/
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box; 
}

.graphic-information .graph1 {
    margin: 15px 15px 15px 0px;
}

.graphic-information .graph2 {
    margin: 15px 0px 15px 15px;
}
</style>