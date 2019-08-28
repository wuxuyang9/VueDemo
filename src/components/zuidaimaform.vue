
<template>


  <div>
    id={{id}}
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">



        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="url">
        <el-input v-model="form.url"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onModif" v-if="modifi">修改</el-button>
        <el-button type="primary" @click="onSubmit" v-else>立即创建</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>


</template>
<script>
  export default {
    name:'zuidaimaform',
    props:['id'],
    data() {
      return {
        modifi:false,
        form: {
          title: '',
          url: '',
          id:'',
          createtime:'',
          updatetime:''
        }
      }
    },
    created(){
      console.log(this.id+"--------")
      if(this.id){
        this.modifi=true
        this.$http.get('/zuiDaiMa/'+this.id,{}).then(response=>{
          console.log(response)
          if(response.data.code===0){
            console.log(response.data.data.title)
            this.form.title=response.data.data.title
            this.form.url=response.data.data.url
            this.form.id=response.data.data.id
            this.createtime=response.data.data.createtime
            this.updatetime=response.data.data.updatetime
          }
        })
      }
    },
    beforeRouteEnter (to, from, next) {
      console.log('beforeRouteEnter123')
      console.log(to)
      console.log(from)
      console.log('------------------')

      next()
    },
    methods: {
      onSubmit() {
        console.log('submit!');
        this.$http.post('/zuiDaiMa/',this.form).then(response=>{
          console.log(response)
          if(response.data.code===0){
            this.$router.push('zuidaima')
          }
        })
      },
      onModif(){
        console.log('modifi')
        this.$http.put('/zuiDaiMa/',this.form).then(response=>{
          console.log(response)
          if(response.data.code===0){
            this.$router.push('zuidaima')
          }
        })
      },
      cancel(){
        this.$router.push('zuidaima')
      }
    }
  }
</script>
