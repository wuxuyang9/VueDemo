<template>
  <div id="app">
    <img src="./assets/logo.png">

   <!-- <button @click="jumpFoo">字符串foo</button><br>
    <button @click="goback">回退</button><br>
    <button @click="$router.push({path:'foo'})">对象{path:'foo'}</button><br>
    <button @click="$router.push({name:'Foobar',params:{id:1}})">命名的路由{name:'',params:{id:1}}}</button><br>
    <button @click="$router.push({path:'/bar/666',query:{age:2}})">带查询参数</button>-->

<!--    <router-view name="top" class="top">top</router-view>
    <router-view name="left" class="left">left</router-view>
    <router-view name="main" class="main">main</router-view>-->

   <!-- App.vue{{count}}-->
   <!-- <router-view name="foo"></router-view>
    <router-view name="bar"></router-view>-->
   <!-- <button @click="goPage">页面传参</button>

    {{this.$store.getters.doneTodos}}<br>

    {{this.$store.getters.doneTodosCount}}<br>

    {{this.$store.getters.getTodoById(2)}}<br>

    {{doneTodoList}}

-->

  {{res}}

    <router-view/>
  </div>
</template>

<script>

  import  {mapGetters} from 'vuex'
export default {
  name: 'App',
  data(){
    return{
      res:{}
    }
  },
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
    },

    goPage(){
      this.$store.state.pageParams={foo:'foo',bar:'bar'}
      this.$router.push('/foo')
    }
  },
  computed:{
    count(){
      return this.$store.state.count
    },

    ...mapGetters({
      doneTodoList:'doneTodos'
    })
  },

  created () {
    this.$http.post('/user/login',
      {username:'admin',password:'admin'}
    ).then(response=>{
      console.log(response)


    if(response.data.code===0){
      this.res=response.data.data
    }
    })
      .catch(error=>{

        console.log(error)
      })
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

  .top{
    float: left;
    width: 100%;
    height:100px;
    background-color: orange;
  }

  .left{
    float:left;
    width: 25%;
    height: 700px;
    background-color: #2c3e50;
  }
  .main{
    float: left;
    width: 75%;
    height: 700px;
    background-color: dimgray;
  }
</style>
