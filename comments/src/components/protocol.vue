<template>
  <section class="xieyi">
    <div class="top">
      <a href="">登录</a>
      <a href="">反馈</a>
    </div>
    <div class="cen">
      <ul>
        <li v-for="(team,index) in menubox" class="item">
          <a href="javascript:;">
            <i></i><span>{{team.title}}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="bot">
      <a href="javascript:;">隐私政策</a>
      <a href="javascript:;">用户协议</a>
      <a href="javascript:;">苏ICP备17040376号-6</a><br>
      <a href="javascript:;">苏公网安备32011402010009号</a><span>Copyright © 2012-2017  VMALL.COM 版权所有</span>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        menubox: [
          {
            title: '客户端'
          },
          {
            title: '触屏版'
          },
          {
            title: '电脑版'
          }
        ]
      }
    },
    mouted () {
    },
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/css/mixin";
  .xieyi{
    padding: 0 22px;
    background: #fff;
    .top{
      font-size: 0;
      padding: 10px 0 ;
      text-align: center;
      border-bottom: 1px solid #eee;
      a{
        display: inline-block;
        @include wh(75px,32px);
        line-height: 32px;
        text-align: center;
        position: relative;
        font-size: 12px;
        color: #666;
        &:first-child:before{
          position: absolute;
          content: '|';
          right: 0;
          top: 0;
        }
      }
    }
    .cen{
      width: 100%;
      ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 0;
        border-bottom: 1px solid #eee;
      }
      .item{
        flex: 1;
        text-align: center;
        a{display: block;width: 100%;color: #000000}
        i{
          display: block;
          background: url(../assets/img/bg-bottom.png) no-repeat center top;
          background-size: auto 100%;
          @include wh(38px,38px);
          margin: 0 auto;
        }
        span {
          display: block;
          font-size: 12px;
        }
        &:first-child i{
          background-position: center left;
        }
        &:last-child i{
          background-position: center right;
        }
      }
    }
    .bot{
      text-align: center;
      padding: 8px 0 12px;
      a{
        padding: 0 10px;
        position: relative;
        color: #333;
        font-size: 12px;
        &:before{
          position: absolute;
          content: '|';
          right: 0;
          top: 0;
        }
        &:nth-of-type(3):before{
          position: absolute;
          content: '';
        }
        &:last-child:before{
          position: absolute;
          content: '';
        }
      }
      span{margin-left: 5px}
    }
  }
</style>
