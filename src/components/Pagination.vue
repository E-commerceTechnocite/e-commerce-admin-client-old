<template>
    <div class="pagination">
      <div class="container">
        <button class="iconButton" @click="onClickFirstPage()" v-if="currentPage!=1"><i class="fas fa-chevron-double-left"></i></button>
        <button class="iconButton" @click="onClickPreviousPage()" v-if="currentPage!=1"><i class="fas fa-chevron-left"></i></button>
        <div class="pagination-item" v-for="page in paginatedData" :key="page">  
          <button :class="{ active: isPageActive(page) }" @click="onClickPage(page)">{{ page }}</button>  
        </div> 
        <button class="iconButton" @click="onClickNextPage()" v-if="currentPage!=numberOfPages"><i class="fas fa-chevron-right"></i></button>
        <button class="iconButton" @click="onClickLastPage()" v-if="currentPage!=numberOfPages"><i class="fas fa-chevron-double-right"></i></button>
      </div>
    </div>
</template>

<script>
import { ref, computed } from '@vue/reactivity'

export default ({
    setup() {
        let currentPage = ref(1)
        let numberOfPages = 10
        const paginatedData = computed(() => {
          let range = []
          let startPage = currentPage.value - 2
          let endPage = currentPage.value + 2
          for (let i = startPage; i <= endPage; i++) { 
            if(i < 1) endPage++
            if(startPage > numberOfPages - 4) {
              startPage = numberOfPages - 4
              i = startPage
              endPage = numberOfPages 
            }  
            if(i >= 1 && i <= numberOfPages) range.push(i)
          }
          return range
        })
        let onClickPage = (page) => {
            currentPage.value = page  
        }
        let onClickNextPage = () => {
          if(currentPage.value < numberOfPages) currentPage.value++
        }
        let onClickPreviousPage = () => {
          if(currentPage.value > 1) currentPage.value--
        }
        let onClickFirstPage = () => {
          currentPage.value = 1
        }
        let onClickLastPage = () => {
          currentPage.value = numberOfPages
        }
        const isPageActive = (page) => {
          return currentPage.value === page
        }
        return {
          currentPage,
          numberOfPages,
          paginatedData,
          onClickPage,
          onClickNextPage,
          onClickPreviousPage,
          onClickFirstPage,
          onClickLastPage,
          isPageActive, 
        }
    },
})
</script>

<style>
.pagination .container {
    margin: 15px;
    display:flex;
    flex-direction: row;
    justify-content: center;
}
.pagination button {
    background-color: #ffffff;
    padding: 0px;
    border-radius: 4px;
    border: none ;
    margin:5px;
    height: 25px;
    width: 25px;
}
.pagination button:active {
    background:#6D97EA;
    color:#ffffff;
}
.pagination .iconButton:active > .fas {
    color:#ffffff;
}
.pagination .button:active {
    background: #6D97EA;
    color:#ffffff;
}
.pagination button.active {
    background: #6D97EA;
    color:#ffffff;
}
/*.pagination .iconButton {
    background-color: #ffffff;
    border-radius: 4px;
    border: 2px, solid black ;
    margin:5px;
    height: 25px;
    width: 25px;
}*/
/*.pagination .button:hover {
    background: #6D97EA;
    color:#ffffff
}*/
</style>
