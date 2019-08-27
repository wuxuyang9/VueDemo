
<template>

  <div>
    Bar query: {{ this.$route.query }}
  </div>
  <!--<div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">



        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="url">
        <el-input v-model="form.url"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>-->


</template>
<script>
  export default {
    name:'zuidaimaform',
    data() {
      return {
        id:'',
        form: {
          title: '',
          url: ''
        }
      }
    },
    created(){
      console.log(this.$router.query.id+"9o--------")
    },
    beforeRouteEnter (to, from, next) {
      console.log('beforeRouteEnter123')
      console.log(to)
      console.log(from.query.id)
      console.log(this.$router.query.id+"----1233")
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
      }
    }
  }
</script>
