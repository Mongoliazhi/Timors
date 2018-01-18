<template>
  <div class="fundList">
    <header class="mui-bar mui-bar-nav" style="background-color: #8B87C1;">
      <h1 class="mui-title">基金列表</h1>
      <a @touchend.prevent="hideSinger" @click="hideSinger" class="mui-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiantou1"></use>
        </svg>
      </a>
    </header>
    <div class="mui-content">
      <div style="padding: 10px 10px;">
        <div id="segmentedControl" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-primary">
          <a class="mui-control-item mui-active">全部</a>
          <a class="mui-control-item ">股票型</a>
          <a class="mui-control-item">混合型</a>
          <a class="mui-control-item">指数型</a>
          <a class="mui-control-item">债券型</a>
          <a class="mui-control-item">债券型</a>

        </div>
      </div>
      <ul class="mui-table-view mui-table-view-chevron">
        <!--<li class="mui-table-view-cell mui-media">-->
          <!--<a class="mui-navigate-right">-->
            <!--<div class="mui-media-object mui-pull-right"><p>时间</p></div>-->
            <!--<div class="mui-media-object mui-pull-right"><span>最新净值</span></div>-->
            <!--<div class="mui-media-body">基金名称</div>-->
          <!--</a>-->
        <!--</li>-->
        <li @click="showFundDetail" class="mui-table-view-cell mui-media">
          <a class="mui-navigate-right">
            <img class="mui-media-object mui-pull-left" src="../../../static/images/yuantiao.jpg">
            <div class="mui-media-object mui-pull-right"><p>01-05</p></div>
            <div class="mui-media-object mui-pull-right"><span style="color: red">1.254 </span></div>
            <div class="mui-media-body">
              <span> 中证白酒指数</span>
              <p class='mui-ellipsis'>161725</p>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a class="mui-navigate-right">
            <img class="mui-media-object mui-pull-left" src="../../../static/images/yuantiao.jpg">
            <div class="mui-media-object mui-pull-right"><p>01-05</p></div>
            <div class="mui-media-object mui-pull-right"><span style="color: red">1.254 </span></div>
            <div class="mui-media-body">
              <span> 中证白酒指数</span>
              <p class='mui-ellipsis'>161725</p>
            </div>
          </a>
        </li>
      </ul>

    </div>


  </div>
</template>

<script>
  import echarts from 'echarts';




  import * as _fetch from '../../config/fetch'
  import {mapState, mapGetters, mapActions} from 'vuex'
  import axios from 'axios'

  export default {
    name: 'fundList',
    data() {
      return {
        fundList:[],
        charts: '',
      }
    },
    computed: {
      ...mapState([
        'count'
      ])
    },
    components: {},
    methods: {
      hideSinger: function () {
        this.$router.go(-1);
      },
      showFundDetail(){
        this.$router.push({name: 'FundDetail', params: {fundId: 161725}})
      }
    },
    mounted() {
      var self = this;
      this.$nextTick(() => {


      })
    }
  }
</script>

<style scoped>
.fundDetail{
  margin-top: 100px;
}
</style>
