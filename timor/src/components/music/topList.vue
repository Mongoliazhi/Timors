<template>
  <div class="toList">
    <div class="header-bar" >
      <div class="back-button" @touchend.prevent="hideSinger" @click="hideSinger">
        <div class="back-icon">
          <i class="iconfont gj-back"></i>
        </div>
        <div class="back-text">
          排行榜
        </div>
      </div>
    </div>
    <div class="list" v-if="topListData!=null">
      <ul>
        <li class="border-1px border-1px-after" v-for="(item,index) in topListData.songlist">

          <template v-if="index > 2">
            <div class="music-index" >{{index+1}}</div>
          </template>
          <template v-else>
            <div class="music-index" style="color: red">{{index+1}}</div>
          </template>

          <div class="music-info" @click="play(index)">
            <div class="music-name">
              {{item.data.songorig}}
            </div>
            <div class="music-singer">
              <span v-for="singername in item.data.singer">{{singername.name}}-</span>
              <span>{{item.data.albumname}}</span>
            </div>
          </div>
          <div class="action-button">
            <!--<img src="../assets/icon-...black.png" alt="">-->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  import bus from '../../bus/bus'

  export default {
    name: 'toList',
    components: {
    },
    data () {
      return {
        topListData: [],
        topId: this.$route.params.id,
      }
    },
    methods: {
      hideSinger: function () {
        this.$router.go(-1)
      },

      play:function (index) {
        console.log(index)

        bus.$emit('playPageShow',true) //打开 播放弹出窗

        let list = []
        this.topListData.songlist.forEach(item => {
          list.push({
            id: item.data.songid,
            mid: item.data.songmid,
            name: item.data.songorig,
            singer: item.data.singer,
            albummid: item.data.albummid
          })
        })
        console.log(list)
        this.$store.commit('setPlayList', {
          index: index,
          list: list
        })
        this.$store.commit('play')

      }
    },

    mounted(){
      var self = this;
      this.$nextTick(function () {
        console.log("999")
        console.log(this.$route)
//        排行榜详情
        var topList_url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?" +
          "g_tk=670137471&uin=1458268002&format=json&inCharset=utf-8&outCharset=" +
          "utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid="+this.topId
          "&_=1508988646608"

        var musicUrl = "http://thirdparty.gtimg.com/abcd1234/C400002PDUov4bKtr4.m4a?" +
          "guid=9944342992" +
          "&vkey=DAF7C88439A1CBC99D758D6D028AAA953FCD0A86AF1A0F1BF033C5EE8EEACA868C5588CC3B0565057E3B185DA231FDE51C65FE590218A325" +
          "&uin=1458268002" +
          "&fromtag=999"


        this.$http.jsonp(topList_url, {
          jsonp: "jsonpCallback"
        }).then(function ($res) {
          console.log($res);
          this.topListData = $res.data
        }, function (res) {
          console.warn(res);
        })
      })
    },
  }
</script>


<style scoped>
 .toList{
   position: fixed;
   left: 0;
   top:0;
   padding-top: 80px;
   width: 100%;
   height:100%;
   z-index: 300;
   overflow: auto;
   background-color: #fff;
 }

 .header-bar {
   position: fixed;
   top: 0;
   height: 50px;
   width: 100%;
   max-width: 68vh;
   background-color: #2ac845;
   color: #fff;
   z-index: 302;
 }

 .header-bar .back-button {
   /*    width:25px;*/
   height: 25px;
   margin: 12.5px;
   margin-left: 5px;
   float: left;
   cursor:pointer;
 }

 .header-bar .back-button .back-icon {
   width: 25px;
   height: 25px;
   float: left;
 }

 .header-bar .back-button .back-icon i {
   font-size: 25px;
 }

 .header-bar .back-button .back-text {
   line-height: 25px;
   float: left;
 }


 .list {
   /*background: rgb(135, 112, 101);*/
   z-index: 1;
   padding-bottom: 50px;
 }

 .list .list-title {
   text-align: center;
   line-height: 40px;
 }

 .list ul {
   list-style: none;
   padding-left: 10px;
 }

 .list ul li {
   display: flex;
   display: -webkit-flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   height: 60px;
   margin-left:44px;
   cursor:pointer;
 }

 .list ul li .music-index{
   margin-left: -50px;
   width: 50px;
   text-align: center;
 }

 .list ul li .music-info {
   display: flex;
   flex-direction: column;
   flex-grow: 1;
   overflow: hidden;
 }

 .list ul li .music-info .music-name {
   width: 100%;
   color: #000;
   line-height: 22px;
   text-overflow: ellipsis;
   overflow: hidden;
   white-space: nowrap;
 }

 .dark {
   color: #fff !important;
 }

 .list ul li .music-info .music-singer {
   color: #aaa;
   font-size: 14px;
   line-height: 22px;
   text-overflow: ellipsis;
   overflow: hidden;
   white-space: nowrap;
 }

 .list ul li .action-button {
   width: 25px;
   height: 25px;
   margin-right: 10px;
 }

 .list ul li .action-button img {
   width: 25px;
   height: 25px;
 }

 .list .singer-brief {
   font-size: 14px;
   padding: 10px;
 }
</style>
