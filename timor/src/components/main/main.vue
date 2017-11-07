<template>
  <div class="main">
    <div class="index_header">
      <div class="index_line_fa">
        <p class="index_line"></p>
      </div>
      <div class="index_con">
        <div class="index_son_bg"></div>
        <div class="index_son">
          <div class="index_conImg" @click="userLogin">
            <img src="../../../static/images/women.jpeg" alt="">
          </div>
          <p class="index_conP">
            <em><span>Timor</span>狮</em>
            <i>Timors，整装待发</i>
          </p>
          <div class="index_conDiv">
            <a href="search.html"><input type="text" disabled="disabled" placeholder=""></a>
            <i class="iconfont gj-search"></i>
          </div>
        </div>
      </div>
    </div>

    <div id="slider" class="mui-slider">
      <div class="mui-slider-group mui-slider-loop">
        <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <a href="#">
            <img src="../../../static/images/yuantiao.jpg">
          </a>
        </div>
        <!-- 第一张 -->
        <div class="mui-slider-item">
          <a href="#">
            <img src="../../../static/images/shuijiao.jpg">
          </a>
        </div>
        <!-- 第二张 -->
        <div class="mui-slider-item">
          <a href="#">
            <img src="../../../static/images/muwu.jpg">
          </a>
        </div>
        <!-- 第三张 -->
        <div class="mui-slider-item">
          <a href="#">
            <img src="../../../static/images/cbd.jpg">
          </a>
        </div>
        <!-- 第四张 -->
        <div class="mui-slider-item">
          <a href="#">
            <img src="../../../static/images/yuantiao.jpg">
          </a>
        </div>
        <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
        <div class="mui-slider-item mui-slider-item-duplicate">
          <a href="#">
            <img src="../../../static/images/shuijiao.jpg">
          </a>
        </div>
      </div>
      <div class="mui-slider-indicator">
        <div class="mui-indicator mui-active"></div>
        <div class="mui-indicator"></div>
        <div class="mui-indicator"></div>
        <div class="mui-indicator"></div>
      </div>
    </div>

    <div class="mui-content">
      <div id="Gallery" class="mui-slider">
        <div class="mui-slider-group">
          <div class="mui-slider-item">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <img src="../../../static/images/yuantiao.jpg">
                  <div class="mui-media-body">Home</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                  <div class="mui-media-body">Email</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-chatbubble"></span>
                  <div class="mui-media-body">Chat</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-location"></span>
                  <div class="mui-media-body">location</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-search"></span>
                  <div class="mui-media-body">Search</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="mui-icon mui-icon-phone"></span>
                  <div class="mui-media-body">Phone</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mui-row">
        <template v-for="v in goodsList">
          <div class="mui-col-xs-6">
            <div class="mui-card" style="margin: 5px;">
              <div class="mui-card-header mui-card-media">
                <img style="width: 100%;height: 100%" :src="v.goods_picArr | img_desp | img_url">
              </div>
              <div class="mui-card-content">
                <div class="mui-card-content-inner">
                  <p>{{v.goods_addTime | time1}}</p>
                  <p style="width:100%;height:63px;color: #333;overflow:hidden;
            text-overflow:ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;">{{v.goods_name}}</p>
                </div>
              </div>
              <div class="mui-card-footer">
                <a class="mui-card-link">喜欢</a>
                <a class="mui-card-link">Read more</a>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <v-footer message="main"></v-footer>
  </div>
</template>

<script>
  import axios from 'axios'
  import fetch from '../../fetch/api'
  import Mock from  'mockjs'

  import footer from '../footer/footer.vue'
  import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

  export default {
    name: 'main',
    data () {
      return {
        goodsList: [],

      }
    },
    computed: {
      ...mapState({
        userDate: state => state.User.user
      }),

    },
    components: {
      'v-footer': footer
    },
    methods: {

      menu: function () {
        var height = 100
        this.scroll = $(window).scrollTop();
        if (this.scroll >= height) {
          $(".index_conImg").hide()
          $(".index_conP").hide()
          $(".index_conDiv a").css("width", "100%")
          $(".index_conDiv i").css("top", "28%")
          $(".index_conDiv input").attr({
            "placeholder": "请输入关键字"
          })
        } else {
          $(".index_conImg").show()
          $(".index_conP").show()
          $(".index_conDiv i").css("top", "34%")
          $(".index_conDiv input").attr({
            "placeholder": ""
          })
        }
      },
      ...mapMutations([
        'isLogin',
      ]),
      userLogin:function () {
        this.isLogin()
      },
    },
    watch: {
      goodsList: function () {
        this.$nextTick(function () {
          $(".mui-card-media").height($(".mui-card-media").width())
        })
      },
      userDate: function (val) {
        console.log(val)
        if (val.name) {
          console.log("用户已登录")
        } else {
          console.log("用户未登录")
        }
      }
    },
    mounted(){
      var self = this;
      this.$nextTick(function () {
//          监听滚动
        window.addEventListener('scroll', self.menu);

        /*axios.get('http://localhost:4000/mainGoodsList')
         .then(function ($res) {
         console.log($res)
         self.goodsList = JSON.parse($res.data);
         }).catch(function (error) {
         console.log(error);
         })

         fetch.Login({
         index :1
         })
         .then(res => {
         console.log("成功了")
         console.log(res)

         })
         .catch(error => {
         console.log(error)
         })*/

//      切换导航栏背景颜色
        setInterval(function () {
          $(".index_son_bg").css("background-color", Mock.mock('@color'))
        }, 3000)

        mui.init({
          swipeBack: false //启用右滑关闭功能
        });
        var slider = mui("#slider");
        slider.slider({
          interval: 3000
        });

      })
    },


  }
</script>

<style scoped>
  .index_line_fa {
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 2px;
  }

  .index_line {
    position: absolute;
    left: 0%;
    top: 0%;
    width: 200%;
    background: linear-gradient(to right, #DF9E49, #EDD87B, #E8B659, #DA9D42, #FCECCB, #FFFFFD, #EDCF81, #E6BD6B, #C77625);
    height: 100%;
    animation: mymove 5s infinite linear;
    -webkit-animation: mymove 5s infinite linear;
  }

  @keyframes mymove {
    0% {
      left: 0%;
    }
    100% {
      left: -100%;
    }
  }

  .index_header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
  }

  .index_header .index_con {
    width: 100%;
    overflow: auto;
    padding: 0.5rem;
  }

  .index_header .index_son_bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: mediumvioletred;
    opacity: 0.7;
    z-index: 101;
  }

  .index_son {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
    z-index: 102;
  }

  .index_son .index_conImg {
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .index_son .index_conImg img {
    width: 100%;
    border-radius: 50%;
  }

  .index_son .index_conP {
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 2;
    flex-direction: column;
    justify-content: center;
  }

  .index_son .index_conP em {
    color: #fff;
    font-size: 16px;
  }

  .index_son .index_conP em span {
    color: #01CFCF;
  }

  .index_son .index_conP i {
    font-size: 12px;
    color: #fff;
  }

  .index_son .index_conDiv {
    display: flex;
    position: relative;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 3;
    flex-direction: column;
    justify-content: center;
  }

  .index_son .index_conDiv input {
    margin-bottom: 0;
  }

  .index_son .index_conDiv i {
    position: absolute;
    right: 5px;
    top: 34%;
  }
</style>

