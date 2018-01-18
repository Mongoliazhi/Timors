import Vue from 'vue'
import Router from 'vue-router'




import Main from '@/components/main/main'
import Login from '@/components/login/login'
  import Register from '@/components/login/register' //注册

import  TravelList from  '@/components/travel/travelList' //旅行
import  FundList from  '@/components/fund/fundList' //基金
import  FundDetail from  '@/components/fund/fundDetail' //基金

import Classfig from '@/components/classfig'
import Music from '@/components/music/music'
  import TopList from  '@/components/music/topList' //排行榜
  import MusicLove from  '@/components/music/musicLove' //排行榜

import  Address from  '@/components/goods/address'
import  Goods from  '@/components/goods/goods'
  import  GoodsDetail from  '@/components/goods/goodsDetail' //商品详情
import Cart from '@/components/goods/cart'
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
      path: '/travelList',
      name: 'TravelList',
      component: TravelList,
    },
    //基金
    {
      path: '/fundList',
      name: 'FundList',
      component: FundList,
    },
    {
      path: '/fundDetail:fundId',
      name: 'FundDetail',
      component: FundDetail,
    },
    //音乐
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
        {
          path: 'musicLove',
          name: 'MusicLove',
          component: MusicLove
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
      path: '/goods',
      name: 'Goods',
      component: Goods,
    },
    {
      path: '/address',
      name: 'Address',
      component: Address,
    },
    {
      path: '/goods/goodsDetail:goodsId',
      name: 'GoodsDetail',
      component: GoodsDetail
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ],
})

export default router