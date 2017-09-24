<template>
  <div id="details">
    <swiper :options="swiperOption1" class="swiperbox">
      <swiper-slide v-for="(item, index) in imgUrls" :key="index" class="swiper-slide" >
        <img :src="item.img" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="content p10">
      <div class="name">ddddddddddddddddddddd</div>
      <div class="msg">ddddddeeeeeeeeeeeeeee</div>
      <div class="money">
        <b>￥<span>24</span></b>
        <b>￥<span>33</span></b>
      </div>
    </div>
    <div class="select p10">
      <div class="left">
        <span>已选：</span><span>选择颜色 型号 分类</span>
      </div>
      <div class="right"><i class="iconfont icon-yousanjiao"></i></div>
    </div>
    <div class="server">
      <div class="left">服务：</div>
      <div class="right">
        <div class="item">
          <i class="iconfont icon-select"></i>
          <span>甄选精品</span>
        </div>
        <div class="item">
          <i class="iconfont icon-select"></i>
          <span>甄选精qqqqqqqqqqqqqqqqqqq品</span>
        </div>
        <div class="item">
          <i class="iconfont icon-select"></i>
          <span>甄选精wwwwwwwwwwwwc品</span>
        </div>
      </div>
    </div>
    <div class="pinpai p10">
      <img :src="imgUrls[0].img" alt="" />
      <div class="cont">
        <div class="name">eddddddddddddd</div>
        <div class="msg ellipsis">wwwwwwwwwwwwwwwwwwwwwwwwww</div>
      </div>
    </div>
    <div class="comment p10">
      <div class="top">
        <span>评价晒单</span>
        <span @click="toComment">2666条评论<i class="iconfont icon-chevronrightcircle"></i></span>
      </div>
      <div class="commentbox">
        <div class="item">
          <div class="item-top">
            <div class="img">
              <img :src="imgUrls[0].img" alt="" />
              <span class="name">dddw</span>
            </div>
            <div class="time">1231121412412</div>
          </div>
          <div class="item-bot">
            <p>wwwwwwwwwwwwwwwwwwwwwwwwwwwww</p>
          </div>
        </div>
        <div class="item">
          <div class="item-top">
            <div class="img">
              <img :src="imgUrls[0].img" alt="" />
              <span class="name">dddw</span>
            </div>
            <div class="time">1231121412412</div>
          </div>
          <div class="item-bot">
            <p>wwwwwwwwwwwwwwwwwwwwwwwwwwwww</p>
          </div>
        </div>
        <div class="item">
          <div class="item-top">
            <div class="img">
              <img :src="imgUrls[0].img" alt="" />
              <span class="name">dddw</span>
            </div>
            <div class="time">1231121412412</div>
          </div>
          <div class="item-bot">
            <p>wwwwwwwwwwwwwwwwwwwwwwwwwwwww</p>
          </div>
        </div>
      </div>
    </div>
    <div class="otherbox">
      <div class="item" v-for="(value, index) in tag" :class="{active:active == index}" @click="otherSelect(index)">{{value.name}}</div>
    </div>
    <div class="html-box" v-html=""></div>
    <div class="zhanwei"></div>
    <div class="cartfoot">
      <div class="box">
       <div class="item"@click="tohome">
          <i class="iconfont icon-shouye"></i>
          <p>首页</p>
        </div>
        <div class="item"@click="tocollect">
          <i class="iconfont icon-xing"></i>
          <p>收藏</p>
        </div>
        <div class="item" @click="tocart">
          <i class="iconfont icon-gouwuche"></i>
          <p>购物车</p>
          <span v-if="buynum">{{buynum}}</span>
        </div>
      </div>
      <div class="otheradd" @click="addCart">加入购物车</div>
      <div class="otherbuy" @click="rightCart">立即购买</div>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import imga from '@assets/img/timg.jpg'
  export default {
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        swiperOption1: {
          autoplay: 3500,
          mousewheelControl: true,
          observeParents: true,
          paginationClickable: true,
          interval: 3000,
          spaceBetween: 0,
          perspective: 15,
          pagination: '.swiper-pagination'
        },
        imgUrls: [
          {
            img: imga
          },
          {
            img: 'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff'
          },
          {
            img: 'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
          }
        ],
        tag: [
          {
            name: '商品详情'
          },
          {
            name: '属性说明'
          }
        ],
        active: 0,
        buynum: 0
      }
    },
    mounted () {
    },
    // 相关操作事件
    methods: {
      otherSelect (index) {
        this.active = index
      },
      toComment () {
        this.$router.push('comment')
      },
      rightCart () {
        console.log('去结账')
      },
      addCart () {
        this.buynum ++
      },
      tocart () {
        console.log('去购物车')
      },
      tocollect () {
        console.log('去收藏')
      },
      tohome () {
        window.location.href = 'index.html'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  .swiperbox{
    width: 100%;
    height: 250px;
    img{
      width: 100%;
      height: 250px;
    }
  }
  .content{
    margin-top: 14px;
    text-align: center;
    border-bottom: 1px solid #eee;
    .name{
      line-height: 30px;
      color:#333;
      font-size: 16px
    }
    .msg{
      line-height: 26px;
      color:#666;
      font-size: 12px
    }
    .money{
      margin-bottom: 12px;

      b:first-child{
        color:#df0606;
        font-size: 25px;
        margin-right: 5px;
      }
      b:last-child{
        color:#999;
        font-size: 10px
      }
    }
  }
  .select{
    height:50px;
    line-height: 50px;
    display:flex;
    justify-content:space-between;
    border-bottom: 4px solid #eee;
    .left{
      margin-left: 10px;
      span{
        font-size: 13px;
        &:first-child{
          display:inline-block;
          width:50px;
          height:100%;
          color:#999
        }
        &:last-child{
          color:#333
        }
      }
    }
    .right{
      i{
        margin-right: 8px
      }
    }
  }
  .server{
    padding:5px 10px;
    border-bottom: 4px solid #eee;
    .left,.right{
      display:inline-block;
      vertical-align: top;
    }
    .left{
      margin-left: 10px;
      font-size: 13px;
      color:#999;
      width:46px;
    }
    .right{
      .item{
        line-height: 26px;
        font-size: 13px;
        color:#333;
        i{
          color:#df0606;
        }
      }
    }
  }
  .pinpai{
    @include wh(100%,74px)
    border-bottom: 4px solid #eee;
    display:flex;
    img{
      @include wh(50px,50px)
      margin: 12px
    }
    .cont{
      margin: 12px 0;
      text-align: left;
      .name{
        margin-top: 5px;
        line-height: 18px;
        font-size: 14px;
        color:#333;
      }
      .msg{
        line-height: 20px;
        font-size: 13px;
        color:#666
      }
    }
  }
  .comment{
    margin-bottom: 30px;
    .top{
      width:100%;
      line-height: 44px;
      display:flex;
      justify-content:space-between;
      background:#fff;
      border-bottom: 1px solid #eee;
      span:first-child{
        font-size:15px;color:#333;
        margin-left: 10px
      }
      span:last-child{
        font-size:13px;color:#999;
        margin-right: 8px;
        i{margin-left: 8px}
      }
    }
    .item-top{
      display:flex;
      justify-content:space-between;
      align-items:center;
      height:58px;
      img{
        @include wh(40px,40px);
        border-radius: 50%;
        margin: 0 10px;
        vertical-align: middle;
      }
      .name{
        color: #666;
        font-size: 13px
      }
      .time{
        font-size: 12px;
        color:#999;
        margin-right: 10px;
      }
    }
    .item-bot{
      margin:0 10px 5px 10px;
      border-bottom: 1px solid #eee;
      p{
        line-height: 22px;
        font-size: 13px;
        color:#333;
        word-break:break-word;
      }
    }
  }
  .p10{
    padding:0 10px
  }
  .otherbox{
    display:flex;
    .item{
      flex:1;
      font-size: 14px;
      border-bottom: 1px solid #eee;
      line-height: 40px;
      text-align: center;
      &.active{
        color:#f4504c;
        border-bottom: 1px solid #f4504c;
      }
    }
  }
  .cartfoot{
    position: fixed;
    bottom: 0;
    z-index: 0;
    background:#fff;
    display:flex;
    @include wh(100%,48px);
    border-top: 1px solid #eee;
    .box{
      display:flex;
      flex:1;
      .item{
        flex:1;
        text-align: center;
        position:relative;
        font-size: 0;
        height:48px;
        p{
          font-size: 10px;
          color:#666;
          line-height: 16px;
        }
        i{
          color:#666;
          font-size: 18px;
          line-height: 26px;
          margin-top: 4px;
          display:block
        }
        span{
          position:absolute;
          display:block;
          border-radius: 7.5px;
          @include wh(auto,15px);
          min-width: 15px;
          font-size: 10px;
          text-align: center;
          background:red;
          color:#fff;
          top:4px;
          right:2px;
          line-height: 15px;
        }
      }
    }
    .otherbuy,.otheradd{
      line-height: 48px;
      text-align: center;
      width:104px;
      font-size: 13px;
      color:#fff
    }
    .otherbuy{
      background:#cc363c
    }
    .otheradd{
      background:#dfb07e
    }
  }
  .zhanwei{
    height:48px;
  }
</style>
