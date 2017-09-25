<template>
  <div id="categories">
    <headTop :percentage="1" :bclass="true" class="head"></headTop>

    <section class="filter-extend">
      <div class="filer-scroll">
        <ul>
          <li class="filter-li" :class="{active:active==i}" v-for="(v,i) in databox" @click="select(i)">
            <span class="name">{{v.name}}</span>
          </li>
        </ul>
        <ul id="categoryChild">
          <li class="filter-li-c" :class="{active:childactive==i}"v-for="(v,i) in childdata" >
            <span class="name">{{v.name}}</span>
          </li>
        </ul>
      </div>
    </section>

    <foot :footbox="footbox" :active="1"></foot>
  </div>
</template>

<script>
  import foot from '@components/foot'
  import headTop from '@components/head'
  import {Indicator} from 'mint-ui'
  import {getShopNav} from '@server'
  export default {
    components: {
      foot,
      headTop
    },
    data () {
      return {
        footbox: [],
        now: -1,
        active: 0,
        childactive: 0,
        childdata: [],
        databox: [
          {
            name: 'aaa',
            children: [
              {
                name: 'bbb1'
              }
            ]
          },
          {
            name: 'aaa',
            children: [
              {
                name: 'bbb2'
              }
            ]
          },
          {
            name: 'aaa',
            children: [
              {
                name: 'bbb3'
              }
            ]
          },
          {
            name: 'aaa',
            children: [
              {
                name: 'bbb4'
              }
            ]
          },
          {
            name: 'aaa',
            children: [
              {
                name: 'bbb5'
              }
            ]
          },
          {
            name: 'aaa',
            children: [
              {
                name: 'bbb'
              }
            ]
          },
          {
            name: 'aaa',
            children: [
              {
                name: 'bbb'
              }
            ]
          },
          {
            name: 'aaa',
            children: [
              {
                name: 'bbb'
              }
            ]
          },
          {
            name: 'aaa',
            children: [
              {
                name: 'bbb'
              }
            ]
          },
          {
            name: 'aaa',
            children: [
              {
                name: 'bbb'
              }
            ]
          },
          {
            name: 'aaa',
            children: [
              {
                name: 'bbb'
              }
            ]
          },
          {
            name: 'aaa',
            children: [
              {
                name: 'bbb'
              }
            ]
          },
          {
            name: 'aaa',
            children: [
              {
                name: 'bbb'
              }
            ]
          },
          {
            name: 'aaa',
            children: [
              {
                name: 'bbb'
              }
            ]
          },
          {
            name: 'aaa',
            children: [
              {
                name: 'bbb'
              }
            ]
          },
          {
            name: 'aaa',
            children: [
              {
                name: 'bbb'
              }
            ]
          }
        ]
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
        this.childdata = this.databox[0].children
        Indicator.close()
      },
      select (i) {
        this.active = i
        this.childdata = this.databox[i].children
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  .head{
    box-shadow: 0px 2px 3px #f3f3f3;
  }
  .filter-extend{
    left: 0;
    right: 0;
    position: fixed;
    top:42px;
    bottom: 50px;
    max-height: 1000%;
    background-color: #fff;
    overflow: auto;
    box-shadow:1px 2px 2px #ccc;
    border-top: 1px solid #eee;
    .filer-scroll{
      height:100%;
      display:flex;
      .filter-li{
        font-size: 13px;
        height: 46px;
        text-align: center;
        line-height: 46px;
        position: relative;
        border-bottom: 1px solid #eee;
        &:last-child{
          border-bottom: 0;
        }
        &.active{
          border-left:2px solid #ca141d;
          background: #f6f6f6;
          color: #ca141d;
        }
      }
    }
    ul{
      list-style: none;
      -webkit-overflow-scrolling: touch;
      overflow:auto;
      &:first-child{
        box-shadow: 0 0 3px #eaeaea;
        border-right: 1px solid #eee;
        width: 88px;
        li{
          padding: 0 6px;
        }
      }
      &:last-child{
        flex:1;
      }
    }
  }
</style>
