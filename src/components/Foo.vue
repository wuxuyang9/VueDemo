<template>
    <div>
      Foo 路由守卫
    </div>
</template>

<script>
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
    }

  }
</script>

<style scoped>

</style>
