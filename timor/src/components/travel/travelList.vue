<template>
  <div class="travelList">
    <header class="mui-bar mui-bar-nav" style="background-color: #8B87C1;">
      <h1 class="mui-title">说走就走</h1>
      <a @touchend.prevent="hideSinger" @click="hideSinger" class="mui-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiantou1"></use>
        </svg>
      </a>
    </header>

    <div class="book-list">
      <h2 class="title">一二三四随心走</h2>
      <ul>
        <li v-for="item in travelList">
          <a :href="item.travel_jumpurl">
            <div class="book-image">
              <img  :src="item.travel_imgurl" alt="">
            </div>
            <div class="book-detail">
              <h3>{{item.travel_title}}</h3>
              <p>{{item.travel_content}}</p>
              <div>

                <div class="category-r">
                  <span>{{item.travel_fabulous}}</span>
                </div>
                <div class="author">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-boar_hai"></use>
                  </svg>
                  <span>{{item.travel_time}}</span>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <!--    <div class="travel_list">
          <ul>
            <li>
              <p class="title"> 龙目岛 | 南纬8°的海风扑面来，我们半个月只玩龙目岛 </p>
              <div class="clearfix">
                <dt>
                  <img src="https://c2-q.mafengwo.net/s1/M00/10/34/wKgIC1pA2YOAckE1AANbPbUBxDc37.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90" alt="">
                </dt>
                <dd>

                </dd>
              </div>
            </li>
          </ul>
        </div>-->

  </div>
</template>

<script>
  import * as _fetch from '../../config/fetch'
  import {mapState, mapGetters, mapActions} from 'vuex'
  import axios from 'axios'

  export default {
    name: 'travelList',
    data() {
      return {
        msg: '购物车',
        travelList:[],
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
    },
    mounted() {
      var self = this;
      this.$nextTick(() => {

        var topList_url = "https://m.mafengwo.cn/?category=get_info_flow_list&page=3";

        _fetch.fetch("/oneT", {
          fetchUrl: topList_url,
        }).then(($res) => {
          console.log($res)
          self.travelList = $res.data.data;
        }).catch((error) => {
          console.log(error)
        })

      })
    }
  }
</script>

<style scoped>

  .book-list {
    margin-top: 55px;
    padding: 15px;
    background-color: #fff
  }

  .book-list .title {
    margin-left: 0;
    margin-bottom: 10px;
    border-left: 2px solid #ed424b;
    text-indent: 5px;
    font-size: 16px;
    line-height: 16px
  }

  .book-list ul li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-bottom: 1px solid #ddd
  }

  .book-list ul li:last-of-type {
    border-bottom: none
  }

  .book-list ul li a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0.5rem;
  }

  .book-list ul li .book-image {
    width: 40%;
  }

  .book-list ul li .book-image img {
    width: 100%
  }

  .book-list ul li .book-detail {
    position: relative;
    float: right;
    width: 60%;
    padding: 0;
    margin-left: 20px
  }

  .book-list ul li .book-detail h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    font-size: 18px;
    margin-bottom: 5px;
    line-clamp: 1;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical
  }

  .book-list ul li .book-detail p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 2;
    font-size: 14px;
    color: #969ba3;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical
  }

  .book-list ul li .book-detail .author {
    color: #969ba3;
    font-size: 13px
  }

  .book-list ul li .book-detail .author i {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoElEQVQ4T7WTgQnCMBBFXzdwpI7gBuoGblJH0A0cwZE6gjzJgakXCYQeBFpy/+XfTzsxWNOgnl0BM3AqDh/AK3PbcqD4DFyL6AbcM0gLYLPitQAOgBChVbUAz9L8DRB67AVsR1iANId/t+CJEaLPl94QndcRXAp913qsGOvDyxwoyhKPsaogM4D3bXNWP3tbQNjVQVaeXu3t+il3/WfDDt5DORsRN6d/ewAAAABJRU5ErkJggg==) no-repeat
  }
  .book-list ul li .book-detail .author svg {
    position: relative;
    display: inline-block;
    font-size: 1.4rem;
  }

  .book-list ul li .book-detail .category-r {
    color: #969ba3;
    font-size: 10px
  }

  .book-list ul li .book-detail .category-r span {
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 0 2px
  }

  .book-list ul li .book-detail .category-r span:nth-child(2) {
    color: #ed424b
  }

  .book-list ul li .book-detail .category-r span:nth-child(3) {
    color: #4284ed
  }

  .travel_list {
    width: 100%;
    margin-top: 55px;
  }

  .travel_list ul {
    width: 100%;
    padding: 1rem;
  }

  .travel_list li {
    width: 100%;
    background: #fff;
    margin-bottom: 10px;
    box-shadow: 0 0 10px #DDD;
    border-radius: 5px;
    overflow: auto;
    padding: 0.5rem;
  }

  .travel_list li .title {
    width: 100%;
  }

  .clearfix {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  .clearfix dt {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -moz-align-items: center;
    -webkit-align-items: center;
    align-items: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    justify-content: center;
  }

  .clearfix dt img {
    width: 100%;
  }

  .clearfix dd {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 2;

  }
</style>
