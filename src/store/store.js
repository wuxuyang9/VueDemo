import  Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count:0,
    pageParams:{},
    todos:[
      {id:1,text:'Task A',isDone:true},
      {id:2,text:'Task B',isDone:false}
    ]
  },
  mutations:{
    increment(state,payload){
      state.count+=payload.step
    },
    decrement:state => state.count--
  },

  actions:{
    incrementAsync(context,payload){
      console.log(context.state)
      console.log(context.getters)

      setTimeout(()=>{
        context.commit('increment',payload)
      },1000)
    }
  }
  ,

  getters:{
    doneTodos(state,getters){
      return state.todos.filter(item=>item.isDone)
    },

    doneTodosCount(state,getters){
      return getters.doneTodos.length
    },

    getTodoById(state){
      var myfun=function (id) {
        return state.todos.find(todo=>todo.id===id)
      }
      return myfun;
    }
  }



})
