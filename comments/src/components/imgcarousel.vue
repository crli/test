<template>
  <section class="imgcarousel" @click="hidestart">
      <swiper :options="swiperOption" class="carouselbox" ref="swipers">
        <swiper-slide v-for="(slide, index) in banner" :key="index" class="carousel-item" >
          <img :src="slide.img" alt=""/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination" v-show="banner&&banner.length>1"></div>
      </swiper>
  </section>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'imgcarousel',
    data () {
      return {
        swiperOption: {
          spaceBetween: 30,
          perspective: 15,
          observer: true,
          observeParents: true,
          pagination: '.swiper-pagination',
          paginationClickable: true
        }
      }
    },
    components: {
      swiper, swiperSlide
    },
    props: {
      banner: Array
    },
    methods: {
      hidestart () {
        this.$emit('hideto')
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import '../assets/css/mixin';
  .imgcarousel{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 40;
    background-color: #000;
    display: flex;
    align-items: center;
    .carouselbox {
      width: 100%;
      height: 375px;
      .carousel-item{
        display: flex;
        align-items: center;
        img{
          max-height: 375px;
          max-width: 375px;
          margin: 0 auto;
        }
      }
    }
  }
</style>
