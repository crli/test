import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import {getCookie} from '@/config/mUtils'
const home = r => require.ensure([], () => r(require('@/components/home/home')), 'home')

Vue.use(Router)

const routes = [
    {
      path: '/',
      component: App,
      children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: home
      },
      // {
      //   path: '/cart',
      //   component: cart,
      //   meta: {
      //       requireAuth: true,
      //   }
      // }
      ]
    }

];
const router =  new Router({
  routes: routes,
  mode: 'hash',
  strict: process.env.NODE_ENV !== 'production'
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
      if (getCookie("USERToken")) {
          next();
      }
      else {
        next({
            path: '/login',
            query: {redirect: to.fullPath}
        })
      }
  }
  else {
    next();
  }
})
export default router;
