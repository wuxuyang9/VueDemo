<template>
    <div>
      计算属性：{{upperCase}}<br>
      局部过滤器：{{realName|upperCaseFilter}}<br>
      方法调用：{{upperCaseMethod(realName)}}
    </div>
</template>

<script>
  export default {
    name: 'Demo1',
    data(){
      return{
        realName:'zhang san'
      }

    },
    computed:{
      upperCase(){
        return this.realName.toLowerCase().split(/\s+/).map(function(item) {
          return item.slice(0, 1).toUpperCase() + item.slice(1);
        }).join(' ');
      }

    },
    filters:{
      upperCaseFilter(value){
        return value.toLowerCase().split(/\s+/).map(function(item) {
          return item.slice(0, 1).toUpperCase() + item.slice(1);
        }).join(' ');
      }
    },
    methods:{
      upperCaseMethod(value){
        return value.toLowerCase().split(/\s+/).map(function(item) {
          return item.slice(0, 1).toUpperCase() + item.slice(1);
        }).join(' ');
      }
    }



  }
</script>

<style scoped>

</style>
