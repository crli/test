<template>
  <header :style="{backgroundColor: 'rgba(255,255,255,' + percentage + ')'}" :class="bclass?'classfff':''">
    <div class="search">
      <i class="iconfont icon-chazhao"></i>
      <input type="text" placeholder="HUAWEI P10 荣耀9" readonly="readonly">
    </div>
    <div class="other">
      <i class="iconfont icon-xiaoxi"></i>
      <slot name="login"></slot>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props: {
      percentage: {
        default: 0
      },
      bclass: {
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/mixin";
  header{
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    right: 0;
    height: 42px;
    line-height: 42px;
    display: flex;
    background: transparent;
    &.classfff{
      .search{
        background: rgba(234,234,234,0.8);
      }
      .other{
        color: #333;
        span{
          font-weight: normal!important;
        }
      }
    }
    .search{
      flex: 1;
      height: 28px;
      margin: 7px 0 0 16px;
      background: rgba(255,255,255,.7);
      border-radius: 14px;
      display: flex;
      align-items: center;
      i{
        display: block;
        font-size: 16px;
        color: #333;
        margin: 0 10px;
      }
      input{
        @include wh(100%,100%);
        line-height: 28px;
        background: transparent;
        font-size: 14px;
        color: #eee;
      }
    }
    .other{
      max-width: 89px;
      width: auto;
      display: flex;
      align-items: center;
      color: #fff;
      i{
        font-size: 33px;
        padding: 0 5px;
      }
      span{
        font-size: 14px;
        font-weight: bold;
        margin-right: 7px;
      }
    }
  }
</style>
