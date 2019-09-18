



export default {
  state:{
    token:'',
    username:'',
    userId:''
  },

  mutations:{
    setToken(state,token){
      state.token=token
    },
    setUserName(state,userName){
      state.username=userName
    },
    setUserId(state,userId){
      state.userId=userId
    }
  },
  actions:{
      setToken ({commit},token) {
        return new Promise((resolve, reject) => {
          commit('setToken',token)
          resolve(token)
        })
      }

  },

  getters:{
    getUserId(state){
      return state.userId
    },
    getUserName(state){
      return state.username
    },
    getToken(state){
      return state.token
    }

  }
}
