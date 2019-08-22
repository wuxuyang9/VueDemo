// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入element-ui
import ElementUI from 'element-ui'

Vue.config.productionTip = false

// Vue使用ElementUI
Vue.use(ElementUI)


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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
