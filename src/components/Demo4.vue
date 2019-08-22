<!--
<template>

</template>

<script>
  import Vue from 'vue'

  let  mixin={
    data(){
      return{
        foo:'foo mixin',
        msg:'msg mixin'
      }
    },
    method:{
      foobar(){
        console.log("foobar method mixin")
      }
    },
    created () {
      console.log("created function mixin")
    }
  }

  let  vm=new Vue({
    mixins:[mixin],
    data(){
      return{
        bar:'bar self',
        msg:'msg self'
      }
    },

    method: {
      foobar(){
        console.log("foobar method self")
      }
    },

    created () {
      console.log('created function self')
    }
  })

  /*console.log(vm.$data)
  vm.foobar()
*/

  export default {

  }
</script>

<style scoped>

</style>
-->
