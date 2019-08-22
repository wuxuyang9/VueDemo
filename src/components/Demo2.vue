<template>
    <div>
      <input v-model="keyword"/>
    </div>
</template>

<script>
  export default {
    name: 'Demo2',
    data(){
      return{
        keyword:''
      }
    },
    watch:{
      keyword(){
        console.log('keyword'+this.keyword)
      }
    }

  }
</script>

<style scoped>

</style>
