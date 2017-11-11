/**
 * Created by Administrator on 2017/10/25.
 *
 */

import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router'

Vue.use(Vuex);

export default {
  state: {
      user:{},
  },
  mutations: {
      //判断用户是否登陆
      getUser:function (state) {
        // var sessionUser = JSON.parse(JSON.parse(sessionStorage.getItem('user')))
        console.log(JSON.parse(sessionStorage.getItem('user')))
        var sessionUser = JSON.parse(sessionStorage.getItem('user'))
        console.log(sessionUser)
        if(sessionUser){
          console.log("1")
          state.user = sessionUser;
        }else{
          console.log("2")
          state.user = {};
        }
        console.log(state.user)
      },

      //判断是否登陆
      isLogin:function (state) {
        console.log(state)
        if(state.user.user_name){
          console.log("已登录")
        }else{
          router.push({path:'/login'})
        }
      }



  },
  getters: {

  }
}

