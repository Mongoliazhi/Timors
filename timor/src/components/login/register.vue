<template>
  <div class="register">
    <i @click="returnI" class="returnI iconfont gj-back"></i>
    <div class="login_con">
      <div class="div_gorund1">
        <img class="login_img" src="../../../static/images/women.jpeg" alt="">
      </div>
      <div class="div_gorund">
        <i class="iconfont gj-wode1"></i>
        <input type="text" v-model="userName" class="username" placeholder="您的名字">
      </div>
      <div class="div_gorund">
        <i class="iconfont gj-daishouhuo"></i>
        <input type="password" name="password1" class="password" placeholder="您的密码">
      </div>
      <div class="div_gorund">
        <i class="iconfont gj-daishouhuo"></i>
        <input type="password" name="password2" class="password" placeholder="再次输入您的密码">
        <!--<p class="redText">请输入正确的登录密码</p>-->
      </div>
      <div class="div_gorund">
        <i class="iconfont gj-daishouhuo"></i>
        <input type="password" name="password2" class="password" placeholder="您的手机号">
        <!--<p class="redText">请输入正确的登录密码</p>-->
      </div>
      <div class="div_gorund">
        <button type="button">注 册</button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {
    name: 'login',
    data () {
      return {
          userName: ""
      }
    },
    computed: {
      ...mapState({
        user: state => state.User.user,
      })

    },
    methods:{
      returnI(){
        this.$router.go(-1)
      }
    }

  }
</script>

<style scoped>

  input:-ms-input-placeholder{color:#549EA1;}
  input::-webkit-input-placeholder{color:#549EA1;}
  input::-moz-placeholder{color:#549EA1;}
  .register {
    position: fixed;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    background-color: #000;
    /*opacity: 0.8;*/
    z-index: 2001;
  }
  .returnI{
    position: absolute;
    left: 1rem;
    top: 1rem;
    font-size: 2rem;
    color: #fff;
  }

  .login_con {
    margin-top: 12%;
    margin-left: 10%;
    width: 80%;
    height: 100%;
  }

  .div_gorund1 {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }

  .div_gorund1 .login_img {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
  }

  .div_gorund {
    position: relative;
    width: 100%;
    margin: 1rem 0;
  }

  .div_gorund i {
    position: absolute;
    left: 1rem;
    top: 0.7rem;
    color: #fff;
  }

  .div_gorund input {
    padding-left: 3rem;
    color: #fff;
    background-color: transparent;
    border-bottom: 1px solid #c3b6b6;
  }
  .div_gorund .redText {
    color: #e82424;
    font-size: 12px;
  }


  .div_gorund .title {
    width: 100%;
    color: #fff;
    overflow: auto;
    font-size: 14px;
  }

  .div_gorund .title span:first-child {
    float: left;
  }

  .div_gorund .title span:last-child {
    float: right;
  }

  .div_gorund button {
    width: 100%;
    background-color: #f5839d;
    border: none;
    color: #fff;
    border-radius: 4rem;
    padding: 0.7rem 0;
  }
</style>

