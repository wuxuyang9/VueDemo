<template>
    <div class="divForm">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="客户名称">
          <el-input v-model="form.customerName"></el-input>
        </el-form-item>

        <el-form-item label="客户电话">
          <el-input v-model="form.customerPhone"></el-input>
        </el-form-item>

        <div class="block">
          <span class="demonstration">选择车型</span>
          <el-cascader
            v-model="value"
            :options="options"
            @change="handleChange"></el-cascader>
        </div>

        <el-form-item label="保养业务">
          <el-checkbox-group v-model="check">
            <el-checkbox label="普通洗车" name="type"></el-checkbox>
            <el-checkbox label="抛光" name="type"></el-checkbox>
            <el-checkbox label="打蜡" name="type"></el-checkbox>
            <el-checkbox label="清洗内饰" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="费用">
          <el-input v-model="form.cost"></el-input>
        </el-form-item>

        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
          </el-col>
         <!-- <el-col class="line" :span="2">-</el-col>-->
         <!-- <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="date2" style="width: 100%;"></el-time-picker>
          </el-col>-->
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  export default {
    name: 'carform',
    data(){
      return{
        value: [],
        options: [],
        check:[],
        form: {
          customerName: '',
          customerPhone: '',
          vehicleModelId: '',
          upkeepOperation: '',
          cost: '',
          date: ''
        },


      }
    },
    /*computed:{
      datet(){
        return this.date1+this.date2
      }/!*,
      vehicleModelId(){
        return this.value[1]
      }*!/
    },*/
    watch:{
      value(){
        this.form.vehicleModelId=this.value[1]
      },
      check(){
        let content=''
        let arr=this.check
        for (let i=0;i<arr.length;i++){
          if(i!=arr.length-1){
            content+=arr[i]
            content+=','
          }else {
            content+=arr[i]
          }
        }
        this.form.upkeepOperation=content

      }
    },

    created(){
      this.$http.get('/vehicleMode/list',{}).then(response=>{
        console.log(response)
        if(response.data.code===0){
          let content=response.data.data
          for (let i=0;i<content.length;i++){
            this.options.push(content[i])
          }
        }
      })
    },
    methods:{
      onSubmit() {
        console.log('submit!');

        this.$http.post('/carUpkeep/',this.form).then(response=>{
          console.log(response)
          if(response.data.code===0){
            console.log(response.data.code);
            this.$message({
              showClose: true,
              message: '新增成功',
              type: 'success'
            });

            this.$router.push("/car")
          }
        })
      },
      handleChange(value) {
        console.log(value);
      },
      cancel(){
        this.$router.push("car")
      }
    }
  }
</script>

<style scoped>

  .divForm{
    position: absolute;
    width: 900px;
    height: 700px;

    text-align: center;
    top:50%;
    left: 40%;
    margin-top: -200px;
    margin-left: -150px;
  }

</style>
