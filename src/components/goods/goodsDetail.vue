<template>
  <div class="goodsDetail">
    <div class="fly_start"></div>

    <div id="slider" class="mui-slider">
      <div class="mui-slider-group mui-slider-loop">
        <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
        <!--<div class="mui-slider-item mui-slider-item-duplicate">-->
        <!--<a href="#">-->
        <!--<img :src="goodsDetail.imageUrlArr | getImgOne">-->
        <!--</a>-->
        <!--</div>-->

        <template v-for="(item,index) in goodsDetail.imageUrlArr">
          <template v-if="index == 3">
            <div class="mui-slider-item mui-slider-item-duplicate">
              <img :src="item | getImgOne">
              <span>{{index}}</span>
            </div>
          </template>
        </template>

        <template v-for="(item,index) in goodsDetail.imageUrlArr">
          <div class="mui-slider-item">
            <img :src="item | getImgOne">
            <span>{{index}}</span>
          </div>
        </template>

        <template v-for="(item,index) in goodsDetail.imageUrlArr">
          <template v-if="index == 0">
            <div class="mui-slider-item mui-slider-item-duplicate">
              <img :src="item | getImgOne">
              <span>{{index}}</span>
            </div>
          </template>
        </template>

        <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
        <!--<div class="mui-slider-item mui-slider-item-duplicate">-->
        <!--<a href="#">-->
        <!--<img :src="goodsDetail.imageUrlArr[0] | getImgOne">-->
        <!--</a>-->
        <!--</div>-->
      </div>
      <div class="mui-slider-indicator">
        <!--<div class="mui-indicator mui-active"></div>-->
        <!--<div class="mui-indicator"></div>-->
        <!--<div class="mui-indicator"></div>-->
        <!--<div class="mui-indicator"></div>-->
        <template v-for="(item,index) in goodsDetail.imageUrlArr">
          <template v-if="index == 0">
            <div class="mui-indicator mui-active"></div>
          </template>
          <template v-else>
            <div class="mui-indicator"></div>
          </template>
        </template>
      </div>
    </div>

    <div class="gd">
      <div class="couponS_head">
        <div @click="gdSelect(1,$event)" class="couponS_head_div"><span class="act">基本信息</span></div>
        <div @click="gdSelect(2,$event)" class="couponS_head_div"><span>商品详情</span></div>
        <div @click="gdSelect(3,$event)" class="couponS_head_div"><span>全部评价(1)</span></div>
      </div>
      <div :style="gdDetail" class="gdDetail">
        <div class="gdDetail1">
          <p> {{goodsDetail.goods_name}}</p>
          <p>
            <span class="goods_price">¥{{goodsDetail.goods_Sprice}}</span>
            <del>¥{{goodsDetail.goods_Yprice}}</del>
          </p>
          <p class="xl">销量:{{goodsDetail.goods_num}}</p>

          <div class="purchase_div">
            <div class="purchase_div_heade"><h4>规格</h4></div>
            <div class="purchase_div_con">
              <ul class="purchase_div_con_ul">
                <li class="p_Selected">142g
                </li>
              </ul>
            </div>
          </div>
          <div class="purchase_div">
            <div class="purchase_div_heade"><h4>数量</h4>
              <p class="box">
                <span @touchend="add_btn(1)" id="reduce">-</span>
                <input v-model="add_btn_num" disabled="disabled" id="num" type="text" value="">
                <span @touchend="add_btn(2)" id="add">+</span></p></div> <!----></div>
        </div>
      </div>
      <div :style="gdDetail2" class="gdDetail" v-html="goodsDetail.goods_content">{{goodsDetail.goods_content}}</div>
      <div :style="gdDetail3" class="gdDetail">
        <div class="gdDetail1">
          暂无评价
        </div>
      </div>
    </div>

    <v-goodsFfooter></v-goodsFfooter>
  </div>
</template>

<script>


  import goodsFooter from '../footer/goodsFooter.vue'
  import * as _ from '../../config/fetch'
  import filter from '../../config/filter'

  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {
    name: 'goodsDetail',
    data() {
      return {
        goodsId: this.$route.params.goodsId,
        goodsDetail: [],
        segmentedControl: null,
        gdDetail: {
          display: "block"
        },
        gdDetail2: {
          display: "none"
        },
        gdDetail3: {
          display: "none"
        },

        add_btn_num:1, //加入购物车的数量
      }
    },
    computed: {},
    components: {
      'v-goodsFfooter': goodsFooter
    },
    watch: {
      goodsDetail() {
        this.$nextTick(() => {
          mui.init({
            swipeBack: true //启用右滑关闭功能
          });
          var slider = mui("#slider");
          slider.slider({
            interval: 3000
          });
        })
      }
    },
    methods: {
//      基本信息 商品信息 评价 ---》选择
      gdSelect(index, e) {
        var self = this;
        var el = e.target;

        $(".couponS_head div").each(function () {
          $(this).find("span").removeAttr("class")
        })
        el.className = "act";

        switch (index) {
          case 1:
            self.gdDetail.display = "block"
            self.gdDetail2.display = "none"
            self.gdDetail3.display = "none"
            break;
          case 2:
            self.gdDetail.display = "none"
            self.gdDetail2.display = "block"
            self.gdDetail3.display = "none"
            break;
          case 3:
            self.gdDetail.display = "none"
            self.gdDetail2.display = "none"
            self.gdDetail3.display = "block"
            break;
        }
      },
      add_btn: function (index) {
        var self = this;
        console.log(index)
        console.log(this.add_btn_num)
        if (index == 1) {
          if (self.add_btn_num < 2) {
            return false
          } else {
            self.add_btn_num--
          }
        } else {
          if (self.add_btn_num > 20) {
            alert("error")
          } else {
            self.add_btn_num++
          }
        }
      },
      handleScroll: function () {
        var self = this;
//        console.log($(window).scrollTop())
        if ($(window).scrollTop() >= self.segmentedControl) {
          $(".couponS_head").css({
            "position": "fixed",
            "background": "#fff",
            "top": "0%",
            "left": "0%",
            "z-index": "20"
          })

          $(".mui-content").css({
            "padding": "2rem 0 5rem 0",
          })
        } else {
          $(".couponS_head").css({
            "position": "initial",
            "background": "initial",
            "top": "initial",
            "left": "initial",
          })
          $(".mui-content").css({
            "padding": "initial",
          })
        }
      },
      addEventListener: function () {
        window.addEventListener('scroll', this.handleScroll);
      },
      getGoodsDetail() {
        var self = this;
        _.fetch("/getGoodsDetail", {
          goodsId: self.goodsId
        }).then(($res) => {
          console.log($res)
          self.goodsDetail = $res.data.data[0];

          self.goodsDetail.imageUrlArr = [];
          self.goodsDetail.goods_picArr = (self.goodsDetail.goods_picArr.split(","));

//                            处理 轮播图 为空的去除
          for (var i = 0; i < self.goodsDetail.goods_picArr.length; i++) {
            if (self.goodsDetail.goods_picArr[i]) {
              (self.goodsDetail.imageUrlArr).push(self.goodsDetail.goods_picArr[i])
            }
          }

          console.log(self.goodsDetail.imageUrlArr)

        }).catch((error) => {
          console.log(error)
        })
      },

      joinCar() {
        var self = this;

        var fly_start = $('.fly_start').offset()

        var fly_end = $('.fly_end').offset();
        var winW = $(window).width()
        var winH = $(window).height()
        console.log(fly_start)

        var flyer = $('<img ' +
          'class="flyer_img" style="width:5rem;height: 5rem;border-radius:50%;position:relative;z-index: 20000" ' +
          'src="http://localhost:3000/timors/upload_29708189915384ce9516f08eb874d24d.jpg"/>')

        flyer.fly({
          start: {
            left: winW,//抛物体起点横坐标
            top: winH / 3 //抛物体起点纵坐标
          },
          end: {
//            left: $(".fly_end").width() * 2,//抛物体终点横坐标
            left: 0,//抛物体终点横坐标
            top: winH, //抛物体终点纵坐标
            width: 15,
            height: 15,
          },
          onEnd: function () {
            this.destroy(); //销毁抛物体
          }
        });
      }

    },
    mounted() {
      var self = this;
      this.$nextTick(() => {
        self.segmentedControl = $(window).width()

        self.addEventListener(); //监听滚动
        self.getGoodsDetail(); //获取商品详情

        $("#slider").height($(window).width())
        $("#slider img").height($(window).width())

        $('#scroll').scroll({
          indicators: true //是否显示滚动条
        });
        console.log(this.$route)


      })
    },
  }
</script>

<style scoped>
  .fly_start {
    position: fixed;
    right: 0;
    top: 0;
    width: 3rem;
    height: 3rem;
    z-index: 1000;
  }

  .fly_start img {
    width: 3rem;
    height: 3rem;
  }

  .goodsDetail {
    margin-bottom: 4rem;
  }

  .gd {

  }

  .couponS {
    width: 100%;
    margin-top: 4rem;
    padding: 0 0.5rem;
  }

  .couponS_head {
    width: 100%;
    padding: 0.5rem;
    overflow: auto;
  }

  .couponS_head .couponS_head_div {
    float: left;
    width: 33.33%;
    text-align: center;
    font-size: 1rem;
    font-weight: 100;
    color: #dd524d;
  }

  .couponS_head .couponS_head_div span {
    display: inline-block;
    width: 100%;
    padding: 0.3rem 0;
  }

  .couponS_head .couponS_head_div .act {
    border-bottom: 2px solid #dd524d;
  }

  .gdDetail {

  }

  .gdDetail1 {
    padding: 0.5rem 1rem;
  }

  .goods_price {
    font-size: 1.2rem;
    color: #dd524d;
  }

  .gdDetail .xl {
    color: #333;
  }

  .purchase_div {
    width: 100%;
    padding: 0.5rem 0;
    border-top: 1px dashed #cab644;
  }

  .purchase_div .purchase_div_heade {
    width: 100%;
    padding: 0.5rem 0;
    overflow: auto;
  }

  .purchase_div .purchase_div_heade h4 {
    font-weight: normal;
    float: left;
    font-size: 1.2rem;
  }

  .purchase_div .purchase_div_heade i {
    float: right;
  }

  .purchase_div .purchase_div_heade .add-btn {
    float: right;
    height: 2.5rem;
  }

  .purchase_div .purchase_div_heade .add-btn button {
    float: left;
    width: 3rem;
    padding: 0;
    height: 100%;
    line-height: 2.5rem;
    text-align: center;
    border: 1px solid #4A6C63;
    background-color: #fff;
    color: #4A6C63;
    font-size: 1.5rem;
  }

  .purchase_div .purchase_div_heade .add-btn .btn1 {
    border-radius: 1rem 0 0 1rem;
    border-right: none;
  }

  .purchase_div .purchase_div_heade .add-btn .btn2 {
    border-left: none;
    border-radius: 0 1rem 1rem 0;
  }

  .purchase_div .purchase_div_heade .add-btn span {
    display: block;
    height: 100%;
    line-height: 2.5rem;
    float: left;
    padding: 0 1.5rem;
    text-align: center;
    border: 1px solid #4A6C63;
    background-color: #fff;
    color: #4A6C63;
  }

  .purchase_div .purchase_div_heade .box {
    float: right;
  }

  .purchase_div .purchase_div_heade #reduce, .purchase_div .purchase_div_heade #add {
    float: left;
    display: inline-block;
    width: 40px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #eee;
    background-color: #fff;
  }

  .purchase_div .purchase_div_heade #num {
    float: left;
    height: 30px;
    line-height: 30px;
    width: 40px;
    border: 1px solid #eee;
    text-align: center;
  }

  .purchase_div .purchase_div_heade #num:disabled {
    -webkit-text-fill-color: #000;
    -webkit-opacity: 1;
    border: 1px solid #eee;
    background-color: #fff;
  }

  .purchase_div .purchase_div_con {
    width: 100%;
  }

  .purchase_div .purchase_div_con ul {
    width: 100%;
    overflow: auto;
  }

  .purchase_div .purchase_div_con ul li {
    position: relative;
    float: left;
    margin: 0.3rem 0.3rem 0.3rem 0;
    font-size: 0.8rem;
    text-align: center;
    border-radius: 1rem;
    padding: 0.3rem 0.5rem;
    overflow: hidden;
  }

  .purchase_div .purchase_div_con ul .p_normal {
    color: #2d806d;
    border: 1px solid #2d806d;
  }

  .purchase_div .purchase_div_con ul .p_Selected {
    color: #fff;
    border: 1px solid #E54138;
    background-color: #E54138;
  }

  .purchase_div .purchase_div_con ul .p_Unchecked {
    color: #fff;
    border: 1px solid #AFAFAF;
    background-color: #AFAFAF;
  }

  .purchase_div .purchase_div_con ul .hashd {
    border-bottom: none;
  }
</style>
