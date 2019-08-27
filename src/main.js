// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

import store from './store/store'
// 导入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


import axios from 'axios'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 配置NProgress选项
// NProgress.configure({ })

// 在路由页面跳转使用
router.beforeEach((to, from, next) => {
  // 开始进度条
  NProgress.start()
  // 继续路由
  next()
})

router.afterEach(transition => {
  // 结束进度条
  NProgress.done()
})
// 给Vue实例添加一个是个属性，这样在每个实例中就可以使用this.$http来访问axios实例了
Vue.prototype.$http = axios

// 一些默认的参数
axios.defaults.baseURL = 'http://127.0.0.1:8081/api'

// 请求拦截器：在发送请求前拦截
axios.interceptors.request.use(config => {
  console.log('请求发送前拦截')
  config.headers.common['AccessToken'] = 'token'
  return config;
}, error => {
  return Promise.reject(error)
})

// 响应拦截器：在请求响应之后拦截
axios.interceptors.response.use(response => {
  console.log('请求响应后处理')
  return response;
}, error => {
  return Promise.reject(error)
})

Vue.config.productionTip = false

// Vue使用ElementUI
Vue.use(ElementUI)
Vue.use(Vuex)
/*

router.beforeEach((to,from,next)=>{
  console.log('全局前置守卫beforeEach')
  console.log(to)
  console.log(from)
  console.log('-----------------')
  next()
})

router.afterEach((to,from)=>{
  console.log('全局后置钩子afterEach')
  console.log(to)
  console.log(from)
  console.log('----------------')
})
*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
