<template>
    <div class="media-library">
        <div class="media-fields">
            <div class="search">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search...">
            </div>
            <div class="media-buttons">
                <button class="action">ADD</button>
                <button class="action">SELECT</button>
            </div>
        </div>
        <div class="library-media-images">
            <div class="media-images">
                <div class="image" v-for="n in 45" :key="n">
                    <img src="../../assets/logo.png" :alt="n">
                </div>
            </div>
            <div class="media-pagination">
                <div v-if="true">
                    <button><i class="fas fa-angle-double-left"></i></button>
                    <button><i class="fas fa-angle-left"></i></button>
                </div>
                <div v-for="n in 3" :key="n">
                    <button :class="{active: n===1}">{{n}}</button>
                </div>
                <div v-if="true">
                    <button><i class="fas fa-angle-right"></i></button>
                    <button><i class="fas fa-angle-double-right"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const file = ref()
        return {file}
    }
}
</script>

<style>
.media-library {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
}
.media-library .media-fields {
    background: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #D4D4D4;
    border-radius: 5px 5px 0 0;
} 
.media-library .media-fields .search {
    background: #FFF;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #D4D4D4;
}
.media-library .media-fields [type=text]{
    border: none;
    margin-left: 10px;
    font-size: 15px;
}
.media-library .media-fields i {
    font-size: 15px;
    margin-left: 10px;
}
.media-library .media-fields button {
    margin-left: 10px;
}
.media-library .library-media-images {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}
.media-library .media-images {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
}
.media-library .image {
    height: 60px;
    width: 60px;
    overflow:hidden;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eee;
    transition: 0.1s;
}
.media-library .image:hover {
    box-shadow: 0px 0px 4px #707070;
}
.media-library .media-images img {
    max-width: 80px;
}
.media-library .media-pagination {
    flex-basis: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.media-library .media-pagination button {
    width: 28px;
    height: 28px;
    margin: 2px;
    background: white;
    border: none;
    border-radius: 4px;
    transition: 0.2s;
}
.media-library .media-pagination button:hover {
    box-shadow: 0px 0px 4px #4262D6;
}
.media-library .media-pagination button.active {
    box-shadow: 0px 0px 4px #4262D6;
    background: #4262D6;
    color: white
}
</style>