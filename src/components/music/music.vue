<template>
  <div class="music">
    <router-view></router-view>
    <div class="mui-content" style="background-color: #fff">
      <div id="Gallery" class="mui-slider">
        <div class="mui-slider-group">
          <div class="mui-slider-item">
            <ul class="mui-table-view mui-grid-view mui-grid-9" style="background-color: #fff">
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="iconfont icon-yinfu"></span>
                  <div class="mui-media-body">热门歌曲</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="iconfont icon-yinyueset"></span>
                  <div class="mui-media-body">排行榜</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="iconfont icon-player"></span>
                  <div class="mui-media-body">歌曲推荐</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <!--<router-link to="/music/musicLove"></router-link>-->
                <a @click="musicLove">
                  <span class="iconfont gj-shoucang"><i class="mui-badge">5</i></span>
                  <div class="mui-media-body">我喜欢</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="iconfont gj-search"></span>
                  <div class="mui-media-body">搜索</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <span class="iconfont icon-player"></span>
                  <div class="mui-media-body">Phone</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <h4 style="text-align: center;margin-top: 20px;">排行榜</h4>


      <div class="rank" >
        <ul>
          <li class="rank-item" v-for="item in topList" @click="showRank(item.id)">
            <div class="rank-media">
              <img :src="item.picUrl" alt="">
              <span class="listen-count">{{item.listenCount | listenCount}}</span>
            </div>
            <div class="rank-info">
              <p class="rank-title">{{item.topTitle}}</p>
              <p class="rank-songs" v-for="(song,index) in item.songList">
                {{index+1}}
                {{song.songname}}
                <span class="rank-singername">-{{song.singername}}</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>


    <v-footer message="music"></v-footer>
  </div>
</template>

<script>

  import footer from '../footer/footer.vue'
  import topList from  './topList.vue'

  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    name: 'music',
    components: {
      'v-footer': footer,
    },
    data () {
      return {
        topList: [],
      }
    },
    computed: {
      ...mapState([
        'count'
      ])
    },

    watch: {},
    methods: {
      musicLove(){
        var self = this;
        self.userState1().then(function (result) {
          var userState = result
          if (userState) {
            self.$router.push({name: 'MusicLove'})
          }
        })
      },
      showRank: function (id) {
        this.$router.push({name: 'TopList', params: {id: id}})
      },
      ...mapActions([
        'userState1','playIndexState1'


      ]),
    },
    mounted(){
      var self = this;
      this.$nextTick(function () {
//        排行榜
        var topList_url = "https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=272598377&" +
          "uin=1458268002&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1508924113101"

          this.$http.jsonp(topList_url, {
            jsonp: "jsonpCallback"
          }).then(function ($res) {
            console.log($res);
            this.topList = $res.data.data.topList
          }, function (res) {
            console.warn(res);
          })
      })
    },
    filters: {
      listenCount: num => {
        return Math.round(num / 1000) / 10 + '万'
      }
    },
  }
</script>


<style scoped>
  .mui-table-view .mui-table-view-cell a span {
    font-size: 42px;
    color: #8B87C1;
  }

  .mui-badge {
    position: absolute;
    right: 18px;
    top: 0;
    background-color: #ff5954;
  }

  .rank {
    width: 100%;
    margin-top: -50px;
  }

  .rank ul {
    margin-top: 60px;
    padding: 10px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  .rank-item {
    display: -webkit-box;
    display: -webkit-flex;;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    height: 100px;
    background: #fff;
    margin-bottom: 10px;
    box-shadow: 0 0 10px #DDD;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
  }

  .rank-item .rank-media {
    display: -webkit-box;
    display: -webkit-flex;;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1.2;
    position: relative;
  }

  .rank-item .rank-media img {
    width: 100%;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    z-index: 0;
  }

  .rank-item .rank-media .listen-count {
    position: absolute;
    bottom: 5px;
    left: 5px;
    color: #fff;
    font-size: 12px;
  }

  .rank-item .rank-info {
    display: -webkit-box;
    display: -webkit-flex;;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 3;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
  }

  .rank-item .rank-info .rank-title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .rank-item .rank-info .rank-songs {
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .rank-item .rank-info .rank-singername {
    color: #8f8f8f;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    padding:0 5px;
  }
</style>
