/**
 * Created by Administrator on 2017/10/25.
 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default {
  state: {
    index:0,
    playing: false,   //播放；暂停播放
    playList: [],     //音乐集合
    PlayIndex:{       //当前音乐信息

    },
    currentTime: 0,   //音乐播放开始时间
    duration: 0,      //音乐结束时间
    playMode: 0,      //音乐播放顺序
  },
  mutations: {
    // 播放
    play (state) {
      setTimeout(function () {
        state.playing = true
      },1000)
    },
    // 暂停
    pause (state) {
      setTimeout(function () {
        state.playing = false
      },1000)
    },
    // 上一曲
    playFront (state) {
      state.index = (state.index - 1 + state.playList.length) % state.playList.length
      state.PlayIndex = state.playList[state.index]
    },
    // 下一曲
    playNext (state) {
      state.index = (state.index + 1) % state.playList.length
      state.PlayIndex = state.playList[state.index]
    },
    // 获取当前音乐的列表
    setPlayList (state, playList) {
      state.playList = playList.list
      state.index = playList.index
      state.PlayIndex = state.playList[state.index]
    },

    // 获取并设置当前音乐的时间
    updateCurrentTime (state, time) {
      state.currentTime = time
    },
    updateDuration (state, time) {
      state.duration = time
    },


    // 设置播放的顺序
    playContinue (state) {
      console.log("播放完了。。。")
      state.playing = false;

      console.log(state.playList)
      console.log(state.PlayIndex)
      console.log('当前播放的状态1'+state.playing)
      // switch (state.playMode) {
      //   // 单曲
      //   case 0:
      //     state.playing = true;
      //     break;
      //   // 顺序播放
      //   case 1:
      //     state.index = (state.index + 1) % state.playList.length
      //     state.PlayIndex = state.playList[state.index]
      //     break;
      //   // 随机播放
      //   case 2:
      //     state.index = Math.floor(Math.random() * state.playList.length)
      //     state.PlayIndex = state.playList[state.index]
      //     break;
      // }
      setTimeout(function () {
        state.playing = true
      },1000)
      console.log('当前播放的状态2'+state.playing)
    },
  },
  getters: {
    currentTime: state =>
    parseInt(state.currentTime / 60) + ':' + (Array(2).join(0) + (state.currentTime % 60)).slice(-2)
    ,
    duration: state =>
    parseInt(state.duration / 60) + ':' + (Array(2).join(0) + (state.duration % 60)).slice(-2),
    coverImgUrl:state => {
      if(typeof state.PlayIndex.albummid === 'undefined')
        return "../../../static/images/music_bg.png"
      else
        return "https://y.gtimg.cn/music/photo_new/T002R500x500M000"+state.PlayIndex.albummid+".jpg"
    }
  },
  actions:{
    playIndexState1 (context) {
      console.log(context)
      if(context.state.PlayIndex.albummid){
        return true;
      }else{
        alert("暂无播放音乐");
      }
    },

  }
}

