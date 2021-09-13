<template>
    <div class="daily-information"> 
        <div class="wrap" v-for="info in data" :key="info">
            <div class="informationItem item1">
                <div class="informationContainer">
                    <h4>Sales</h4>
                    <p class="price">{{ info.sales }} €</p>
                </div>
                <div>
                    <i class="fas fa-coins"></i>
                </div>
            </div>
            <div class="informationItem">
                <div class="informationContainer">
                    <h4>Profit</h4>
                    <p class="price">{{ info.profit }} €</p>
                </div>
                <div>
                    <i class="fas fa-wallet"></i>
                </div>
            </div>
            <div class="informationItem">
                <div class="informationContainer">
                    <h4>Users</h4>
                    <p class="price">{{ info.users }}</p>
                </div>
                <div>
                    <i class="fas fa-users"></i>
                </div>
            </div>
            <div class="informationItem item4">
                <div class="informationContainer">
                    <h4>New Users</h4>
                    <p class="price">{{ info.newUsers }}</p>
                </div>
                <div>
                    <i class="fas fa-user-plus"></i>
                </div>
            </div>     
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default ({
    setup() {
        const store = useStore()
        store.dispatch('dailyInformations/FETCH_INFORMATIONS') 
        const data = computed(() => store.getters['dailyInformations/DAILY_INFORMATIONS'])
        console.log(data)
        return {
            data
        }  
    }
})
</script> 

<style>
.daily-information .wrap {
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
}

.daily-information .informationItem {
    background-color: #ffffff;  
    color: #67748E;
    border-radius: 4px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    font-size: 15px;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    margin: 0px 15px 0px 15px;
    padding: 15px;
    height: 75px;
    max-width: 375px;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box; 
}

.daily-information .item1 {
    margin: 0px 15px 0px 0px;
}

.daily-information .item4 {
    margin: 0px 0px 0px 15px;
}

.daily-information .informationContainer {
    margin-left: 15px;
}

.daily-information .fas {
    margin-right: 15px;
    font-size: 20px;
    color: #535353;
}
/*.title {

}

.price {

}*/ 
</style>



