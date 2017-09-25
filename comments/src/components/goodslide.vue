<template>
  <section class="goodslide">
    <div class="goodstitle">
      <slot name="title"></slot>
    </div>
    <div class="itembox">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(value,index) in databox" :key="index" class="item-slide">
          <img :src="value.img" alt="">
          <span class="title ellipsis">{{value.cont1}}</span>
          <span class="msg">{{value.cont2}}</span>
          <span>¥{{value.money}}</span>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'goodslide',
    data () {
      return {
        swiperOption: {
          slidesPerView: 3,
          observer: true,
          observeParents: true
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    props: {
      databox: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/mixin";
  .goodslide{
    background: #fff;
    width: 375px;
  }
  .goodstitle{
    min-height: 0;
    width: 100%;
    padding: 0 16px;
    line-height: 36px;
    font-size: 13px;
    border-bottom: 1px solid #eee;
  }
  .itembox{
    @include wh(100%,178px);
    text-align: center;
    .item-slide{
      border-right: 1px solid #eee;
      @include wh(123.666px,174px);
      padding: 14px 0 10px;
      text-align: center;
      img{
        @include wh(75px,75px);
      }
      span{
        display: block;
        &.title{
          line-height: 32px;
          font-size: 13px;
        }
        &.msg{
          padding-top: 4px;
          color: #bbb;
          font-size: 13px;
        }
        &:last-child{
          line-height: 20px;
          color:#ca151e ;
        }
      }
    }

  }
</style>
