import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import '@config/common'
let app = r => require.ensure([], () => r(require('./app')), 'app')
let search = r => require.ensure([], () => r(require('./search')), 'search')

const routes = [
  {
    path: '/',
    component: app,
    children: [
      {
        path: '/search',
        component: search
      }
    ]
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
