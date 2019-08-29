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
            label="车型"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="upkeepOperation"
            label="保养业务"
            width="220">
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
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>

              <el-button  @click="open(scope.$index, scope.row)"  size="mini"  type="danger">删除</el-button>
              <!--<el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
            </template>
          </el-table-column>
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
                let da = arr[i].date
                da = new Date(da);
                var year = da.getFullYear()+'年';
                var month = da.getMonth()+1+'月';
                var date = da.getDate()+'日';
                console.log([year,month,date].join('-'));
                arr[i].date=[year,month,date].join('-')
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
        console.log(row.id)
        this.$router.push({path:'carform',query:{carId:row.id}})
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.$http.delete('carUpkeep/'+row.id,{}).then(response=>{
          console.log(response)
          if(response.data.code===0){
            this.$message({
              showClose: true,
              message: '删除成功',
              type: 'success'
            });
            this.page(this.pageNo,this.pageSize)
          }
        })
      },

      open(index, row) {

        console.log(index, row);
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.delete('carUpkeep/'+row.id,{}).then(response=>{
            console.log(response)
            if(response.data.code===0){
              this.page(this.pageNo,this.pageSize)
            }
          })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>

<style scoped>

</style>
