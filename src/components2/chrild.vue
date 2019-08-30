<template>
    <div>
      <button @click="handleChildClick('from child')">dd</button>
    </div>
</template>

<script>
  export default {
    name: 'chrild',
    methods:{
      handleChildClick(value){
        this.$parent.name1='chrild data'
        this.$parent.parentmethod()
        // this.$emit('handleClick',value)
      }
    }
  }
</script>

<style scoped>

</style>
