<template>
 <div>

   <el-row>
     <router-link to="/form"><el-button type="primary" round>主要按钮</el-button></router-link>

     <el-button type="primary" round @click="toForm">新增</el-button>
   </el-row>

   <el-table
     :data="tableData"
     style="width: 100%">

     <el-table-column
       prop="id"
       label="id"
       width="180">
     </el-table-column>
     <el-table-column
       prop="title"
       label="标题"
       width="180">
     </el-table-column>
     <el-table-column
       prop="url"
       label="url"
       width="180">
     </el-table-column>
     <el-table-column
       prop="createtime"
       label="创建时间">
     </el-table-column>

     <el-table-column label="操作">
       <template slot-scope="scope">
         <el-button
           size="mini"
           @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
         <el-button
           size="mini"
           type="danger"
           @click="handleDelete(scope.$index, scope.row)">删除</el-button>
       </template>
     </el-table-column>
   </el-table>


   <el-pagination
     background
     layout="prev, pager, next"
     @prev-click="next"
     @next-click="next"
     @current-change="current"
     :page-size="pageSize"
     :total="totalCount">
   </el-pagination>
 </div>

</template>

<script>
  export default {
    name:'zuidaima',
    data() {
      return {
        tableData: [],
        pageSize:10,
        pageNo:1,
        totalCount:0
      }
    },

    created () {
      this.page(0,10)
    },
    methods:{
      prev(arg){
        this.page(arg-1,10)
        console.log(arg)
      },
      next(arg){
        this.pageNo=arg
        this.page(arg-1,10)
        console.log(arg)
      },
      current(arg){
        this.pageNo=arg
        this.page(arg-1,10)
        console.log(arg)
      },
      page(pageNo,pageSize){
        this.$http.get('/zuiDaiMa/list'+'?page='+pageNo+'&size='+pageSize,{})
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
        this.$router.push('zuidaimaform')
      },
      handleEdit(index, row) {
        console.log(index, row);
        this.$router.push({path: '/zuidaimaform', query:{id: row.id}})
      },
      handleDelete(index, row) {
        console.log(index, row);
        console.log(row.id)
        this.$http.delete('/zuiDaiMa/'+row.id,{}).then(response=>{
          console.log(response)
          if(response.data.code===0){
            this.$router.go(0)
          }
        })
      }
    }
  }
</script>
