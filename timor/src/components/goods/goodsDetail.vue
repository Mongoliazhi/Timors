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

    <div class="mui-content">
      <div style="padding: 10px 10px;">
        <div id="segmentedControl"
             class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-negative">
          <a class="mui-control-item mui-active" href="#item1">基本信息</a>
          <a class="mui-control-item" href="#item2">商品详情</a>
          <a class="mui-control-item" href="#item3">全部评价（8）</a>
        </div>
      </div>
      <div>
        <div id="item1" class="mui-control-content mui-active">
          <div id="scroll" class="mui-scroll-wrapper" style="overflow: initial;">
            <div class="mui-scroll">
              <div class="mui-content">
                <div class="mui-card-content">
                  <div class="mui-card-content-inner">
                    <p>	{{goodsDetail.goods_name}}</p>
                    <div style="overflow: auto">
                      <p class="mui-pull-left">
                        <span class="goods_price">¥{{goodsDetail.goods_Sprice}}</span>
                        <del>¥{{goodsDetail.goods_Yprice}}</del>
                      </p>
                      <span class="mui-pull-right">销量:{{goodsDetail.goods_num}}</span>
                    </div>

                    <h5 class="mui-content-padded">产品规格:</h5>
                    <div class="mui-numbox">
                      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                      <input id="box" class="mui-input-numbox" type="number" />
                      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                    </div>
                  </div>


                </div>



              </div>
            </div>
          </div>
        </div>
        <div id="item2" class="mui-control-content">
          <div class="mui-content">
            <div class="goods_xq" v-html="goodsDetail.goods_content">{{goodsDetail.goods_content}}</div>
          </div>
        </div>
        <div id="item3" class="mui-control-content">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell">
              第三个选项卡子项-1
            </li>
            <li class="mui-table-view-cell">
              第三个选项卡子项-2
            </li>
            <li @click="joinCar" class="mui-table-view-cell">
              第三个选项卡子项-3
            </li>
          </ul>
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
        goodsDetail:[],
        segmentedControl:null,
      }
    },
    computed: {},
    components: {
      'v-goodsFfooter': goodsFooter
    },
    watch:{
      goodsDetail(){
        this.$nextTick(()=>{
          mui.init({
            swipeBack:true //启用右滑关闭功能
          });
          var slider = mui("#slider");
          slider.slider({
            interval: 3000
          });
        })
      }
    },
    methods: {
      handleScroll: function () {
        var self = this;
//        console.log($(window).scrollTop())
        if ($(window).scrollTop() >= self.segmentedControl) {
          $("#segmentedControl").css({
            "position":"fixed",
            "background":"#fff",
            "top":"0%",
            "left":"0%",
            "z-index":"20"
          })

          $(".mui-content").css({
            "padding":"2rem 0 5rem 0",
          })
        }else{
          $("#segmentedControl").css({
            "position":"initial",
            "background":"initial",
            "top":"initial",
            "left":"initial",
          })
          $(".mui-content").css({
            "padding":"initial",
          })
        }
      },
      addEventListener:function () {
        window.addEventListener('scroll', this.handleScroll);
      },
      getGoodsDetail(){
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

      joinCar(){
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
            top: winH/3 //抛物体起点纵坐标
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
  .fly_start{
    position: fixed;
    right: 0;
    top: 0;
    width: 3rem;
    height: 3rem;
    z-index: 1000;
  }
  .fly_start img{
    width: 3rem;
    height: 3rem;
  }

  .goodsDetail{

    margin-bottom: 4rem;
  }
.goods_price{
  color: #e4393c;
  font-size: 1.5rem;
}
</style>
