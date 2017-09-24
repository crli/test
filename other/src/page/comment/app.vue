<template>
  <div class="comment">
    <div class="top">
      <div class="item" v-for="(value, index) in headbox" @click="tagto(value.id, index)" :class="{active:active == index}">{{value.name}}</div>
    </div>
    <div class="box">
      <div v-if="true">
        <div class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
          <div class="item">
            <div class="item-top">
              <div class="img">
                <img :src="imgUrls[0].img" alt="" />
                <span class="name">dddw</span>
              </div>
              <div class="score"><i class="iconfont icon-xin" v-for="value in xing" :class="{active:value == 1}"></i></div>
            </div>
            <div class="item-cont">
              <p>wwwwwwwwwwwwwwwwwwwwwwwwwwwww</p>
            </div>
            <div class="time">
              2222222222222222222
            </div>
          </div>
          <div class="item">
            <div class="item-top">
              <div class="img">
                <img :src="imgUrls[0].img" alt="" />
                <span class="name">dddw</span>
              </div>
              <div class="score"><i class="iconfont icon-xin" v-for="value in xing" :class="{active:value == 1}"></i></div>
            </div>
            <div class="item-cont">
              <p>wwwwwwwwwwwwwwwwwwwwwwwwwwwww</p>
            </div>
            <div class="time">
              2222222222222222222
            </div>
          </div>
          <div class="item">
            <div class="item-top">
              <div class="img">
                <img :src="imgUrls[0].img" alt="" />
                <span class="name">dddw</span>
              </div>
              <div class="score"><i class="iconfont icon-xin" v-for="value in xing" :class="{active:value == 1}"></i></div>
            </div>
            <div class="item-cont">
              <p>wwwwwwwwwwwwwwwwwwwwwwwwwwwww</p>
            </div>
            <div class="time">
              2222222222222222222
            </div>
          </div>
          <div class="item">
            <div class="item-top">
              <div class="img">
                <img :src="imgUrls[0].img" alt="" />
                <span class="name">dddw</span>
              </div>
              <div class="score"><i class="iconfont icon-xin" v-for="value in xing" :class="{active:value == 1}"></i></div>
            </div>
            <div class="item-cont">
              <p>wwwwwwwwwwwwwwwwwwwwwwwwwwwww</p>
            </div>
            <div class="time">
              2222222222222222222
            </div>
          </div>
          <div class="item">
            <div class="item-top">
              <div class="img">
                <img :src="imgUrls[0].img" alt="" />
                <span class="name">dddw</span>
              </div>
              <div class="score"><i class="iconfont icon-xin" v-for="value in xing" :class="{active:value == 1}"></i></div>
            </div>
            <div class="item-cont">
              <p>wwwwwwwwwwwwwwwwwwwwwwwwwwwww</p>
            </div>
            <div class="time">
              2222222222222222222
            </div>
          </div>
          <div class="item">
            <div class="item-top">
              <div class="img">
                <img :src="imgUrls[0].img" alt="" />
                <span class="name">dddw</span>
              </div>
              <div class="score"><i class="iconfont icon-xin" v-for="value in xing" :class="{active:value == 1}"></i></div>
            </div>
            <div class="item-cont">
              <p>wwwwwwwwwwwwwwwwwwwwwwwwwwwww</p>
            </div>
            <div class="time">
              2222222222222222222
            </div>
          </div>
          <div class="item">
            <div class="item-top">
              <div class="img">
                <img :src="imgUrls[0].img" alt="" />
                <span class="name">dddw</span>
              </div>
              <div class="score"><i class="iconfont icon-xin" v-for="value in xing" :class="{active:value == 1}"></i></div>
            </div>
            <div class="item-cont">
              <p>wwwwwwwwwwwwwwwwwwwwwwwwwwwww</p>
            </div>
            <div class="time">
              2222222222222222222
            </div>
          </div>
          <div class="item">
            <div class="item-top">
              <div class="img">
                <img :src="imgUrls[0].img" alt="" />
                <span class="name">dddw</span>
              </div>
              <div class="score"><i class="iconfont icon-xin" v-for="value in xing" :class="{active:value == 1}"></i></div>
            </div>
            <div class="item-cont">
              <p>wwwwwwwwwwwwwwwwwwwwwwwwwwwww</p>
            </div>
            <div class="time">
              2222222222222222222
            </div>
          </div>
          <div class="item">
            <div class="item-top">
              <div class="img">
                <img :src="imgUrls[0].img" alt="" />
                <span class="name">dddw</span>
              </div>
              <div class="score"><i class="iconfont icon-xin" v-for="value in xing" :class="{active:value == 1}"></i></div>
            </div>
            <div class="item-cont">
              <p>wwwwwwwwwwwwwwwwwwwwwwwwwwwww</p>
            </div>
            <div class="time">
              2222222222222222222
            </div>
          </div>
          <div class="item">
            <div class="item-top">
              <div class="img">
                <img :src="imgUrls[0].img" alt="" />
                <span class="name">dddw</span>
              </div>
              <div class="score"><i class="iconfont icon-xin" v-for="value in xing" :class="{active:value == 1}"></i></div>
            </div>
            <div class="item-cont">
              <p>wwwwwwwwwwwwwwwwwwwwwwwwwwwww</p>
            </div>
            <div class="time">
              2222222222222222222
            </div>
          </div>
          <div class="item">
            <div class="item-top">
              <div class="img">
                <img :src="imgUrls[0].img" alt="" />
                <span class="name">dddw</span>
              </div>
              <div class="score"><i class="iconfont icon-xin" v-for="value in xing" :class="{active:value == 1}"></i></div>
            </div>
            <div class="item-cont">
              <p>wwwwwwwwwwwwwwwwwwwwwwwwwwwww</p>
            </div>
            <div class="time">
              2222222222222222222
            </div>
          </div>
        </div>
      </div>
      <div v-else class="nonecomment">
        <span>暂无评论内容</span>
      </div>
    </div>
  </div>
</template>

<script>
  import infiniteScroll from 'vue-infinite-scroll'
  export default {
    name: 'comment',
    data () {
      return {
        headbox: [
          {
            name: '全部',
            id: '1'
          },
          {
            name: '好评',
            id: '2'
          },
          {
            name: '中评',
            id: '3'
          },
          {
            name: '差评',
            id: '4'
          },
          {
            name: '有图',
            id: '5'
          }
        ],
        active: 0,
        busy: true,
        loadernone: false,
        imgUrls: [
          {
            img: 'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff'
          },
          {
            img: 'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff'
          },
          {
            img: 'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
          }
        ],
        xing: [],
        parameter: {
          id: '210',
          page: 1
        },
        teamlist: []
      }
    },
    mounted () {
      this.handxing(4)
      this.loadMore()
    },
    directives: {infiniteScroll},
    methods: {
      handxing (value) {
        this.xing = [...Array(value).fill(1), ...Array(5 - value).fill(0)]
      },
      loadMore () {
        this.busy = true
        console.log(1)
        this.busy = false
      }
      // async loadMore() {
      //   this.busy = true;
      //   this.loadernone = false;
      //   let response = await getPartnerTeamList(this.parameter);
      //   if(response.data.length){
      //     this.initStart(response.data)
      //     if (response.data.length < 10) {
      //       this.loadernone = true;
      //       return
      //     }
      //   }else{
      //     this.loadernone = true;
      //     return
      //   }
      //   this.busy = false;
      // },
      // initStart (data) {
      //   this.parameter.page++;
      //   this.teamlist = [...this.teamlist, ...data];
      // },
      // init () {
      //   this.parameter.page = 1;
      //   this.teamlist = [];
      //   this.loadernone = false;
      //   this.busy = true;
      // },
      // tagto (id,index) {
      //   this.init()
      //   this.parameter.id = id;
      //   getPartnerTeamList(this.parameter).then((response)=>{
      //     this.active = index;
      //     this.initStart(response.data)
      //     if (response.data.length < 10) {
      //       this.loadernone = true;
      //       return
      //     }
      //     this.busy = false;
      //   })
      // }
    }
  }

</script>

<style lang="scss" scoped>
  @import "../../assets/css/mixin";
  .top{
    position: fixed;
    left:0;
    right:0;
    top:0;
    height:50px;
    padding: 0 10px;
    display: flex;
    align-items:center;
    border-bottom: 2px solid #eee;
    background:#fff;
    .item{
      flex:1;
      text-align: center;
      font-size: 14px;
      color:#333;
      &.active{
        color: #f4504c
      }
    }
  }
  .box{
    padding-top: 50px;
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
      .score{
        margin-right: 10px;
        i{
          color:#999;
          margin-left: 3px;
          &.active{
            color: #f4504c
          }
        }
      }
    }
    .item-cont{
      margin:0 10px;
      p{
        line-height: 22px;
        font-size: 13px;
        color:#333;
        word-break:break-word;
      }
    }
    .time{
      margin:0 10px 5px 10px;
      font-size: 12px;
      color:#999;
      border-bottom: 1px solid #eee;
    }
  }
  .nonecomment{
    line-height: 80px;
    text-align: center;
    font-size: 13px
  }
</style>

