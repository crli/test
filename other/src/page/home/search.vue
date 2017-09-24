<template>
  <div class="wrap-content">

    <div class="search-wrap">
      <div class="i-zhanwei" @click="$router.push('/')"><i class="iconfont icon-fanhui"></i></div>
      <form class="search-form" action="searchResult" @submit.prevent="submit">
        <div class="input-box">
          <i class="iconfont icon-chazhao"></i><input type="search" name="search" placeholder="家装季优品好价" autocomplete="off"class="search-input" v-model="searchValue" @input="checkInput" >
        </div>
      </form>
      <div class="tosearch" @click="submit">搜索</div>
    </div>

    <section class="time" v-if="showHistory">
      <div class="tip">
        <div class="title">搜索记录</div>
        <div class="clear" @click="clearhistory">
          <i class="iconfont icon-shanchu"></i>
        </div>
      </div>

      <div class="time-box">
        <div class="item" v-for="value in searchHistory" @click="teamto(value)">
          <span class="ellipsis">{{value.name}}</span>
        </div>
      </div>
    </section>

    <section class="result" v-if="showResult">
      <div class="item" v-for="value in searchResult" @click="teamto(value)">
        <span class="ellipsis">{{value.name}}</span>
      </div>
    </section>

  </div>
</template>

<script>
  import {getStore, setStore} from '@/config/mUtils'
  let time = null
  export default {
    name: 'search',
    data () {
      return {
        searchValue: null,
        y: 0,
        searchHistory: [],
        showHistory: false,
        searchResult: [],
        showResult: false
      }
    },
    created () {
      this.y = document.body.scrollTop
      clearTimeout(time)
      time = setTimeout(() => {
        document.body.setAttribute('class', 'hid')
      }, 300)
    },
    mounted () {
      if (getStore('searchHistory')) {
        this.searchHistory = JSON.parse(getStore('searchHistory'))
        if (this.searchHistory.length) {
          this.showHistory = true
        } else {
          this.showHistory = false
        }
      }
    },
    destroyed () {
      clearTimeout(time)
      document.body.removeAttribute('class', 'hid')
      document.body.scrollTop = this.y
    },
    methods: {
      submit () {
        window.location.href = 'list.html'
      },
      checkInput () {
        if (this.searchValue) {
          this.showHistory = false
          this.showResult = true
          this.getlist()
        } else {
          this.showResult = false
          this.showHistory = true
        }
      },
      getlist () {
        this.searchResult = [
          {
            name: '哈哈哈哈'
          },
          {
            name: 'wewdwd'
          },
          {
            name: '哈哈哈哈'
          },
          {
            name: 'wewdwd'
          },
          {
            name: '哈哈哈哈'
          },
          {
            name: 'wewdwd'
          },
          {
            name: '哈哈哈哈'
          },
          {
            name: 'wewdwd'
          },
          {
            name: '哈哈哈哈'
          },
          {
            name: 'wewdwd'
          },
          {
            name: '哈哈哈哈'
          },
          {
            name: 'wewdwd'
          },
          {
            name: '哈哈哈哈'
          },
          {
            name: 'wewdwd'
          },
          {
            name: '哈哈哈哈'
          },
          {
            name: 'wewdwd'
          },
          {
            name: '哈哈哈哈'
          },
          {
            name: 'wewdwd'
          },
          {
            name: '哈哈哈哈'
          },
          {
            name: 'wewdwd'
          }
        ]
      },
      clearhistory () {
        setStore('searchHistory', [])
        this.searchHistory = []
        this.showHistory = false
      },

      teamto (value) {
        let arrList = JSON.parse(getStore('searchHistory'))
        if (arrList && arrList.length) {
          // 检测是否重复
          let checkrepeat = false
          this.searchHistory.forEach(item => {
            if (item.name === value.name) {
              checkrepeat = true
            }
          })
          if (!checkrepeat) {
            this.searchHistory.push(value)
          }
        } else {
          this.searchHistory.push(value)
        }
        setStore('searchHistory', this.searchHistory)
        window.location.href = 'list.html'
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "../../assets/css/mixin";
  .wrap-content{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: #fff;
  }
  .i-zhanwei{
    width: 35px;
    text-align: center;
    line-height: 40px;
    color:#fff
  }
  .search-wrap{
    display:flex;
    background:#eee;
    width:100%;
    height:43px;
    .tosearch{
      @include wh(60px,43px);
      line-height: 43px;
      font-size: 16px;
      text-align: center;
      padding:0 5px;
      color:#666
    }
  }

  .search-form{
    padding:6px 0;
    flex:1;
    .input-box{
      @include wh(100%,28px);
      position:relative;
      display: flex;
      border-radius: 14px;
      background:#fff;
      .search-input{
        font-size: 13px;
        flex:1;
        border-radius: 14px;
      }
      i{
        display: block;
        width: 30px;
        text-align: center;
        line-height: 28px;
        color:#666
      }
    }
  }
  .time .time-box,
  .result{
    background:#fff;
    -webkit-overflow-scrolling: touch;
    height: 100%;
    overflow-y: auto;
    .item{
      line-height: 44px;
      @include wh(100%,44px);
      border-bottom: 1px solid #eee;
      span{
        font-size: 13px;
        width:70%;
        color:#666;
        display:block
      }
    }
  }
  .result{
    padding:0 10px;
  }
  .time{
    background:#fff;
    padding:0 10px;
    .tip{
      display:flex;
      justify-content:space-between;
      @include wh(100%,44px);
      line-height: 44px;
      border-bottom: 1px solid #eee;
      .title{
        color:#333;
        font-size: 13px;
      }
      .i{
        color:#999;
        font-size: 22px;
      }
    }
  }
</style>

