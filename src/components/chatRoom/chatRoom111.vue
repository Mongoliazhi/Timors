<template>
  <div class="chatRoom">
    <router-view></router-view>

    <v-nav :nav-name="'聊天室'" :nav-num="0"></v-nav>
    <div class="cr_content">
      <div class="crCont crCont_left">
        <div class="crCont_img"><img src="../../../static/images/qq.png" alt=""></div>
        <div class="crCont_cont">
          <p class="p1">中国队加油</p>
        </div>
      </div>
      <div class="crCont crCont_left">
        <div class="crCont_img"><img src="../../../static/images/qq.png" alt=""></div>
        <div class="crCont_cont">
          <div class="voice">
            <div class="img2">
              <img src="../../../static/images/women.jpeg" alt="">
            </div>
            <p class="voice_s">2″</p>
          </div>
        </div>
      </div>
      <div class="crCont crCont_left">
        <div class="crCont_img"><img src="../../../static/images/women.jpeg" alt=""></div>
        <div class="crCont_cont">
          <p class="p1">中国队加油中国队加油</p>
        </div>
      </div>
      <div class="crCont crCont_left">
        <div class="crCont_contC">
          <p>星期三 下午09:00</p>
        </div>
      </div>
      <div class="crCont crCont_left">
        <div class="crCont_contC">
          <p>用户M进入房间</p>
        </div>
      </div>
      <div class="crCont crCont_right">
        <div class="crCont_img"><img src="../../../static/images/qq.png" alt=""></div>
        <div class="crCont_cont1">
          <p class="p1">中国队加油中国队加油</p>
        </div>
      </div>
      <div class="crCont crCont_right">
        <div class="crCont_img"><img src="../../../static/images/qq.png" alt=""></div>
        <div class="crCont_cont1">
          <div class="img1">
            <img src="../../../static/images/qq.png" alt="">
          </div>
        </div>
      </div>
      <div class="crCont crCont_left">
        <div class="crCont_img"><img src="../../../static/images/qq.png" alt=""></div>
        <div class="crCont_cont">
          <div class="img1">
            <img src="../../../static/images/qq.png" alt="">
          </div>
        </div>
      </div>

      <div class="crCont crCont_right">
        <div class="crCont_img"><img src="../../../static/images/qq.png" alt=""></div>
        <div class="crCont_cont1">
          <div class="voice">
            <div class="img2">
              <img src="../../../static/images/qq.png" alt="">
            </div>
            <p class="voice_s">2″</p>
          </div>
        </div>
      </div>
      <div class="crCont crCont_left">
        <div class="crCont_img"><img src="../../../static/images/qq.png" alt=""></div>
        <div class="crCont_cont">
          <div class="img1">
            <img src="../../../static/images/qq.png" alt="">
          </div>
        </div>
      </div>

      <div class="crCont crCont_right">
        <div class="crCont_img"><img src="../../../static/images/qq.png" alt=""></div>
        <div class="crCont_cont1">
          <div class="voice">
            <div class="img2">
              <img src="../../../static/images/qq.png" alt="">
            </div>
            <p class="voice_s">2″</p>
          </div>
        </div>
      </div>


    </div>

    <div class="charRoom_foot">
      <div class="cr_fa">
        <div class="cr_div1">
          <img src="../../../static/images/shuohua.png" alt="">
        </div>
        <div class="cr_div2">
          <input type="text">
        </div>
        <div class="cr_div1">
          <img src="../../../static/images/biaoqing.png" alt="">
        </div>
        <div class="cr_div1">
          <img src="../../../static/images/add1.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {mapState, mapGetters, mapActions} from 'vuex'
  import nav from '../header/nav.vue'

  export default {
    name: 'chatRoom',
    data() {
      return {
        msg: '购物车'
      }
    },
    computed: {
      ...mapState({
        userDate: state => state.User.user,
      })
    },
    components: {
      'v-nav': nav
    },
    watch: {},
    methods: {},
    mounted() {
      var self = this;
      this.$nextTick(function () {
        this.$socket.emit('message', "1213123123111");
        this.$socket.on('news', function ($res) {
          console.log("0-90-0-0")
          console.log($res)
        });
      })
    },
  }
</script>

<style scoped>
  .chatRoom {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: #fff;
    margin-top: 3rem;
    overflow: auto;
  }

  /*聊天房间*/

  .cr_content {
    width: 100%;
    margin-bottom: 3rem;
    padding-bottom: 3rem;
  }

  .crCont {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    /*-webkit-flex-direction: row;*/
    /*flex-direction: row;*/
    padding: 0.5rem;
  }

  .crCont_img {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .crCont_img img {
    width: 100%;
  }

  .crCont_cont {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 7;
    -webkit-flex: 7;
    flex: 7;
    -webkit-flex-direction: row;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1rem;
  }

  .crCont_cont .p1 {
    position: relative;
    background-color: #fff;
    padding: 0.5rem;
    border-radius: 5px;
  }

  .crCont_cont .p1::before {
    position: absolute;
    top: 50%;
    margin-top: -0.4rem;
    left: -0.7rem;
    content: '';
    border-width: 0.4rem 0.4rem 0.4rem 0.4rem;
    border-style: solid;
    border-color: transparent #fff transparent transparent;
  }

  .crCont_cont .img1 {
    position: relative;
    border-radius: 0.5rem;
    text-align: left;
  }

  .crCont_cont .img1::before {
    position: absolute;
    top: 50%;
    margin-top: -0.4rem;
    left: -0.7rem;
    content: '';
    border-width: 0.4rem 0.4rem 0.4rem 0.4rem;
    border-style: solid;
    border-color: transparent #000 transparent transparent;
  }

  .crCont_cont .img1 img {
    width: 40%;
  }

  .crCont_cont .voice {
    position: absolute;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-right: 1rem;
  }

  .crCont_cont .img2 {
    position: relative;
    width: 2rem;
    height: 2rem;
    border-radius: 5px;
    background-color: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .crCont_cont .img2::before {
    position: absolute;
    top: 50%;
    margin-top: -0.4rem;
    left: -0.7rem;
    content: '';
    border-width: 0.4rem 0.4rem 0.4rem 0.4rem;
    border-style: solid;
    border-color: transparent #fff transparent transparent;
  }

  .crCont_cont .img2 img {
    width: 60%;
  }

  .crCont_cont .voice .voice_s {
    margin-left: 0.5rem;
  }

  .crCont_cont1 {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 7;
    -webkit-flex: 7;
    flex: 7;
    -webkit-flex-direction: row-reverse;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-start;
    padding-right: 1rem;
  }

  .crCont_cont1 .p1 {
    position: relative;
    background-color: #1D81CF;
    color: #fff;
    padding: 0.5rem;
    border-radius: 5px;
  }

  .crCont_cont1 .p1::before {
    position: absolute;
    top: 50%;
    margin-top: -0.4rem;
    right: -0.7rem;
    content: '';
    border-width: 0.4rem 0.4rem 0.4rem 0.4rem;
    border-style: solid;
    border-color: transparent transparent transparent #1D81CF;
  }

  .crCont_cont1 .img1 {
    position: relative;
    border-radius: 0.5rem;
    text-align: right;
  }

  .crCont_cont1 .img1::before {
    position: absolute;
    top: 50%;
    margin-top: -0.4rem;
    right: -0.7rem;
    content: '';
    border-width: 0.4rem 0.4rem 0.4rem 0.4rem;
    border-style: solid;
    border-color: transparent transparent transparent #000;
  }

  .crCont_cont1 .img1 img {
    width: 40%;
  }

  .crCont_cont1 .voice {
    position: absolute;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row-reverse;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-start;
  }

  .crCont_cont1 .img2 {
    position: relative;
    width: 2rem;
    height: 2rem;
    border-radius: 5px;
    background-color: #1D81CF;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .crCont_cont1 .img2::before {
    position: absolute;
    top: 50%;
    margin-top: -0.4rem;
    right: -0.7rem;
    content: '';
    border-width: 0.4rem 0.4rem 0.4rem 0.4rem;
    border-style: solid;
    border-color: transparent transparent transparent #1D81CF;
  }

  .crCont_cont1 .img2 img {
    width: 60%;
  }

  .crCont_cont .voice .voice_s {
    margin-right: 0.5rem;
  }

  .crCont_contC {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -webkit-flex-direction: row;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .crCont_contC p {
    background-color: #ABACB0;
    color: #fff;
    padding: 0.5rem;
    border-radius: 5px;
  }

  .crCont_left {
    -webkit-flex-direction: row;
    flex-direction: row;
  }

  .crCont_right {
    -webkit-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }

  .charRoom_foot {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
  }

  .cr_fa {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
  }

  .cr_div1 {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0.2rem;
  }

  .cr_div1 img {
    width: 100%;
  }

  .cr_div2 {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 6;
    align-items: center;
    justify-content: center;

  }

  .cr_div2 input {
    width: 100%;
    height: 80%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0;
    margin-bottom: 0;
  }
</style>
