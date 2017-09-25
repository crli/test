<template>
  <div id="shopshow">
    <section class="nav">
      <a href="home.html" class="item"><i class="iconfont icon-fanhui"></i></a>
      <div class="item" v-for="(item, index) in navData" :class="{active:active==index}" @click="select(index,item.key)">{{item.title}}</div>
      <div class="item"><i class="iconfont icon-gengduo"></i></div>
    </section>

    <swipershow :slide="databox.slide"></swipershow>

    <div class="allbox">
      <div class="name">{{databox.name}}</div>
      <div class="money">¥<span>{{databox.money}}</span></div>
      <div class="msg1">{{databox.msg1}}</div>
      <div class="msg2">{{databox.msg2}}</div>
    </div>
  </div>
</template>

<script>
  import {Indicator} from 'mint-ui'
  import {shopshow} from '@server'
  import swipershow from '@components/swipershow'
  import e1 from '../../assets/img/e1.jpg'
  import e2 from '../../assets/img/e2.jpg'
  import e3 from '../../assets/img/e3.jpg'
  export default {
    components: {
      swipershow
    },
    data () {
      return {
        navData: [
          {
            title: '商品'
          },
          {
            title: '详情'
          },
          {
            title: '参数'
          },
          {
            title: '评价'
          }
        ],
        datas: [],
        active: 0,
        databox: {
          slide: [
            {img: e1},
            {img: e2},
            {img: e3}
          ],
          name: '荣耀9 全网通标配版 4GB+64GB（幻夜黑)',
          money: '2299',
          msg1: '【稀缺版本，现货速发，购机赠流量券，还可参与抽奖（荣耀手环3等您拿），免费享受价值128元天际通1GB全球流量】',
          msg2: '2000万变焦双摄，拍照就像用单反；3D沉浸式Hi-Fi音质，听歌就像听现场'
        }
      }
    },
    // 加载数据
    mounted () {
      this.init()
    },
    // 相关操作事件
    methods: {
      async init () {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        })
        let response = await shopshow(38587)
        if (response.data.Error === 0) {
          this.datas = response.data.data
        }
        Indicator.close()
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  .nav{
    display: flex;
    justify-content: space-around;
    @include wh(100%,50px);
    .item{
      flex: 1;
      text-align: center;
      font-size: 14px;
      height: 100%;
      line-height: 50px;
      i{
        color: #333;
      }
      &.active{
        border-bottom: 2px solid $ic;
        color: $ic;
      }
    }
  }
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
      box-shadow: 0 0.182em 0.55em 1px rgba(0,0,0,.1);
      z-index:10
    }
  }
  .allbox{
    .name{
      font-size: 16px;
    }
    .money span{
      font-size: 18px;
      color: $ic;
    }
  }
</style>
