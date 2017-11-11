<template>
  <div class="login">

    <div class="login_bg">
      <i @click="returnI" class="returnI iconfont gj-back"></i>
      <div class="login_con">
        <div class="div_gorund1">
          <img class="login_img" src="../../../static/images/women.jpeg" alt="">
        </div>
        <div class="div_gorund">
          <i class="iconfont gj-wode1"></i>
          <input type="text" v-model="userName" class="username" placeholder="Username">
          <p :style="userNameDis" class="redText">{{userNameText}}</p>
        </div>
        <div class="div_gorund">
          <i class="iconfont gj-daishouhuo"></i>
          <input type="password" v-model="passWord" class="password" placeholder="Password">
          <p :style="passWordDis" class="redText">请输入正确的登录密码</p>
        </div>
        <div class="div_gorund">
          <div class="title">
            <span>忘记密码?</span>
            <router-link to="/login/register"><span>注册</span></router-link>
            <router-view></router-view>
          </div>
        </div>
        <div class="div_gorund">
          <button @click="loginBtn" type="button">登 陆</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {
    name: 'login',
    data() {
      return {
        userName: "",

        userNameDis: {
          display: "none"
        },
        userNameText:"请输入您的用户名",

        passWord: "",
        passWordDis: {
          display: "none"
        },
      }
    },
    computed: {
      ...mapState({
        user: state => state.User.user,
      })

    },
    methods: {
      returnI() {
        this.$router.go(-1)
      },
      returnMain() {
        this.$router.push({path:'/'})
      },
      loginBtn() {
        var self = this
        console.log(this.userName)
        console.log(this.passWord)

        if (!this.userName) {
          this.userNameDis.display = "block";
        }
        if (!this.passWord) {
          this.passWordDis.display = "block";
        }

        if (this.userName && this.passWord) {
          $.ajax({
            type: "POST",
            url: "http://localhost:3000/timorsLogin",
            data: {
              username: this.userName,
              password: this.passWord
            },
            success: function (data) {
              switch (data) {
                case "1":
                  self.userNameDis.display = "block";
                  self.userNameText="请输入正确的用户名"
                  break;
                case "2":
                  console.log("登陆失败")
                  break;
                default :
                  console.log(data)
                  console.log(JSON.stringify(data))
                  sessionStorage.setItem('user',JSON.stringify(data));
                  self.returnMain();
                  break;
              }
            }

          })
        }

      },
    },
    watch: {
      userName(val){
        if(val)
          this.userNameDis.display = "none";
        else
          this.userNameDis.display = "block";
      },
      passWord(val){
        if(val)
          this.passWordDis.display = "none";
        else
          this.passWordDis.display = "block";
      },
  },

  }
</script>

<style scoped>

  input:-ms-input-placeholder {
    color: #549EA1;
    background-color: #fff;
  }

  input::-webkit-input-placeholder {
    color: #549EA1;
    background-color: #fff;
  }

  input::-moz-placeholder {
    color: #549EA1;
    background-color: #fff;
  }

  .login_bg {
    position: fixed;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.8;
    z-index: 2000;
  }

  .returnI {
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

