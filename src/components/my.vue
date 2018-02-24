<template>
  <div class="my">
    <!--<header class="mui-bar mui-bar-nav">-->
      <!--<h1 class="mui-title">个人中心</h1>-->
      <!--<a class="mui-icon mui-icon-left-nav mui-pull-left"></a>-->
    <!--</header>-->
    <v-nav :nav-name="'个人中心'" :nav-num="0"></v-nav>

    <div class="personal-center">

      <div class="personal-header">
        <div class="personal-headerBg"></div>
        <div class="personal-message">
          <!--头像ID-->

          <template v-if="userDate.user_autograph">
            <div class="stroge-info">
              <div class="header-img">
                <img :src="userDate.user_headImg" alt="">
              </div>
              <div class="lines"></div>
              <div class="info-txt">
                <p>{{userDate.user_name}}</p>
                <p>T:<span v-html="userDate.user_autograph">{{userDate.user_autograph}}</span></p>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="stroge-info">
              <div class="header-img">
                <img src="../../static/images/women.jpeg" alt="">
              </div>
              <div class="lines"></div>
              <div class="info-txt">
                <p>您还没有登陆</p>
                <!--<p>T:<span>今天</span></p>-->
              </div>
            </div>
          </template>
        </div>
      </div>

      <div class="order-box">

        <div class="list-type">
          <div>
            <a>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-spring"></use>
              </svg>
              待付款
              <b>4</b>
            </a>
          </div>
          <div>
            <a>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-knot"></use>
              </svg>
              待付款
              <b>4</b>
            </a>
          </div>
          <div>
            <a>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-festival"></use>
              </svg>
              待付款
              <b>4</b>
            </a>
          </div>

        </div>

        <ul class="other-list">

          <li class="other-list-shop">
            <a href="">
              <div class="pull-left">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-project"></use>
                </svg>
                <span>订单</span>
              </div>
              <div class="pull-right right">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-jiantou122"></use>
                </svg>
              </div>
            </a>
          </li>
          <li class="other-list-shop">
            <a href="">
              <div class="pull-left">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-camera"></use>
                </svg>
                <span>相册</span>
              </div>
              <div class="pull-right right">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-jiantou122"></use>
                </svg>
              </div>
            </a>
          </li>
          <li class="other-list-shop">
            <a @click="address">
              <div class="pull-left">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-position"></use>
                </svg>
                <span>地址</span>
              </div>
              <div class="pull-right right">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-jiantou122"></use>
                </svg>
              </div>
            </a>
          </li>
          <li class="other-list-shop">
            <router-link to="/coupon">
              <div class="pull-left">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-medal"></use>
                </svg>
                <span>优惠券</span>
              </div>
              <div class="pull-right right">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-jiantou122"></use>
                </svg>
              </div>
            </router-link>
          </li>
          <li class="other-list-shop">
            <a>
              <div class="pull-left">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-set"></use>
                </svg>
                <span>设置</span>
              </div>
              <div class="pull-right right">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-jiantou122"></use>
                </svg>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>


    <v-footer></v-footer>

  </div>
</template>

<script>
  import * as _fetch from '../config/fetch'

  import footer from './footer/footer.vue'

  import nav from './header/nav.vue'
  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {
    name: 'my',
    data() {
      return {
        msg: '个人中心'
      }
    },
    computed: {
      ...mapState({
        userDate: state => state.User.user,
      })
    },
    components: {
      'v-footer': footer,
      'v-nav': nav

    },
    methods: {
      address() {
        var self = this;
        self.userState1().then(function (result) {
          var userState = result
          if (userState) {
            self.$router.push({name: 'Address'})
          }
        })
      },
      ...mapActions([
        'userState1', 'playIndexState1'
      ]),
    },
    mounted() {
      this.$nextTick(function () {

      })

    },
  }
</script>

<style scoped>
  .personal-center {
    width: 100%;
    height: 100%;
    margin-top: 44px;
  }

  .personal-center .personal-header {
    position: relative;
    font-size: 1.2rem;
    text-align: center;
    /*background-color: #8B87C1;*/
    color: #ECEFEE;
    padding: 0rem 1rem;
    z-index: 10;
  }
  .personal-center .personal-header .personal-headerBg{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0%;
    top: 0%;
    background-image: url("/static/img/women.ef4f306.jpeg");
    opacity: 0.3;
  }

  .personal-center .personal-header .person-tit {
    font-size: 1.3rem;
    padding: 0.6rem 0;
    border-bottom: 1px dashed #40584A;
  }

  .personal-center .personal-header .personal-message {
    position: relative;
    z-index: 100;
  }

  .personal-center .personal-header .personal-message .stroge-info {
    position: relative;
    padding: 2rem 2rem;
    display: -webkit-box;
  }

  .personal-center .personal-header .personal-message .stroge-info .header-img {
    width: 5rem;
    height: 5rem;
    overflow: hidden;
    margin-right: 1.8rem;
    border: 2px solid #ffffff;
    border-radius: 50%;
  }

  .personal-center .personal-header .personal-message .stroge-info .header-img img {
    width: 100%;
    vertical-align: top;
  }

  .personal-center .personal-header .personal-message .stroge-info .lines {
    width: 2px;
    height: 3rem;
    background-color: #fff;
    margin-top: 2rem;
  }

  .personal-center .personal-header .personal-message .stroge-info .info-txt {
    padding: 2rem 0 0 1rem;
    position: relative;
  }

  .personal-center .personal-header .personal-message .stroge-info .info-txt p:first-child {
    color: #ffffff;
    font-size: 1rem;
    padding-bottom: 6px;
  }

  .personal-center .personal-header .personal-message .stroge-info .info-txt p:last-child {
    color: #717158;
    font-size: 1rem;
    text-align: left;
  }

  .personal-center .order-box {
  }

  .personal-center .order-box .myorder {
    border-bottom: 1px dashed #C3B9AA;
    overflow: hidden;
    font-size: 1rem;
    color: #1E473D;
    margin-top: 1rem;
  }

  .personal-center .order-box .myorder a {
    overflow: hidden;
    height: 3rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    align-content: center;
    -webkit-box-justify: space-between;
    justify-content: space-between;
  }

  .personal-center .order-box .myorder a div {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    align-content: center;
  }

  .personal-center .order-box .myorder a div i {
    font-size: 1.6rem;
    color: #A39073;
  }

  .personal-center .order-box .myorder a div:first-child i {
    margin-right: 0.5rem;
  }

  .personal-center .order-box .list-type {
    height: 6rem;
    padding: 0.8rem 0;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    margin: 0.5rem 0 0 0;
  }

  .personal-center .order-box .list-type div {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    border-right: 1px solid #cecece;
  }

  .personal-center .order-box .list-type div:last-child {
    border: none;
  }

  .personal-center .order-box .list-type a {
    color: #010101;
    display: block;
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    position: relative;
  }

  .personal-center .order-box .list-type a i {
    color: #998565;
    display: block;
    position: relative;
    top: 0;
    font-size: 2.6rem;
    margin-bottom: 0.5rem;
  }

  .personal-center .order-box .list-type a svg {
    display: block;
    position: relative;
    top: 0;
    font-size: 2.6rem;
    margin-bottom: 0.5rem;
  }

  .personal-center .order-box .list-type a i:before {
    position: relative;
    top: 4px;
  }

  .personal-center .order-box .list-type a b {
    position: absolute;
    top: 0;
    right: 0rem;
    width: 1.6rem;
    height: 1.6rem;
    line-height: 1.6rem;
    background-color: #E54239;
    color: #ffffff;
    border-radius: 50%;
  }

  .personal-center .order-box .other-list {
    color: #676767;
    margin: 1rem;
  }

  .personal-center .order-box .other-list li:first-child {
    border-top: 1px dashed #C3B9AA;
  }

  .personal-center .order-box .other-list li {
    border-bottom: 1px dashed #C3B9AA;
    width: 100%;
  }

  .personal-center .order-box .other-list a {
    height: 3rem;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    align-content: center;
    -moz-justify-content: space-between;
    -webkit-justify-content: space-between;
    justify-content: space-between;
  }

  .personal-center .order-box .other-list a div {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -moz-align-items: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .personal-center .order-box .other-list a div i {
    font-size: 1.6rem;
    color: #A39073;
  }

  .personal-center .order-box .other-list a div svg {
    font-size: 1.6rem;
    margin-right: 1rem;
  }

  .personal-center .order-box .other-list a div span {
    font-size: 1.1rem;
  }

  .personal-center .order-box .other-list a div:first-child i {
    margin-right: 0.5rem;
  }
</style>
