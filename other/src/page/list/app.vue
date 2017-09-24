<template>
  <div id="list">

    <template v-if="flag">
      <div class="tag-box">
        <swiper :options="swiperOption" class="swiper-wrap">
          <swiper-slide v-for="(item, index) in datas" :key="index" class="swiper-slide" :class="{currentTab:currentTab == index}" >
            <span @click="citemto(index)">{{item.name}}</span>
          </swiper-slide>
        </swiper>
      </div>
      <div class="cbox">
        <div class="cbox-wrap">
          <div class="item" v-for="(item, index) in data2" @click="toDetails">
            <div class="imgbox">
              <img :src="item.img"/>
              <p class="ellipsis">请期请期请期</p>
            </div>
            <div class="c">
              <div class="name">{{item.name}}</div>
              <div class="money">￥<span>{{item.money}}</span></div>
            </div>
          </div>
        </div>
        <div class="more"><span>更多内容，敬请期待</span></div>
      </div>
    </template>

    <template v-else>
      <section class="list-wrap">
        <div class="top">
          <span>手机(111)个结果</span>
          <i class="iconfont icon-saoma"></i>
        </div>
        <div class="list-box">
          <div class="item" v-for="(item, index) in data2" @click="toDetails">
            <img :src="item.img"/>
            <div class="name ellipsis">{{item.name}}</div>
            <div class="money">￥<span>{{item.money}}</span></div>
          </div>
        </div>
        <div class="more"><span>更多内容，敬请期待</span></div>
      </section>
    </template>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data () {
      return {
        flag: true,
        currentTab: 0,
        swiperOption: {
          slidesPerView: 6,
          paginationClickable: true,
          spaceBetween: 0
        },
        datas: [
          {
            name: 'dddd'
          },
          {
            name: '1231'
          },
          {
            name: 'qweq'
          },
          {
            name: 'dwqd'
          },
          {
            name: '12'
          },
          {
            name: 'dwd'
          },
          {
            name: 'deddd'
          },
          {
            name: 'd1dd'
          },
          {
            name: 'd1ddd'
          }
        ],
        data2: [
          {
            img: 'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
            name: 'ww',
            money: '22',
            amoney: '33'
          },
          {
            img: 'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
            name: 'ww',
            money: '22',
            amoney: '33'
          },
          {
            img: 'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff',
            name: 'ww',
            money: '22',
            amoney: '33'
          },
          {
            img: 'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff',
            name: 'ww',
            money: '22',
            amoney: '33'
          },
          {
            img: 'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff',
            name: 'ww',
            money: '22',
            amoney: '33'
          }
        ]
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    // 加载数据
    mounted () {
    },
    methods: {
      citemto (index) {
        this.currentTab = index
      },
      toDetails () {
        window.location.href = 'details.html'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  .tag-box{
    background: #fff;
    position: relative;
    width:100%;
    padding: 0 10px;
    .swiper-slide{
      height: 40px;
      text-align: center;
      padding:0 13px;
      &.currentTab{
        border-bottom: 3px solid $ic;
      }
    }
    span{
      display: block;
      color:#666;
      font-size: 13px;
      line-height: 40px;
      height: 40px;
      box-sizing: border-box;

    }
  }
  .cbox{
    font-size: 0;
    border-top: 8px solid #fff;
  }
  .cbox-wrap{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background: #fff;
    border:1px solid #ededed;
    border-bottom: none;
    .item{
      width: 50%;
      text-align: center;
      border: 1px solid #eee;
      box-sizing: border-box;
      background: #fff;
      font-size: 0;
    }
    .imgbox{
      height: 168px;
      width: 100%;
      background: #fff;
      position: relative;
      display:flex;
      flex-direction: column;
      align-items:center;
      justify-content:space-between;
      img{

        @include wh(100px,100px)
        margin-top: 18px
      }
      p{
        color:#9d7f66;
        font-size: 13px;
        text-align: center;
        margin-bottom: 12px
      }
    }
    .c{
      background: #f8f8f8;
      padding: 4px 0 ;
      .name{
        line-height:20px;
        font-size: 11px;
      }
      .money{
        color: red;
        font-size: 13px;
        line-height: 23px;
        span{
          font-size: 16px;
        }
      }
    }
  }
  .list-wrap{
    .top{
      width:100%;
      line-height: 40px;
      padding:0 10px;
      display:flex;
      justify-content:space-between;
      font-size:14px;
      background:#fff
    }
    .list-box{
      border-top: 1px solid #eee;
      display:flex;
      flex-wrap:wrap;
      .item{
        height: 168px;
        width: 50%;
        border:1px solid #eee;
        background:#fff;
        box-sizing:border-box;
        text-align: center;
        &:nth-of-type(2n+1){
          border-top: none;
          border-left: none
        }
        &:nth-of-type(2n){
          border-top: none;
          border-left: none;
          border-right:none;
        }
        img{
          @include wh(100px,100px)
          margin-top: 18px
        }
        .name{
          line-height:20px;
          font-size: 15px;
        }
        .money{
          color: red;
          font-size: 11px;
          line-height: 23px;
          span{
            font-size: 13px;
          }
        }

      }
    }
  }
  .more{
    width: 100%;
    text-align: center;
    font-size: 15px;
    line-height: 50px;
    color: #666;
    background: #fff;
    background:#fff;
    span{
      position: relative;
      &:before,
      &:after{
        position: absolute;
        height: 1px;
        width: 19px;
        background: #d2d2d2;
        content:"";
        top:10px
      }
      &:before{
        left: -30px;
      }
      &:after{
        right: -30px;
      }
    }
  }
</style>
