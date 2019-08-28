<template>
    <div>

      <el-row>
        <el-button type="primary" round @click="toForm">新增</el-button>
      </el-row>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="customerName"
            label="客户名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="customerPhone"
            label="客户电话"
            width="180">
          </el-table-column>
          <el-table-column
            prop="vehicleModelName"
            label="车型">
          </el-table-column>
          <el-table-column
            prop="upkeepOperation"
            label="保养业务"
            width="180">
          </el-table-column>
          <el-table-column
            prop="cost"
            label="费用"
            width="180">
          </el-table-column>
          <el-table-column
            prop="date"
            label="日期">
          </el-table-column>
          <!--<el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>-->
        </el-table>

      <el-pagination
        background
        layout="prev, pager, next"
        @prev-click="prev"
        @next-click="next"
        @current-change="current"
        :page-size="pageSize"
        :total="totalCount">>
      </el-pagination>
    </div>

</template>

<script>
  export default {
    name: 'car',
    data(){
      return{
        tableData:[],
        pageSize:10,
        pageNo:1,
        totalCount:0
      }
    },

    created(){
      this.page(0,10)
    },
    methods:{
      prev(arg){
        this.pageNo=arg
        this.page(arg,10)
        console.log(arg)
      },
      next(arg){
        this.pageNo=arg
        this.page(arg,10)
        console.log(arg)
      },
      current(arg){
        this.pageNo=arg
        this.page(arg,10)
        console.log(arg)
      },
      page(pageNo,pageSize){
        this.$http.get('/carUpkeep/list'+'?page='+pageNo+'&size='+pageSize,{})
          .then(response=>{
            console.log(response)
            if(response.data.code===0){
              let result=[]
              var arr=response.data.data.content;
              for (let i=0;i<arr.length;i++){
                result.push(arr[i])
              }
              this.tableData=result
              this.totalCount=response.data.data.totalElements
            }
          }).catch(error=>{
          console.log(error)
        })
      },
      toForm(){
        this.$router.push("carform")
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style scoped>

</style>
