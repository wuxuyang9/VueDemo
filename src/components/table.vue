<template>
 <div>
   <el-table
     :data="tableData"
     style="width: 100%">
     <el-table-column
       prop="item"
       label="商品条码"
       width="180">
     </el-table-column>
     <el-table-column
       prop="name"
       label="商品名"
       width="180">
     </el-table-column>
     <el-table-column
       prop="vendorName"
       label="供应商">
     </el-table-column>
   </el-table>


   <el-pagination
     background
     layout="prev, pager, next"
     @prev-click="prev"
     @next-click="next"
     :total="1000">
   </el-pagination>
 </div>

</template>

<script>
  export default {
    name:'table',
    data() {
      return {
        tableData: [],
        pageSize:10,
        pageNo:1
      }
    },

    created () {
      this.page(0,10)
    },
    methods:{
      prev(arg){
        this.page(arg,10)
        console.log(arg)
      },
      next(arg){
        this.pageNo=arg
        this.page(arg,10)
        console.log(arg)
      },
      page(pageNo,pageSize){
        this.$http.get('/item/list'+'?page='+pageNo,{})
          .then(response=>{
            console.log(response)
            if(response.data.code===0){
              var arr=response.data.data;
              for (let i=0;i<arr.length;i++){
                this.tableData.push(arr[i])
              }
            }
          }).catch(error=>{
          console.log(error)
        })
      }

    }
  }
</script>
