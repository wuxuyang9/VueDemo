<template>
    <div>
      Vue.extend(options)
    </div>
</template>

<script>
  import Vue from 'vue'
  let options={
    data(){
      return{
        msg:'hello vue!',
        foo:'bar'
      }
    },
    create(){
      console.log(this.msg)
    }
  }

  let Component=Vue.extend(options)
  let component=new Component()

  export default {

  }
</script>

<style scoped>

</style>
