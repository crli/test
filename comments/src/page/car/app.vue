<template>
  <div id="car">
    <div class="title">购物车</div>
    <div class="box">
      <div class="msg">
        <i class="iconfont icon-gouwuche"></i><span>购物车中还没有商品，赶紧选购吧！</span>
      </div>
      <div class="other">
        <a href="home.html">去逛逛</a>
      </div>
    </div>
    <foot :footbox="footbox" :active="2"></foot>
  </div>
</template>

<script>
  import foot from '@components/foot'
  import {Indicator} from 'mint-ui'
  import {getShopNav} from '@server'
  export default {
    components: {
      foot
    },
    data () {
      return {
        footbox: []
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
        let response = await getShopNav('bottom')
        if (response.data.Error === 0) {
          this.footbox = response.data.data.splice(0, 4)
        }
        Indicator.close()
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  #car{
    background-color: #eaeaea;
  }
  .title{
    line-height: 50px;
    padding-left: 16px;
    background: #fff;
    font-size: 13px;
  }
  .box{
    padding: 26px 16px;
    text-align: center;
    .msg{
      line-height: 34px;
      font-size: 13px;
      i{
        margin-right: 5px;
        font-size: 24px;
        vertical-align: middle;
      }
      span{
        vertical-align: middle;
      }
    }
    .other{
      padding-top: 10px;
      a{
        display: inline-block;
        padding: 0 14px;
        height: 26px;
        line-height: 26px;
        border-radius: 13px;
        text-align: center;
        min-width: 66px;
        border: 1px solid #ca151e;
        color: #ca151e;
      }
    }
  }
</style>
