<template>
  <carousel class="carousel" :items-to-show="3">
    <slide v-for="img in images" :key="img">
        <!-- <img src="" alt=""> -->
        <div class="carousel__item"> 
            {{ img }}
        </div>
    </slide>

    <template #addons="{ slidesCount }">
      <navigation v-if="slidesCount > 3" />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
      const images = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
      return {
          images
      }
  }
};
</script>

<style>
.carousel .carousel__slide {
    padding: 0 8px;
}
.carousel .carousel__item {
    background: lightcoral;
    width: 100%;
    height: 170px;
}
.carousel .carousel__next,
.carousel .carousel__prev
 {
    background: white;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
}
</style>