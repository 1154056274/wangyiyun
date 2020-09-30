import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        id:'',
        sid:"",
        token:''
    
    },
    mutations:{
        setDetailId(state,id){ //歌手id
            state.id = id
        },
        setSingerId(state,id){
            state.sid = id
        },
        setToken(state,token){
            state.token = token
        }
    },
    actions:{
           
    }
})

export default store