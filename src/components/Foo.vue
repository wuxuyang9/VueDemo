<template>
    <div>
      Foo 路由守卫
<!--
      <router-link to="/foo/foo1">foo1</router-link>
      <router-link to="/foo/foo2">foo2</router-link>-->

      {{this.$store.state.pageParams}}
    <button @click="increment">+</button>
    </div>
</template>

<script>

  import  {mapMutations} from 'vuex'
  export default {
    name: 'Foo',
    beforeRouteEnter(to,from,next){
      console.log('beforeRouteEnter')
      console.log(to)
      console.log(from)
      console.log('--------------')
      next()
    },
    beforeRouteUpdate(to,from,next){
      console.log('beforeRouteUpdate')
      console.log(to)
      console.log(from)
      console.log('-----------------------')
      next()
    },
    beforeRouteLeave(to,from,next){
      const answer=window.confirm('你确定要离开吗')
      if(answer){
        console.log('beforeRouteLeave')
        console.log(to)
        console.log(from)
        console.log('----------------------')
        next()
      }else {
        next(false)
      }
    },

    methods:{
      increment() {
        /* this.$store.commit('increment',{
          step:10
        })*/

        this.$store.dispatch('incrementAsync', {step: 10}).then((resp)=>{
          console.log(resp)
        }
        )
      }
    }
  }
</script>

<style scoped>

</style>
