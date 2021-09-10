<template>
    <div class="wrap" v-for="info in data" :key="info">
        <div class="informationItem">
            <div>
                <h4>Sales</h4>
                <p class="price">{{ info.sales }} €</p>
            </div>
            <div>
                <button class="informationIcon"><i class="fas fa-coins"></i></button>
            </div>
        </div>
        <div class="informationItem">
            <div>
                <h4>Profit</h4>
                <p class="price">{{ info.profit }} €</p>
            </div>
            <div>
                <button class="informationIcon"><i class="fas fa-wallet"></i></button>
            </div>
        </div>
        <div class="informationItem">
            <div>
                <h4>Users</h4>
                <p class="price">{{ info.users }}</p>
            </div>
            <div>
                <button class="informationIcon"><i class="fas fa-users"></i></button>
            </div>
        </div>
        <div class="informationItem">
            <div>
                <h4>New Users</h4>
                <p class="price">{{ info.newUsers }}</p>
            </div>
            <div>
                <button class="informationIcon"><i class="fas fa-user-plus"></i></button>
            </div>
        </div>     
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default ({
    /*props: ['numberOfListRows'],*/
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

.wrap {
    background-color: #E5E5E5;
    margin: 20px 0px 20px 0px;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
}

.informationItem {
    background-color: #ffffff;  
    color: #67748E;
    border-radius: 4px;
    box-shadow: 4px 4px 4px rgba(109, 151, 234, 0.25);
    font-size: 15px;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    padding: 15px;
    margin: 15px;
    max-width: 350px;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #E8E8E8;
    box-sizing: border-box; 
}

.informationIcon {
    border-radius: 4px;
    margin: 5px;
    padding: 4px 10px;
    background-color: #6D97EA;
    box-shadow: 0px 0px 5px #6D97EA;
    font-size: 15px;
    border: none;
}

/*.title {

}

.price {

}*/ 
</style>



