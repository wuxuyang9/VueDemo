<template>

  <div>
    {{name1}}
    <child @handleClick="handleClick"></child>
  </div>
</template>

<script>

  import child from '@/components2/chrild'
  export default {
    name: 'parent',
    data(){
      return{
        name1:'parentdata'
      }
    },
    components:{
      child
    },
    methods:{
      handleClick(value){
        console.log(value+'parent')
      },
      parentmethod(){
        console.log('from chrild')
      }
    }
  }
</script>

<style scoped>

</style>
