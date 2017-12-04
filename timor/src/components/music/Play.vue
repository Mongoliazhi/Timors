<template>
  <div id="play" class="music-play-page">

    <div class="music-album">
      <div class="play-page-hide-btn">
        <svg @touchend.prevent.stop="hidePlayPage"
             @click="hidePlayPage" class="returnI icon" aria-hidden="true">
          <use xlink:href="#icon-chuizi"></use>
        </svg>
      </div>
      <!--<img src="../../../static/images/music_bg.png" style="width: 100%;height: 100%;">-->
      <img :src="coverImgUrl" style="width: 100%;height: 100%;">
    </div>
    <div class="button-group">
      <img class="blurbg" src="../../../static/images/shuijiao.jpg">
      <div class="progress-bar-group">
        <div class="progress-bar">
          <div class="progress" ></div>
          <div class="indicater" ></div>
        </div>
        <div class="time-indicater">
          <span>{{currentTime}}</span>
          <span>{{duration}}</span>
        </div>
      </div>
      <div class="music-info">
        <p class="music-name">{{song.name}}</p>
        <p class="music-author">{{song.singer | singer}}</p>
      </div>

      <div class="music-ctrl">
        <ul>
          <li><img @click="musicLove" src="../../../static/images/love_1.png"></li>
          <li @touchend.prevent="playFront" @click="playFront">
            <img src="../../../static/images/icon-shangyiqu.png"></li>


          <template v-if="playing">
            <li   @click="$parent.$parent.$parent.tapButton"
                  @touchend="$parent.$parent.$parent.tapButton">
              <img src="../../../static/images/icon-play.png"></li>
          </template>
          <template v-else>
            <li @click="$parent.$parent.$parent.tapButton"
                @touchend="$parent.$parent.$parent.tapButton">
              <img src="../../../static/images/icon-pause.png"></li>
          </template>

          <li @touchend.prevent="playNext" @click="playNext">
            <img src="../../../static/images/icon-xiayiqu.png"></li>
          <li><img src="../../../static/images/icon-list.png"></li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import * as _ from '../../config/fetch'

  import {mapMutations, mapState, mapGetters , mapActions} from 'vuex'
  import axios from  'axios'

  export default {
    components: {
    },
    data () {
      return {
        clientY: 0,
      }
    },
    methods: {

      hidePlayPage: function () {
        console.log(this.$parent)
        if(this.$parent.playPageShow){
          this.$parent.playPageShow = false
        }else{
          this.$parent.playPageShow = true
        }
      },
      musicLove:function () {
        var self = this;
        self.userState1().then(function (result) {
          var userState = result
          if (userState) {
            self.playIndexState1().then(function (result) {
              var PlayIndexState = result;
              if (userState && PlayIndexState) {
                console.log("收藏")

                console.log(self.user)
                console.log(self.song)

                //判断是否收藏
                if(false){
                  var isCollection = -1; //取消收藏
                }else{
                  var isCollection =  1; //添加收藏
                }

                _.fetch("/musicCollection", {
                  user_id: self.user.user_id,
                  albummid: self.song.albummid,
                  id: self.song.id,
                  mid: self.song.mid,
                  name: self.song.name,
                  singer_id: self.song.singer[0].id,
                  singer_mid: self.song.singer[0].mid,
                  singer_name: self.song.singer[0].name,
                  isCollection: isCollection,
                }).then(($res) => {
                  if($res.data.result == "success"){
                    alert("添加成功")
                  }else{
                    alert($res.data.errorMsg)
                  }
                }).catch((error) => {
                  console.log(error)
                })


              }
            });
          }
        });

      },
      ...mapMutations([
        'play','pause', 'playFront', 'playNext','isPlayIndex',
      ]),
      ...mapActions([
        'userState1','playIndexState1'
      ]),

    },
    computed: {

      ...mapGetters([
        'currentTime', 'duration','coverImgUrl',
      ]),
      ...mapState({
        playing: state => state.musicPayServer.playing,
        song: state => state.musicPayServer.PlayIndex,
        user: state => state.User.user,
      })

    },

    filters: {
      singer: val => {
        if (typeof val === 'string') {
          return val
        } else if (val instanceof Array) {
          let singer = ''
          val.forEach(item => {
            singer = singer + item.name + ' '
          })
          return singer
        }
      }
    },
    watch: {
      playing(val) {
        console.log("play页面........."+val)
        console.log(new Date()+val)
      },
    },
    mounted(){
        this.$nextTick(function () {

        })
    },
  }
</script>

<style scoped>


  .music-play-page {
    width: 100%;
    /*max-width: 68vh;*/
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
  }

  .music-play-page .music-album {
    width: 100%;
    height: 100vw;
    /*max-height: 68vh;*/
  }

  .music-play-page .music-album img {
    width: 100%;
    display: block;
    /*    -webkit-filter:blur(100px);*/
  }

  .music-play-page .button-group {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 100vw;
    background: rgba(255, 255, 255, 0.76);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .blurbg {
    position: absolute;
    width: 100%;
    z-index: -1;
    display: block;
    -webkit-filter: blur(30px);
    -moz-filter: blur(30px);
    -ms-filter: blur(30px);
    -o-filter: blur(30px);
    filter: blur(30px);
  }

  .music-play-page .button-group .lyric {
    min-height: 35px;
    flex-grow: 2;
    display: flex;
    flex-direction: column;
  }

  .music-play-page .button-group .progress-bar-group {
    height: 30px;
  }

  .music-play-page .button-group .progress-bar-group .progress-bar {
    height: 4px;
    background: #cccccc;
    position: relative;
  }

  .music-play-page .button-group .progress-bar-group .progress-bar .progress {
    height: 100%;
    background: #7f7f7f;
    /*width: 20%;*/
  }

  .music-play-page .button-group .progress-bar-group .progress-bar .indicater {
    position: absolute;
    width: 2px;
    height: 12px;
    background: #ff2d55;
    top: 0;
    /*left: 20%;*/
  }

  .music-play-page .button-group .progress-bar-group .time-indicater {
    margin-top: 8px;
    line-height: 16px;
    font-size: 12px;
  }

  .music-play-page .button-group .progress-bar-group .time-indicater span {
    padding: 0 10px;
  }

  .music-play-page .button-group .progress-bar-group .time-indicater span:last-child {
    float: right;
  }

  .music-play-page .button-group .music-info .music-name {
    text-align: center;
    font-weight: bold;
    font-size: 18px;
  }

  .music-play-page .button-group .music-info .music-author {
    text-align: center;
    font-size: 12px;
    color: #8f8f8f;
  }

  .music-play-page .button-group .music-ctrl {
    height: 50px;
    margin-bottom: 100px;
  }

  .music-play-page .button-group .music-ctrl ul {
    height: 100%;
    width: 100%;
    list-style: none;
  }

  .music-play-page .button-group .music-ctrl ul li {
    float: left;
    width: 20%;
    height: 100%;
  }

  .music-play-page .button-group .music-ctrl ul li img {
    display: block;
    width: 35px;
    margin: 0 auto;
  }

  .music-play-page .button-group .music-ctrl ul li:first-child img {
    margin-left: 10px;
  }

  .music-play-page .button-group .music-ctrl ul li:last-child img {
    margin-right: 10px;
  }

  .music-play-page .button-group .volue-bar-group {

  }

  .music-play-page .button-group .volue-bar-group .volue-bar {
    width: 70%;
    height: 100%;
    margin: 0px auto;
    position: relative;
  }

  .music-play-page .button-group .volue-bar-group .volue-bar .volue-line {
    width: 100%;
    height: 3px;
    background: #cccccc;
    position: absolute;
    top: 50%;
    margin-top: -1.5px;
  }

  .music-play-page .button-group .volue-bar-group .volue-bar .volue-line .volue {
    height: 100%;
    width: 20%;
    background: #7f7f7f;
  }

  .music-play-page .button-group .volue-bar-group .volue-bar .value-indicater {
    position: absolute;
    height: 15px;
    width: 15px;
    border: 1px solid rgba(185, 185, 185, 0.4);
    border-radius: 50%;
    margin-top: -7.5px;
    margin-left: -7.5px;
    top: 50%;
    left: 20%;
    background: #fff;
    box-shadow: 0 2px 2px 0 #8f8f8f;
  }

  .music-play-page .button-group .volue-bar-group .volue-icon {
    width: 15%;
    height: 100%;
    position: relative;
  }

  .music-play-page .button-group .volue-bar-group .volue-icon img {
    width: 20px;
    display: block;
    position: absolute;
    top: 50%;
    margin-top: -10px;
  }

  .music-play-page .button-group .volue-bar-group .volue-left {
    float: left;
  }

  .music-play-page .button-group .volue-bar-group .volue-right {

    float: right;
  }

  .music-play-page .button-group .volue-bar-group .volue-left img {
    right: 0;
  }

  .music-play-page .button-group .other-button ul {
    height: 100%;
    width: 100%;
    list-style: none;
  }

  .music-play-page .button-group .other-button ul li {
    float: left;
    width: 25%;
    height: 100%;
    position: relative;
  }

  .music-play-page .button-group .other-button ul li img {
    display: block;
    width: 20px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin-left: -10px;
  }

  .music-play-page .music-album .play-page-hide-btn {
    position: absolute;
    left: 2rem;
    top: 2rem;
    font-size: 2rem;
    /*width: 25px;*/
    /*height: 25px;*/
    /*top: 27px;*/
    /*left: 11px;*/
    /*position: absolute;*/
    /*border-radius: 50%;*/
    /*background: rgba(255, 255, 255, 0.8);*/
    /*display: flex;*/
    /*align-items: center;*/
    /*justify-content: center;*/
    /*cursor: pointer;*/
    /*z-index: 1;*/
  }

  .music-play-page .music-album .play-page-hide-btn img {
    width: 12px;
    height: 12px;
    display: inline-block;
  }

  @media screen and (min-width: 68vh) {
    .music-play-page .music-album {
      height: 68vh;
    }

    .music-play-page .button-group {
      top: 68vh;
      width: 68vh;
      margin: 0 auto;
      margin-left: -34vh;
      left: 50%;
    }
  }
</style>
