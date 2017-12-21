<template>
  <div class="musicLove">
    <div class="header-bar" >
      <div class="back-button" @touchend.prevent="hideSinger" @click="hideSinger">
        <div class="back-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-jiantou1"></use>
          </svg>
        </div>
      </div>

      <div class="back-text">我喜欢</div>
    </div>
    <ul id="OA_task_2" class="mui-table-view">
      <template v-for="(item,index) in musicLoveList1">
        <li @click="playAudio" class="mui-table-view-cell">
          <div class="mui-slider-right mui-disabled">
            <a class="mui-btn mui-btn-red">删除</a>
          </div>
          <div class="mui-slider-handle mui-table">
            <div class="mui-table-cell music-info-li">
              <div class="music-info" >
                <div class="music-name">
                  {{item.name}}
                </div>
                <div class="music-singer">
                  <span >{{item.singer[0].name}}</span>

                </div>
              </div>
              <div class="action-button">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-erji"></use>
                </svg>
              </div>
            </div>
          </div>
        </li>
      </template>

    </ul>

  </div>
</template>

<script>
  import * as _ from '../../config/fetch'
  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {
    name: 'musicLove',
    components: {
    },
    data () {
      return {
        islogin: null,
        musicLoveList: [],
        topId: this.$route.params.id,
      }
    },

    methods: {
      hideSinger: function () {
        this.$router.go(-1);
      },
      //获取我喜欢 音乐列表
      getMusicLoveList(){
        var self = this;

        console.log("8989")
        console.log(self.musicLoveList1);

        if(!self.musicLoveList1.id){
          _.fetch("/getMusicLoveList", {
            user_id: self.user.user_id,
            pageIndex: 1,
            pageSize: 6
          }).then(($res) => {
            console.log($res)

            let list = [];
            var singer =[];
            $res.data.data.forEach(item =>{
              singer.push({
                id: item.singer_id,
                mid: item.singer_mid,
                name: item.singer_name,
              })
              list.push({
                id: item.id,
                mid: item.mid,
                name: item.name,
                singer: singer,
                albummid: item.albummid
              })
              singer = [];
            })

            this.$store.commit('setMusicLoveList', {
              index: 0,
              list: list
            })


          }).catch((error) => {
            console.log(error)
          })
        }


      },
      ...mapActions([
        'userState1','playIndexState1'
      ]),
    },
    computed: {

      ...mapGetters([
        'currentTime', 'duration','coverImgUrl',
      ]),
      ...mapState({
        musicLoveList1: state => state.musicPayServer.musicLoveList,
        song: state => state.musicPayServer.PlayIndex,
        user: state => state.User.user,
      })

    },
    watch:{
      user(val){
        var self = this;
        console.log("1111")
        console.log(val)
        if(val.user_id){
          self.islogin = true;
          self.getMusicLoveList();  //获取我喜欢 音乐列表
        }else{
          self.islogin = false;
        }
      },
   /*   musicLoveList1(val){
        var self = this;
        console.log("1122")
        console.log(val)
        if(self.islogin && val.user_id){
          console.log("5555566666")
        }else{
          console.log("5555588888")
        }
      },*/
    },
    mounted(){
      var self = this;
      this.$nextTick(function () {

      })
    },
  }
</script>


<style scoped>
 .musicLove{
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
   background-color: #8B87C1;
   color: #fff;
   z-index: 302;
 }

 .header-bar .back-button {
   position: fixed;
   left: 0;
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
 .header-bar .back-button .back-icon svg{
   font-size: 1.5rem;
 }

 .header-bar .back-button .back-icon i {
   font-size: 25px;
 }

 .header-bar .back-text {
   text-align: center;
   line-height: 50px;
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
   cursor:pointer;
   border-bottom: 1px dashed #ccc;
 }

 .list ul li .music-index{
   margin-left: -50px;
   width: 50px;
   text-align: center;
 }

 .music-info-li{
   display: flex;
   display: -webkit-flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   cursor:pointer;
 }

 .music-info {
   display: flex;
   flex-direction: column;
   flex-grow: 1;
   overflow: hidden;
 }

 .music-info .music-name {
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

 .music-info .music-singer {
   color: #aaa;
   font-size: 14px;
   line-height: 22px;
   text-overflow: ellipsis;
   overflow: hidden;
   white-space: nowrap;
 }

 .action-button {
   width: 25px;
   height: 25px;
   margin-right: 10px;
 }

 .action-button img {
   width: 25px;
   height: 25px;
 }

 .singer-brief {
   font-size: 14px;
   padding: 10px;
 }
</style>
