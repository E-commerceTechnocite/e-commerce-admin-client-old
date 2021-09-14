<template>
    <div v-if="files.length">
        <carousel class="carousel" :items-to-show="3">
            <slide v-for="(image, index) in files" :key="index">
                <i class="fas fa-times" @click="deleteImage(files, index)"></i>
                <div class="img-container">
                    <img class="carousel__item" @click="handleClickImage" :src="image.blob" :alt="image.name" :title="image.name">
                </div>
            </slide>
            <template #addons="{ slidesCount }">
            <navigation v-if="slidesCount > 3" />
            </template>
        </carousel>
    <ModalImage v-if="true"/>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { computed, ref } from '@vue/runtime-core'
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
      const deleteImage = (array, index) =>  {array.splice(index, 1)}
      const handleClickImage = () => {

      }

      return {
          files,
          showImage,
          deleteImage,
          handleClickImage
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
}

.carousel .carousel__item {
    max-width: 200px;
    max-height: 200px;
}

.carousel .carousel__slide i {
    position: absolute;
    top: 10px;
    right: 10px;
}
/* .carousel img {
}
.carousel .carousel__slide {
    padding: 0 8px;
    position: relative;
    height: 200px;
    overflow: hidden;
}
.carousel .carousel__item {
    position: absolute;
    background: lightcoral;
    width: 100%;
    max-width: 800px;
    height: auto;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
} */
.carousel .carousel__next,
.carousel .carousel__prev
 {
    background: white;
    height: 40px;
    width: 40px;
    z-index: 1;
    border: 5px solid rgb(238, 238, 238)
}
/* .carousel i {
    top: 10px;
    right: 10px;
    font-size: 20px;
    position: absolute;
    color: red;
} */
</style>