
<template>
  <el-calendar v-model="value">
  </el-calendar>
</template>


<script>
  export default {
    name:'dateDemo',
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>
