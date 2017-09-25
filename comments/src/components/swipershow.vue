<template>
  <div class="swipershow">
    <div class="itembox">
      <swiper :options="swiperOption" class="swiperbox">
        <swiper-slide v-for="(value,index) in slide" :key="index" class="item-slide">
          <img :src="value.img" alt="" @click="tocarousel(value,index)">
        </swiper-slide>
      </swiper>
      <span>{{slideactive}}/{{slide.length}}</span>
    </div>
    <imgcarousel v-show="carouselshow" :banner="slide" @hideto="hide()" ref="carousels"></imgcarousel>
  </div>
</template>

<script>
  import imgcarousel from '@components/imgcarousel'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components: {
      swiper,
      swiperSlide,
      imgcarousel
    },
    data () {
      return {
        slideactive: 1,
        carouselshow: false,
        swiperOption: {
          observer: true,
          observeParents: true,
          autoplay: 2500,
          onSlideChangeEnd: swiper => {
            this.slideactive = swiper.realIndex + 1
          }
        }
      }
    },
    mouted () {
    },
    methods: {
      tocarousel (value, key) {
        this.carouselshow = true
        this.$refs.carousels.$refs.swipers.swiper.slideTo(key, 1000, false)
      },
      hide () {
        let str = event.target.tagName.toUpperCase()
        if (str === 'SECTION') {
          this.carouselshow = false
        }
      }
    },
    props: {
      slide: {
        default: []
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/mixin";
  .itembox{
    padding: 30px 0;
    position: relative;
    @include wh(100%,362px);
    .swiperbox{
      @include wh(100%,100%);
    }
    .item-slide{
      height: 100%;
      text-align: center;
      img{
        @include wh(auto,100%)
      }
    }
    span{
      position: absolute;
      bottom: 18px;
      right: 18px;
      color: #333;
      font-size: 12px;
      padding: 0 9px;
      min-width: 32px;
      height: 20px;
      line-height: 20px;
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0 1px 1px 1px rgba(0,0,0,.1);
      z-index:10
    }
  }
</style>
