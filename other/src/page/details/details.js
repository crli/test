import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import '@config/common'
let app = r => require.ensure([], () => r(require('./app')), 'app')
let comment = r => require.ensure([], () => r(require('./comment')), 'comment')

const routes = [
  {
    path: '/',
    component: app
  },
  {
    path: '/comment',
    component: comment
  }
]
const router = new Router({
  routes
})
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router
})
