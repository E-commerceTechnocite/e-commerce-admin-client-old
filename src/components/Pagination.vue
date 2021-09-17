<template>
    <div class="pagination">
      <div class="container">
        <div class="arrowButtons"> 
          <button :class="{ active: isFirstPage() }" @click="onClickFirstPage()" id="leftBtn" ><i class="fas fa-chevron-double-left"></i></button> 
          <button :class="{ active: isFirstPage() }" @click="onClickPreviousPage()" ><i class="fas fa-chevron-left"></i></button>
        </div>
        <div class="pagination-item" v-for="page in paginatedData" :key="page">  
          <button :class="{ active: isPageActive(page) }" @click="onClickPage(page)">{{ page }}</button>  
        </div> 
        <div class="arrowButtons">
          <button :class="{ active: isLastPage() }" @click="onClickNextPage()"><i class="fas fa-chevron-right"></i></button>
          <button :class="{ active: isLastPage() }" @click="onClickLastPage()"><i class="fas fa-chevron-double-right"></i></button>
        </div>
      </div>
    </div>
</template>

<script>
import { ref, computed } from '@vue/reactivity'
import { useStore } from 'vuex'

export default ({
    props: ['totalPages','currentPage'],
    setup(props) {
        const store = useStore()
        let currentPage = ref(props.currentPage)
        const totalPages = props.totalPages
        const maxButtons = 5

        const paginatedData = computed(() => {
          let range = []
          let startPagination = currentPage.value - parseInt(maxButtons/2) + ((maxButtons + 1) % 2)
          let endPagination = currentPage.value + parseInt(maxButtons/2)
          if(endPagination > totalPages) {
            startPagination = totalPages - (maxButtons - 1)
            endPagination = totalPages
          }
          if(startPagination < 1) {
            startPagination = 1
            if(totalPages > maxButtons) endPagination = maxButtons
            else endPagination = totalPages
          }
          for (let i = startPagination; i <= endPagination; i++) { 
            range.push(i)
          }
          return range
        })

        const onClickPage = (page) => {
          currentPage.value = page
          onPageChanged(page)  
        }
        const onClickNextPage = () => {
          if(currentPage.value < totalPages) currentPage.value++
          onPageChanged(currentPage.value)
        }
        const onClickPreviousPage = () => {
          if(currentPage.value > 1) currentPage.value--
          onPageChanged(currentPage.value)
        }
        const onClickFirstPage = () => {
          currentPage.value = 1
          onPageChanged(currentPage.value)
        }
        const onClickLastPage = () => {
          currentPage.value = totalPages
          onPageChanged(currentPage.value)
        }
        const isPageActive = (page) => {
          return currentPage.value === page
        }
        const onPageChanged = (page) => {
          store.dispatch('products/FETCH_PRODUCTS', page)
        }
        const isFirstPage = () => {
          return currentPage.value === 1
        }
        const isLastPage = () => {
          return currentPage.value === totalPages
        }
        return {
          currentPage,
          totalPages,
          paginatedData,
          onClickPage,
          onClickNextPage,
          onClickPreviousPage,
          onClickFirstPage,
          onClickLastPage,
          isPageActive, 
          isFirstPage,
          isLastPage
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
.pagination button:active > .fas {
    color:#ffffff;
}
.pagination-item button.active {
    background: #6D97EA;
    color:#ffffff;
}
.arrowButtons button.active {
    background-color: transparent;
    font-size:0;
    border: none ;
    margin:5px;
    height: 25px;
    width: 25px;
}
/*.pagination .button:active {
    background: #6D97EA;
    color:#ffffff;
}*/
/*.pagination .button:hover {
    background: #6D97EA;
    color:#ffffff
}*/
</style>
