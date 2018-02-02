import Vue from 'vue'
import Router from 'vue-router'


import Main from '@/components/main/main'
import Login from '@/components/login/login'
import Register from '@/components/login/register' //注册

import TravelList from '@/components/travel/travelList' //旅行
import FundList from '@/components/fund/fundList' //基金
import FundDetail from '@/components/fund/fundDetail' //基金详情

import ChatRoom from '@/components/chatRoom/chatRoom' //聊天室

import Classfig from '@/components/classfig'
import Music from '@/components/music/music'
import TopList from '@/components/music/topList' //排行榜
import MusicLove from '@/components/music/musicLove' //排行榜

import Goods from '@/components/goods/goods'
import GoodsDetail from '@/components/goods/goodsDetail' //商品详情
import Address from '@/components/goods/address'  //地址
import AddressEdit from '@/components/goods/addressEdit' //地址编辑
import Coupon from '@/components/goods/coupon' //优惠券

import Cart from '@/components/goods/cart' //购物车
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

    // 聊天室
    {
      path: '/chatRoom',
      name: 'ChatRoom',
      component: ChatRoom,
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
      path: '/coupon',
      name: 'Coupon',
      component: Coupon,
    },
    //地址
    {
      path: '/address',
      name: 'Address',
      component: Address,
      children: [
        {
          path: 'addressEdit:id',
          name: 'AddressEdit',
          component: AddressEdit
        }
      ]
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
