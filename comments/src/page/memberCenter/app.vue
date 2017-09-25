<template>
  <div id="memberCenter">
    <foot :footbox="footbox" :active="3"></foot>
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

</style>
