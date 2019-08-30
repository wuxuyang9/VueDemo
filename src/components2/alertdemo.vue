<template>
    <div>
      <button @click="onClick">点击</button>
      <h1>lrving</h1>
      <slot></slot>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <slot name="slot1" :item="todo">
            {{todo.text}}
          </slot>
        </li>

      </ul>

      <slot name="slot2"></slot>
      <button @click="handleChildClick('from chrild')">sdfsd</button>
    </div>
</template>

<script>
  export default {
    props:['msg','todos'],
    name: 'alertdemo',
    methods:{

      onClick(){
        alert(this.msg)
      },

      handleChildClick(value){
        this.$emit('handleClick',value)
      }
    }
  }
</script>

<style scoped>

</style>
