<template>
<div id="">
  <div class="top">
    <div class="top-item">
      <i class="iconfont icon-saoma"></i>
    </div>
    <div class="search" @click="toSearch">
      <i class="iconfont icon-chazhao"></i>
      <span>搜索你想要的商品</span>
    </div>
    <div class="top-item">
      <span v-if="true">1</span>
      <i class="iconfont icon-xiaoxi"></i>
    </div>
  </div>

  <div class="tag-box tag-box-t">
    <swiper :options="swiperOption" class="swiper-wrap">
      <swiper-slide v-for="(item, index) in datas" :key="index" class="swiper-slide" :class="{current:current == index}" >
        <span @click="itemto(index)">{{item.name}}</span>
      </swiper-slide>
    </swiper>
  </div>
  <div class="zhanwei" v-show="zhanshow"></div>
  <loadmore  class="wrap"
             :top-method="loadTop"
             ref="loadmore"
             :topDistance="100"
             @top-status-change="handleTopChange">
    <div class="wrap-show" v-if="show">
      <swiper :options="swiperOption1" class="swiperbox">
        <swiper-slide v-for="(item, index) in imgUrls" :key="index" class="swiper-slide" >
          <img :src="item.img" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <div class="title"><span>爆款推荐</span></div>

      <div class="box">
        <div v-for="(item, index) in data1" class="item" >
          <img :src="item.img"/>
          <div class="cont">
            <div class="name ellipsis">{{item.name}}</div>
            <div class="msg">{{item.name}}</div>
            <div class="money"><span class="n">￥{{item.money}}</span><span class="after">￥{{item.amoney}}</span></div>
          </div>
          <div class="other">
            <i class="iconfont icon-you"></i>
          </div>
        </div>
      </div>

      <div class="tag-box tag-box-o">
        <swiper :options="swiperOption" class="swiper-wrap">
          <swiper-slide v-for="(item, index) in datas" :key="index" class="swiper-slide" :class="{currentTab:currentTab == index}" >
            <span @click="citemto(index)">{{item.name}}</span>
          </swiper-slide>
        </swiper>
      </div>

      <div class="cbox">
        <img src="../../assets/img/1.jpg"/>
        <div class="cbox-wrap">
          <div class="item" v-for="(item, index) in data1" @click="toDetails">
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
      </div>
    </div>
    <div class="wrap-hide" v-else>
      <div class="cbox">
        <img src="../../assets/img/1.jpg"/>
        <div class="title">小米西里尔</div>
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
      </div>
    </div>
    <div slot="top" class="mint-loadmore-top">
      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">
        <i v-if="topStatus === 'drop'" class="iconfont icon-jiazai"></i>
        <i v-else>↓</i>
      </span>
      <span v-show="topStatus === 'loading'">Loading...</span>
    </div>
  </loadmore>
  <div class="zhanwei"></div>
  <footer  class="footer">

    <div class="box">
      <a href="javascript:;" class="item" v-for="(value,index) in footbox" :class="{factive:active===index}" @click="toPage(index)">
        <div class="bck" :style="{backgroundImage: 'url(' + value.thumb + ')'}"></div><span>{{value.title}}</span>
      </a>
    </div>

  </footer>
  <transition name="router-slid">
    <router-view></router-view>
  </transition>
</div>
</template>

<script>
  import { Loadmore } from 'mint-ui'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components: {
      swiper,
      swiperSlide,
      Loadmore
    },
    data () {
      return {
        topStatus: '',
        show: true,
        zhanshow: false,
        swiperOption: {
          slidesPerView: 6,
          paginationClickable: true,
          spaceBetween: 0
        },
        swiperOption1: {
          autoplay: 3000,
          mousewheelControl: true,
          observeParents: true,
          paginationClickable: true,
          interval: 3000,
          spaceBetween: 0,
          perspective: 15,
          pagination: '.swiper-pagination'
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
        imgUrls: [
          {
            img: 'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff'
          },
          {
            img: 'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff'
          },
          {
            img: 'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
          }
        ],
        data1: [
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
        ],
        currentTab: 0,
        current: 0,
        active: 0,
        footbox: [
          {
            thumb: '',
            title: ''
          },
          {
            thumb: '',
            title: ''
          },
          {
            thumb: '',
            title: ''
          },
          {
            thumb: '',
            title: ''
          }
        ]
      }
    },
    // 加载数据
    mounted () {
//      Indicator.open({
//        text: '加载中...',
//        spinnerType: 'fading-circle'
//      })
//      setTimeout(function () {
//        Indicator.close()
//      }, 3000)
    },
    // 相关操作事件
    methods: {
      itemto (index) {
        this.current = index
        if (index === 0) {
          this.show = true
        } else {
          this.show = false
        }
      },
      citemto (index) {
        this.currentTab = index
      },
      loadTop () {
        let _this = this
        this.sssshow = true
        setTimeout(function () {
          _this.sssshow = false
          _this.$refs.loadmore.onTopLoaded()
        }, 3000)
      },
      handleTopChange (status) {
        this.topStatus = status
      },
      toSearch () {
        this.$router.push('/search')
      },
      toDetails () {
        window.location.href = 'details.html'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  .top{
    position: fixed;
    left:0;
    right: 0;
    top:0;
    display: flex;
    align-items: center;
    background: transparent;
    height: 50px;
    z-index: 2;
    background: #fff;
    .top-item{
      width: 48px;
      text-align: center;
      position: relative;
      height: 30px;
      line-height: 30px;
      span{
        position: absolute;
        right: 5px;
        top:0;
        font-size: 10px;
        color: #fff;
        min-width: 16px;
        text-align: center;
        border-radius: 8px;
        background: red;
        z-index: 2;
        line-height: 16px;
      }
      i{
        font-size: 24px;
        color:#999
      }
    }
  }
  .top .search{
    flex: 1;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: #666;
    position: relative;
    text-align: center;
    border-radius: 6px;
    border:1px solid #eee;
    box-sizing: content-box;
    span{
      margin-left: 5px;
      font-size: 14px;
    }
  }
  .tag-box{
    background: #fff;
    position: relative;
    width:100%;
    padding: 0 10px;
    &.tag-box-t{
      position: fixed;
      left:0;
      right: 0;
      top:50px;
      z-index: 2;
    }
    &.tag-box-o{
      /*margin-bottom: 8px;*/
      border-bottom: 8px solid #fff;
    }
    .swiper-slide{
      height: 40px;
      text-align: center;
      padding:0 13px;
      &.currentTab{
        border-bottom: 3px solid $ic;
      }
      &.current{
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
  .wrap{
    padding-top: 90px;
    background: #eee;
  }
  .swiperbox{
    width: 100%;
    height: 168px;
    img{
      width: 100%;
      height: 168px;
    }
  }
  .title{
    width: 100%;
    text-align: center;
    font-size: 15px;
    line-height: 50px;
    color: #444;
    border-bottom: 1px solid #eee;
    background: #fff;
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
  .box{
    padding: 0 10px;
    width: 100%;
    border-bottom: 8px solid #ededed;
    background: #fff;
    .item{
      display: flex;
      align-items: center;
      box-sizing: border-box;
      img{
        @include wh(90px,90px);
        margin: 0 40px;
      }
      .cont{
        height: 90px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .name{
          font-size: 13px;
        }
        .msg{
          font-size: 10px;
          color: #222;
        }
        .n{
          font-size: 13px;
          color: red;
        }
        .after{
          font-size: 11px;
          color: #777;
        }
      }
      .other{
        width: 68px;
        height: 168px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .cbox{
    font-size: 0;
    img{
      height: 156px;
      width: 100%;
    }
  }
  .cbox-wrap{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background: #fff;
    border:1px solid #ededed;
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
  .zhanwei{
    height: 50px;
  }
  .footer{
    position: fixed;
    bottom: 0;
    left:0;
    right: 0;
    height: 50px;
    background: #fff;
    z-index: 10;
    .box{
      display: flex;
      height: 50px;
    }
    a.item{
      flex: 1;
      display: block;
      height: 50px;
      text-align: center;
      color: #333;
      .bck{
        height: 26px;
        background-position: center -26px;
        background-repeat: no-repeat;
        background-size: 26px auto;
        margin-top: 4px;
      }
      &.factive{
        color: #c30d23;
        .bck{
          height: 26px;
          background-position: center 0px;
        }
      }
    }
    .bck{
      height: 26px;
      background-position: center -26px;
      background-repeat: no-repeat;
      background-size: 26px auto;
      margin-top: 4px;
    }

  }
</style>
