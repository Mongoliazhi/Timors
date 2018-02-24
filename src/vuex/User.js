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
    user: JSON.parse(sessionStorage.getItem("user") || '{}'),
  },
  mutations: {  //处理
    //判断用户是否登陆
    // getUser: function (state) {
    //   // var sessionUser = JSON.parse(JSON.parse(sessionStorage.getItem('user')))
    //   console.log(JSON.parse(sessionStorage.getItem('user')))
    //   var sessionUser = JSON.parse(sessionStorage.getItem('user'))
    //   console.log(sessionUser)
    //   if (sessionUser) {
    //     console.log("存在sessionUser")
    //     this.user = sessionUser;
    //   } else {
    //     console.log("不存在sessionUser")
    //     this.user = {};
    //   }
    //   console.log(this.user)
    // },

    //判断是否登陆
    isLogin: function (state) {
      console.log(state.user)
      if (state.user.user_name) {
        return 111;
      } else {
        router.push({path: '/login'});
      }
    },
    //设置当前用户 --》 user
    setUserDate(state, userDate) {
      console.log("90909090")
      console.log(userDate)
      state.user = userDate
      console.log(state.user)
    },


  },
//
// Action 类似于 mutation，不同在于：
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
  actions: {
    //判断是否登陆
    userState1(content) {
      console.log(content)
      if (content.state.user.user_name) {
        return true;
      } else {
        router.push({path: '/login'})
      }
    }
  },
  //有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数
  getters: {
    getUser: state => {
      console.log("78789999")
      console.log(state)
      return state.user
    }
  }
}

