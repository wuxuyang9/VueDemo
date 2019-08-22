<template>
  <div>
    Bar query: {{ this.$route.query }}
  </div>

</template>

<script>
  export default {
    name: 'Bar',
    created () {
      this.init()
    },
    beforeRouteUpdate(to,from,next){
      console.log(to)
      console.log(from)
      console.log(next)
      next()
      this.init()
    },

    methods:{
      init(){
        console.log('Bar created '+this.$route.params.id)
      }
    }
  }
</script>

<style scoped>

</style>
