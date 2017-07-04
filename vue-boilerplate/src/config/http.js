import Vue from 'vue'
import store from '../store'
import router from '../router'
import axios from 'axios'
import {getCookie} from './mUtils'
import {OUT_LOGIN} from '@/store/mutation-types.js'
axios.defaults.timeout = 30000;
// http request 拦截器
axios.interceptors.request.use(
    config => {

      if (getCookie("USERToken")) {

      }
      return config;
    },
    err => {
      return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response) {
        if(error.response.status == 1001||error.response.status == 1002){
          store.commit(OUT_LOGIN);
          router.push('/login?redirect='+router.currentRoute.fullPath)
        }
    }
    return Promise.reject(error)
});
Vue.prototype.$ajax = axios;

