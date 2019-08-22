<template>
  <select>
    <option v-for="item in options" v-bind:key="item.id" :value="item.id">{{item.text}}</option>
  </select>
</template>

<script>
export default {
  name: 'YesOrNoSelect',
  props:{
    options:Array
  }
}
</script>

<style scoped>
  select {
    width: 100px;
    height: 30px
  }
</style>
