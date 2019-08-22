import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/Demo1'

import Foo from '@/components/Foo'

import Bar from '@/components/Bar'
import FooBar from '@/components/FooBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/demo',
      name:'demo',
      component:Demo
    },
    {
      path:'/foo',
      name:'foo',
      component:Foo,
      beforeEnter:(to,from,next)=>{
        console.log('路由独厚的守卫beforeEnter')
        console.log(to)
        console.log(from)
        console.log('------------------')
        next()
      }
    },
    {
      path:'/bar/:id',
      component:Bar
    },
    {
     path:'/foobar',
      name:'Foobar',
      component:FooBar
    }
  ]
})
