<template>
  <div id="app">
    <img src="./assets/logo.png">

    <button @click="jumpFoo">字符串foo</button><br>
    <button @click="goback">回退</button><br>
    <button @click="$router.push({path:'foo'})">对象{path:'foo'}</button><br>
    <button @click="$router.push({name:'Foobar',params:{id:1}})">命名的路由{name:'',params:{id:1}}}</button><br>
    <button @click="$router.push({path:'/bar/666',query:{age:2}})">带查询参数</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    jumpFoo(){
      this.$router.push('foo',function () {
        console.log('onComplete:跳转完成')
      },function (err) {
        console.log('onAbort')
        }
      )
    },
    goback(){
      this.$router.go(-1)
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
