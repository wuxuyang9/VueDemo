<template>

  <alertdemo :msg="msg1" :todos="arr" @handleClick="handleClick">
    <a href="www.baidu.com">baidu</a>
    <template slot="slot1" slot-scope="scope">
      <span v-if="scope.item.isComplete">√</span>
      {{scope.item.text}}
    </template>
    <template slot="slot2"><a>slot2</a></template>
  </alertdemo>
</template>

<script>
  import alertdemo from '@/components2/alertdemo'
  export default {
    name: 'demo',
    data(){
      return{
        msg1:'1234455',
        arr:[
          {id:11,text:'lrving',isComplete:true},
          {id:24,text:'kobe',isComplete:false},
          {id:2,text:'maidi',isComplete:false},
        ]
      }
    },
    methods:{
      handleClick(value){
        console.log('处理业务逻辑...')
        // 赋值：达到子组件向父组件传参的目的

      }
    },
    components:{
      alertdemo
    }
  }
</script>

<style scoped>

</style>
