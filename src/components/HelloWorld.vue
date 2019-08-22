<template>
  <div>
    <yes-or-no-select v-bind:options="options"></yes-or-no-select>
    <demo1></demo1>
  </div>


</template>

<script>

import YesOrNoSelect from '@/components/YesOrNoSelect'

import Demo1 from '@/components/Demo1'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg:'hello created',
      options:[
        {id:1,text:'text1'},
        {id:2,text:'text2'},
        {id:3,text:'text3'},
        {id:4,text:'text4'},
      ]
    }
  },
  created(){
    console.log("created...."+this.msg)
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
  ,
  components:{
    YesOrNoSelect,Demo1
  }
}
</script>
