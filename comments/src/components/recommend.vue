<template>
  <section class="recommend">
    <section class="section-item"v-for="value in itembox" v-if="itembox.length">
      <div class="section-item-title" >
        <div class="left">{{value.title}}</div>
        <a href="javascript:;" class="right">更多>></a>
      </div>
      <div class="section-item-imgbox clear">
        <div class="item1" v-for="(item, index) in value.imgs">
          <img :src="item.img" alt="">
          <span class="title ellipsis">{{item.cont1}}</span>
          <span class="msg">{{item.cont2}}</span>
          <span class="money">¥{{item.money}}</span>
        </div>
      </div>
      <goodslide :databox="value.databox">
      </goodslide>
    </section>
  </section>
</template>

<script>
  import goodslide from '@components/goodslide'
  export default {
    name: 'recommend',
    data () {
      return {
      }
    },
    components: {
      goodslide
    },
    props: {
      itembox: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/mixin";
  .section-item{
    background: #fff;
    width: 100%;
    margin-top: 6px;
    .section-item-title{
      @include wh(100%,36px);
      line-height: 36px;
      padding: 0 16px;
      display:flex;
      justify-content:space-between;
      .left{
        font-size: 13px;
      }
      .right{
        font-size: 13px;
        color: #333;
      }
    }
    .section-item-imgbox{
      .item1{
        @include wh(186px,182px);
        margin-right: 3px;
        float: left;
        text-align: center;
        &:nth-child(2n){
          margin-right: 0;
        }
        img{
          @include wh(186px,114px);
        }
        span{
          display: block;
        }
        .title{
          font-size: 14px;
        }
        .msg{
          color: #666;
          font-size: 13px;
        }
        .money{
          font-size: 13px;
          color: red;
        }
      }
    }
  }
</style>
