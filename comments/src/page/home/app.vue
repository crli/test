<template>
  <div id="home">
    <headTop :percentage="percentage" :bclass="bclass">
      <span slot="login">登录</span>
    </headTop>

    <swiper auto dots-class="custom-bottom" dots-position="center" class="swiperbox">
      <swiper-item v-for="(item, index) in banner" :key="index">
        <img :src="item.thumb">
      </swiper-item>
    </swiper>

    <section class="category">
      <ul>
        <li v-for="(team,index) in menubox" class="item">
          <a href="javascript:;">
            <img :src="team.thumb" alt="" /><span>{{team.title}}</span>
          </a>
        </li>
      </ul>
    </section>

    <section class="goods clear">
      <div class="item" v-for="(value, index) in goods" :class="{ big: value.big, 'mr0': index===1||index===2||index===4||index===6 }" @click="toShow">
        <img :src="value.img" alt="">
      </div>
      <div class="item1" v-for="(value, index) in goods1" v-if="index<3"  @click="toShow">
        <img :src="value.img" alt="">
        <span class="title ellipsis">{{value.cont1}}</span>
        <span class="msg">{{value.cont2}}</span>
        <span>¥{{value.money}}</span>
      </div>
    </section>

    <goodslide :databox="databox">
      <span slot="title">超值精选</span>
    </goodslide>

    <section class="announcement">
      <span class="zhanwei">公告</span>
      <div class="annouce">
        <swiper auto  direction="vertical" :interval=2000 class="text-scroll" :show-dots="false">
          <swiper-item v-for="(value,index) in newsbox" :key="index"><p>{{value.content}}</p></swiper-item>
        </swiper>
      </div>
      <a href="javascript:;" class="zhanwei">更多>></a>
    </section>

    <section class="advertising">
      <a href="" v-for="value in advertising">
        <img :src="value.img" alt="">
      </a>
    </section>

    <recommend :itembox="itembox"></recommend>

    <protocol class="protocol-t"></protocol>

    <foot :footbox="footbox" :active="0"></foot>

    <div class="zhanwei"></div>
  </div>
</template>

<script>
  import headTop from '@components/head'
  import goodslide from '@components/goodslide'
  import recommend from '@components/recommend'
  import foot from '@components/foot'
  import protocol from '@components/protocol'
  import {Indicator} from 'mint-ui'
  import {Swiper, SwiperItem} from 'vux'
  import {getShopBanner, news, getShopNav} from '@server'
  import {showBack} from '@/config/mUtils'
  import img2 from '@assets/img/a1.png'
  import img3 from '@assets/img/a2.png'
  import img4 from '@assets/img/b1.png'
  import c1 from '@assets/img/c1.jpg'
  import d1 from '@assets/img/d1.jpg'
  export default {
    components: {
      headTop,
      Swiper,
      SwiperItem,
      goodslide,
      recommend,
      foot,
      protocol
    },
    data () {
      return {
        percentage: 0,
        bclass: false,
        itembox: [
          {
            title: '手机',
            imgs: [
              {
                img: d1,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: d1,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: d1,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: d1,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              }
            ],
            databox: [
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              }
            ]
          },
          {
            title: '电脑',
            imgs: [
              {
                img: d1,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: d1,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: d1,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: d1,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              }
            ],
            databox: [
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              }
            ]
          },
          {
            title: '配件',
            imgs: [
              {
                img: d1,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: d1,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: d1,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: d1,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              }
            ],
            databox: [
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              }
            ]
          },
          {
            title: '数码',
            imgs: [
              {
                img: d1,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: d1,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: d1,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: d1,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              }
            ],
            databox: [
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              },
              {
                img: img4,
                cont1: 'HUAWEI P10',
                cont2: '送187元配件礼包',
                money: '3488'
              }
            ]
          }
        ],
        banner: [
          {img: 'https://static.vux.li/demo/3.jpg'},
          {img: 'https://static.vux.li/demo/1.jpg'},
          {img: 'https://static.vux.li/demo/2.jpg'}
        ],
        menubox: [
        ],
        goods: [
          {
            img: img2,
            big: true
          },
          {img: img3},
          {img: img3},
          {img: img3},
          {img: img3},
          {img: img3},
          {img: img3}
        ],
        goods1: [
          {
            img: img4,
            cont1: 'HUAWEI P10',
            cont2: '送187元配件礼包',
            money: '3488'
          },
          {
            img: img4,
            cont1: 'HUAWEI P10',
            cont2: '送187元配件礼包',
            money: '3488'
          },
          {
            img: img4,
            cont1: 'HUAWEI P10',
            cont2: '送187元配件礼包',
            money: '3488'
          }
        ],
        databox: [
          {
            img: img4,
            cont1: 'HUAWEI P10',
            cont2: '送187元配件礼包',
            money: '3488'
          },
          {
            img: img4,
            cont1: 'HUAWEI P10',
            cont2: '送187元配件礼包',
            money: '3488'
          },
          {
            img: img4,
            cont1: 'HUAWEI P10',
            cont2: '送187元配件礼包',
            money: '3488'
          },
          {
            img: img4,
            cont1: 'HUAWEI P10',
            cont2: '送187元配件礼包',
            money: '3488'
          },
          {
            img: img4,
            cont1: 'HUAWEI P10',
            cont2: '送187元配件礼包',
            money: '3488'
          },
          {
            img: img4,
            cont1: 'HUAWEI P10',
            cont2: '送187元配件礼包',
            money: '3488'
          }
        ],
        newsbox: [],
        advertising: [
          {
            img: c1
          },
          {
            img: c1
          }
        ],
        footbox: []
      }
    },
    // 加载数据
    mounted () {
      this.init()
      showBack(status => {
        this.percentage = status.per
        this.bclass = status.flag
      })
    },
    // 相关操作事件
    methods: {
      async init () {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        })
        let response = await getShopNav('bottom')
        if (response.data.Error === 0) {
          this.footbox = response.data.data.splice(0, 4)
        }
        response = await getShopNav('main')
        if (response.data.Error === 0) {
          this.menubox = response.data.data.slice(5)
        }
        response = await getShopBanner()
        if (response.data.Error === 0) {
          this.banner = response.data.data
        }
        response = await news()
        if (response.data.Error === 0) {
          this.newsbox = response.data.record_info
        }
        Indicator.close()
      },
      toShow () {
        window.location.href = 'shopshow.html'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  #home{
    background: #eee;
  }
  .swiperbox{
    @include wh(100%,200px);
    .vux-swiper{
      height: 100% !important;
    }
    img{
      width: 100%;
    }
  }
  .category{
    @include wh(100%, 74px);
    padding: 0 5px;
    background: #fff;
    ul{
      @include wh(100%, 100%);
      display: flex;
      justify-content:space-between;
      align-items: center;
      li{
        flex: 1;
        text-align: center;
        a{display: block;width: 100%;color: #000000}
        img{
          @include wh(32px,32px);
        }
        span {
          display: block;
          font-size: 12px;
        }
      }
    }
  }
  .goods{
    margin: 6px 0;
    background: #fff;
    .item{
      @include wh(186px,126px);
      float: left;
      margin:0 3px 3px 0;
      &.mr0{
        margin-right:0;
      }
      img{
        @include wh(100%,100%)
      }
    }
    .item.big{
      @include wh(186px,255px);
      img{
        @include wh(100%,100%)
      }
    }
    .item1{
      @include wh(123.666px,174px);
      padding: 14px 0 10px;
      margin-right: 2px;
      float: left;
      text-align: center;
      background-color: #f6f6f6;
      &:last-child{
        margin-right: 0;
      }
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
  .announcement{
    display: flex;
    @include wh(100%,42px);
    background: #fff;
    margin-top: 6px;
    .annouce{
      flex: 1;
      height: 100%;
      .text-scroll{
        height: 42px;
      }
    }
    .zhanwei{
      @include wh(58px,100%);
      text-align: center;
      line-height: 42px;
      &:last-child{
        color: #333;
      }
      &:first-child{
        color: red;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
  .advertising{
    background: #eee;
    margin-top: 6px;
    a{
      margin-right: 3px;
      display: inline-block;
      background: #fff;
      position: relative;
      @include wh(186px,54px);
      &:last-child{
        margin-right: 0;
      }
      img{
        @include center;
        @include wh(144px,26px);
      }
    }
  }
  .zhanwei{
    height: 50px;
  }
  .protocol-t{
    margin-top: 6px;
  }
</style>
