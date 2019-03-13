<template>
  <div id="">
    <div class="div" @click="toAddress">单击去路由页面a2</div>
    <tpl headfont></tpl>
    <!-- <div class="topWindow">
      <div class="videobox" :class="{'full':isFull}" @click="showControls">
        <div class="loading" v-if="loading">
          <div class="box"><spinner type="fading-circle" color="#fff"></spinner></div>
        </div>
        <video
          id="my-player"
          preload="none"
          ref="myVideo"
          autoplay="autoplay"
          :src="video"
          x5-playsinline="" playsinline="" webkit-playsinline="" @canplay="timeFunction">
        </video>
        <i class="play icon iconfont icon-bofangqi01" v-if="!isPlay"  @click="playPause"></i>
        <transition name="fade">
          <div class="controls" v-show="conShow" :class="isFull?'controls2':''">
            <i class="play-s icon iconfont" :class="isPlay?'icon-bofangqizanting':'icon-bofangqibofang'" @click="playPause"></i>
            <p class="time">{{time}}</p>
            <input class="timeLine" type="range" v-model="nowTime" :min="0" :max="videoTime" ref="line"  v-on:input="playProgress" @click="iosProgress">
            <p class="timeAll">{{timeAll}}</p>
            <i class="fullBtn icon iconfont" :class="isFull?'icon-tuichuquanping':'icon-bofangqiquanping'" @click="upScreen"></i>
          </div>
        </transition>
      </div>
    </div> -->
  </div>
</template>

<script>
  // import { Indicator } from 'mint-ui'
  import tpl from '@components/tpl'
  import {Spinner} from 'mint-ui'
  export default {
    components: {
      tpl,
      Spinner
    },
    data () {
      return {
        video: '',
        videoTime: 0,
        nowTime: 0,
        time: '00:00',
        timeAll: '00:00',
        loading: true,
        isPlay: true,
        isFull: false,
        conShow: true,
        realTime: '',
        lastTime: '',
        cd: '',
        st: ''
      }
    },
    // 加载数据
    mounted () {
      // Indicator.open({
      //   text: '加载中...',
      //   spinnerType: 'fading-circle'
      // })
      let _this = this
      setTimeout(function () {
        _this.video = 'https://vd2.bdstatic.com/mda-jb5dpeun1kxiyz76/hd/mda-jb5dpeun1kxiyz76.mp4'
      }, 2000)
      this.$refs.myVideo.addEventListener('play', event => {
        this.loading = false
        this.isPlay = true
        this.st = window.setInterval(this.setTime, 1000)
        this.removeControls()
      })
      this.$refs.myVideo.addEventListener('pause', event => {
        this.isPlay = false
        clearInterval(this.st)
      })
      this.$refs.myVideo.addEventListener('ended', event => {
        this.isPlay = false
        clearInterval(this.st)
      })
    },
    // 相关操作事件
    methods: {
      toAddress () {
        window.location.href = 'address.html'
      },
      // 显示控制面板
      showControls () {
        this.conShow = true
        this.removeControls()
      },
      // 隐藏控制面板
      removeControls () {
        this.lastTime = new Date().getTime()
        this.cd = setInterval(() => {
          this.realTime = new Date().getTime()
          if (this.realTime - this.lastTime > 3000) {
            this.conShow = false
            return
          }
        }, 1000)
      },
      timeFunction () {
        this.videoTime = this.$refs.myVideo.duration // 得到视频的总时长
        this.timeAll = this.secondToDate(this.videoTime)
      },
      // 秒数转时分秒
      secondToDate (result) {
        let m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60))
        let s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60))
        return (result = m + ':' + s)
      },
      // 播放/暂停，采用同一个方法实现
      playPause () {
        if (this.$refs.myVideo.paused) {      // 判断当前是否处于暂停状态
          this.$refs.myVideo.play()        // 调用play()方法开发播放
        } else {
          this.$refs.myVideo.pause()        // 调用pause()方法暂停视频播放
        }
      },
      // 更新当前时间
      setTime () {
        this.nowTime = this.$refs.myVideo.currentTime // 得到当前的进度
        this.tl = (this.nowTime / this.videoTime) * 100 + '%' + ' 100%'
        this.time = this.secondToDate(this.nowTime)
        this.$refs.line.style.backgroundSize = this.tl
        if (this.$refs.myVideo.ended) {
          this.isPlay = true
          return
        }
      },
      playProgress () {
        this.$refs.line.style.backgroundSize = (this.nowTime / this.videoTime) * 100 + '%' + ' 100%'
        this.$refs.myVideo.currentTime = this.nowTime
        console.log(this.nowTime)
      },
      iosProgress (e) {
        // let os = osSelect()
        // if (os.ios) {
        //   let lineL = this.$refs.line.offsetWidth
        //   this.$refs.line.style.backgroundSize = (e.offsetX / lineL) * 100 + '%' + ' 100%'
        //   this.nowTime = this.videoTime * (e.offsetX / lineL)
        //   this.$refs.myVideo.currentTime = this.nowTime
        // }
      },
      // 进入全屏
      upScreen () {
        // let os = osSelect()
        if (!this.isFull) {
          this.isFull = true
          this.fullFlag = 1 // 横屏
          // if (os.ios) {
          //   window.webkit.messageHandlers.fullScreen.postMessage(this.fullFlag)
          // } else if (os.android) {
          //   window.android.fullScreen(this.fullFlag)
          // }
        } else {
          this.isFull = false
          this.fullFlag = 0 // 竖屏
          // if (os.ios) {
          //   window.webkit.messageHandlers.fullScreen.postMessage(this.fullFlag)
          // } else if (os.android) {
          //   window.android.fullScreen(this.fullFlag)
          // }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
video::-webkit-media-controls{
	display: none!important;
}
video::-webkit-media-controls-panel{
	display: none!important;
}
video::-webkit-media-controls-play-button{
	display: none!important;
}
video::-webkit-media-controls-start-playback-button {
  display: none!important;
}
input[type=range] {
    -webkit-appearance: none;
    background: -webkit-linear-gradient(#61bd12, #61bd12) no-repeat;
    background-size: 0% 100%;
}
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
}
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  background: #fff;
  border-radius: 50%;
  border: solid 0.125em rgba(205, 224, 230, 0.5);
  box-shadow: 0 .125em .125em #3b4547;
}

.topWindow{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999999;
  background-color: #000;
  .videobox{
    width: 100%;
    height: 238px;
    position: relative;
    .loading{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: #000;
      .box{
        width: 28px;
        margin: 100px auto 0;
      }
    }
    video{
      width: 100%;
      height: 100%;
      object-fit: contain;
      z-index: 999!important;
      background-color: #000;
    }
    i{
      color: #fff;
    }
    .play{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      opacity: 0.7;
      z-index: 9999;
      font-size: 40px;
    }
    .controls{
      display: -webkit-flex;
      display: flex;
      -webkit-align-items: center;
      align-items: center;
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      padding: 5px 15px;
      bottom: 0;
      left: 0;
      z-index: 9999;
      background: rgba(0,0,0,0.1);
      .play-s{
        margin-right: 10px;
      }
      p{
        margin: 0;
        padding: 0;
        font-size: 12px;
        color: #fff;
      }
      .timeLine{
        -webkit-flex-grow: 1;
        flex-grow: 1;
        width: 1%;
        height: 5px;
        border-radius: 5px;
        background-color: #fff;
        // overflow: hidden;
      }
      .time{
        margin-right: 10px;
      }
      .timeAll{
        margin-left: 10px;
      }
      .fullBtn{
        margin-left: 10px;
      }
      &.controls2{
        padding: 20px 80px;
        i{
          padding: 10px;
        }
      }
    }
  }
}
.video-js{
  width: 100%; height:100%; object-fit: fill
}
.full{
	position: fixed!important;
	top: 0;
	left: 0;
	transform-origin: top left;
	transform: rotate(90deg) translateY(-100%);
	width: 100vh!important;
	height: 100vw!important;
	z-index: 2147483647;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

