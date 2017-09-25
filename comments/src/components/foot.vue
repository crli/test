<template>

  <footer  class="footer">
    <div class="zhanwei"></div>
    <div class="box">
      <a href="javascript:;" class="item" v-for="(value,index) in footbox" :class="{factive:active===index}" @click="toPage(index)">
        <div class="bck" :style="{backgroundImage: 'url(' + value.thumb + ')'}"></div><span>{{value.title}}</span>
      </a>
      <!--<a :href="value.bind_url" class="item" v-for="value in footbox">-->
      <!--<img :src="value.thumb" alt=""><span>{{value.title}}</span>-->
      <!--</a>-->
    </div>

  </footer>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    mouted () {
    },
    methods: {
      toPage (index) {
        switch (index) {
          case 0:
            window.location.href = 'home.html'
            break
          case 1:
            window.location.href = 'categories.html'
            break
          case 2:
            window.location.href = 'car.html'
            break
          case 3:
            window.location.href = 'memberCenter.html'
            break
        }
      }
    },
    props: {
      footbox: {
        default: []
      },
      active: {
        type: Number
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/mixin";
  .footer{
    position: fixed;
    bottom: 0;
    left:0;
    right: 0;
    height: 50px;
    background: #fff;
    z-index: 10;
    border-top: 1px solid #eee;
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
