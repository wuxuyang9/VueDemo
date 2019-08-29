<template>
    <div class="divForm">
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
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
          <el-button type="primary" @click="onModifi" v-if="modifie">修改</el-button>
          <el-button type="primary" @click="onSubmit" v-else>立即创建</el-button>
          <el-button @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  export default {
    name: 'carform',
    props:['carId'],
    data(){
      return{
        modifie:false,
        value: [],
        options: [],
        check:[],
        form: {
          id:'',
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

      if(this.carId){
        this.modifie=true
        this.$http.get('/carUpkeep/'+this.carId,{}).then(response=>{
          console.log(response)
          if(response.data.code===0){
            this.form.customerName=response.data.data.customerName
            this.form.customerPhone=response.data.data.customerPhone
            let arr=[]
            arr.push(response.data.data.vehicleModelParentId+'')
            arr.push(response.data.data.vehicleModelId+'')
            this.value=arr
            let check1=[]
            check1=response.data.data.upkeepOperation.split(',');
            console.log(check1)
            this.check=check1
            this.form.cost=response.data.data.cost
            this.form.date=response.data.data.date
            this.form.id=response.data.data.id
          }
        }).catch(error=>{
          this.$message.error(error);
        })

      }
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
        }).catch(error=>{
          this.$message.error(error.response.data);
        })
      },
      handleChange(value) {
        console.log(value);
      },
      cancel(){
        this.$router.push("car")
      },
      onModifi(){
        this.$http.put('/carUpkeep/',this.form).then(response=>{
          console.log(response)
          if(response.data.code===0){
            this.$message({
              showClose: true,
              message: '修改成功',
              type: 'success'
            });
            this.$router.push("/car")

          }
        }).catch(error=>{
          console.log(error)
        })
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
