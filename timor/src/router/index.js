import Vue from 'vue'
import Router from 'vue-router'




import Main from '@/components/main/main'
import Login from '@/components/login/login'
  import Register from '@/components/login/register' //注册

import Classfig from '@/components/classfig'
import Music from '@/components/music/music.vue'
  import TopList from  '@/components/music/topList' //排行榜

import Cart from '@/components/cart'
import My from '@/components/my'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/main',
      name: 'Main1',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      children: [
        {
          path: 'register',
          name: 'Register',
          component: Register
        },
      ]
    },
    {
      path: '/classfig',
      name: 'Classfig',
      component: Classfig
    },
    {
      path: '/music',
      name: 'Music',
      component: Music,
      children: [
        {
          path: 'topList:id',
          name: 'TopList',
          component: TopList
        },
      ]
    },
    // {
    //   path: '/topList:id',
    //   name: 'TopList',
    //   component: TopList
    // },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ],
})

export default router
