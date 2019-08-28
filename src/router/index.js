import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/Demo1'

import Foo from '@/components/Foo'
import Foo1 from '@/components/Foo1'

import Foo2 from '@/components/Foo2'
import Bar from '@/components/Bar'
import FooBar from '@/components/FooBar'

import Top from '@/components/Top'
import Left from '@/components/Left'
import Main from '@/components/Main'
import echartsDemo from '@/components/echartsDemo'

import table from '@/components/table'

import date from '@/components/dateDemo'

import load from '@/components/load'


import  form from '@/components/form'

import  zuidaima from  '@/components/zuidaima'

import  zuidaimaform from '@/components/zuidaimaform'

import  carform from '@/components/carform'


import  car from '@/components/car'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/index',
      redirect:'/foo'
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
      children:[
        {
          path:'/foo1',
          component:Foo1
        },
        {
          path:'/foo2',
          component:Foo2
        }
      ]
      ,
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
      name:'bar',
      component:Bar
    },
    {
     path:'/foobar',
      name:'Foobar',
      component:FooBar
    }/*,

    {
      path:'/',
      components:{
        foo:Foo,
        bar:Bar
      }
    }*/

    ,
    {
      path:'/echarts',
      component:echartsDemo
    },
    {
      path:'/table',
      component:table
    },
    {
      path:'/date',
      component:date
    },
    {
      path:'/load',
      component:load
    },

    {
      path:'/form',
      component:form
    },
    {
      path:'/zuidaima',
      component:zuidaima
    },
    {
      path:'/zuidaimaform',
      component:zuidaimaform,
      props:(route)=>({
        id:route.query.id
      })
    },
    {
      path:'/carform',
      component:carform
    },
    {
      path:'/car',
      component:car
    }
  ]
})
