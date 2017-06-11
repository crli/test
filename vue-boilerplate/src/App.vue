<template>
  <transition name="router-fade" appear>
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
   @import './style/common';
  @import './assets/fonts/iconfont.css';
    .router-fade-enter-active, .router-fade-leave-active {
      transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
      opacity: 0;
  }
</style>
