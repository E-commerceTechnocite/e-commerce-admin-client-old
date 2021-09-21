<template>
    <div v-if="files.length">
        <carousel class="carousel" :items-to-show="3">
            <slide v-for="(image, index) in files" :key="index">
                <i class="fas fa-times" @click.self="deleteImage(index)"></i>
                <div class="img-container">
                    <img class="carousel__item" @click="handleClickImage(image, index)" :src="image.blob" :alt="image.name" :title="image.name">
                    <!-- <input type="image" :src="image.blob" class="carousel__item" @click="handleClickImage(image, index)"> -->
                </div>
            </slide>
            <template #addons="{ slidesCount }">
            <navigation v-if="slidesCount > 3" />
            </template>
        </carousel>
        <!-- <ModalImage v-if="showImage" @close="closeModal"/> -->
        <!-- <button @click="handleClick">test</button> -->
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { computed, ref, watch } from '@vue/runtime-core'
import { useStore } from 'vuex'
import ModalImage from '../CrudProduct/ModalImage.vue'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Navigation,
    ModalImage
  },
  setup() {
    const store = useStore()
    const files = computed(() => store.getters['dashboard/GET_IMAGES'])
    const showImage = ref(false)
    const currentImage = ref(null)
    const deleteImage = (index) =>  store.dispatch('dashboard/PASS_REMOVE_CURRENT_IMAGE', index)
    const handleClickImage = (file, index) => {
        store.dispatch('dashboard/PASS_CURRENT_IMAGE', {file, index})
        showImage.value = true
    }
    watch(files, (newVal, oldVal) => {
        /* newVal = newVal.slice(-1)
        console.log(newVal[0].file) */
        store.dispatch('dashboard/UPLOAD_CURRENT_FILE', {file: newVal})
    })
    const closeModal = () => showImage.value = false

    return {
        files,
        showImage,
        currentImage,
        deleteImage,
        handleClickImage,
        closeModal
    }
  }
};
</script>

<style>
.carousel .carousel__slide {
    padding: 10px;
    display: flex;
    justify-content: center;
    justify-items: center;
    height: 225px;
    overflow: hidden;
    padding: 10px;
    position: relative;
}
.carousel .carousel__slide::before {
    content: '';
    width: 200px;
    height: 200px;
    background: white;
    position: absolute;
    left:8px;
    top: 10px;
    z-index: -1;
}

.carousel .carousel__item {
    max-width: 200px;
    max-height: 200px;
    background: white;
}

.carousel .carousel__slide i {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}
.carousel .carousel__next,
.carousel .carousel__prev
 {
    background: white;
    height: 40px;
    width: 40px;
    z-index: 1;
    border: 5px solid rgb(238, 238, 238)
}
</style>