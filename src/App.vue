<template>
  <div id="app">

    <audio id="music"
           :src="dataUrl"
           @timeupdate="updateTime"
           @ended="playContinue"
           autoplay></audio>

    <transition name="play-slide"
                @after-leave="routerViewAnimation='page-slide'">
        <div v-show="userShow" class="userShow">
          <h1>你的名字</h1>
          <p>一定很爱你</p>
        </div>
    </transition>

    <!--<router-view class="router_c"></router-view>-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
  import play from './components/music/Play'
  import bus from './bus/bus'

  import {mapState, mapGetters, mapMutations} from 'vuex'

  export default {
    name: 'app',
    data() {
      return {
        userShow: false,
        routerViewAnimation: 'page-slide',
      }
    },
    components: {
        play
    },

    methods: {
      tapButton(event) {
        event.preventDefault()
        this.playing ? this.pause() : this.play()
      },
      updateTime() {
        this.$store.commit('updateCurrentTime', parseInt(document.getElementById('music').currentTime))
        this.$store.commit('updateDuration', parseInt(document.getElementById('music').duration))
      },
      ...mapMutations([
        'play', 'pause', 'playContinue'
      ]),
//      getUser() {
//        this.$store.commit('getUser')
//      },

      showPlayPage(event) {
        event.preventDefault()

        if(this.playPageShow){
          this.playPageShow = false
        }else{
          this.playPageShow = true
        }
      },
      hidePlayPage(event) {
        event.preventDefault()
        this.playPageShow = false
      },

      showBlurBg() {
        this.routerViewAnimation = 'fade'
        this.blurBgShow = true
      },
      hideBlurBg() {
        this.blurBgShow = false
      },
    },
    computed: {
      ...mapGetters([]),

      ...mapState({
        dataUrl(state) {
          if(state.musicPayServer.PlayIndex.id){
//            return 'http://dl.stream.qqmusic.qq.com/' + state.musicPayServer.PlayIndex.id + '.m4a?fromtag=999';
//            return 'http://dl.stream.qqmusic.qq.com/' + state.musicPayServer.PlayIndex.id + '.m4a?guid=1642466368&vkey=8A8B7F3436A853F17BB7C57C9F7AD9CDB53BA1236F11D14ACAC5AA1009A5E2B3E5A5EDB5DB065A4016DF5EE807DDFCC96C97ED178B05C6F0&uin=3222754571&fromtag=999';
            //由于QQ音乐数据变动 不清楚变化的内容 导致不能准确捕获每次音乐的数据
            return 'http://dl.stream.qqmusic.qq.com/C400000Md1wq0vnwzE.m4a?guid=1642466368&vkey=F5D1F108B1740CB77686D533343AD60B7D8CB510DDEDF7E59960E03BCABBE63AB36246B978E238FD49063E6A9AF12AE4F529243A359D0B3E&uin=&fromtag=999';
          }
        },
        playing: state => state.musicPayServer.playing,
        user: state => state.User.user
      }),

    },
    watch: {
      playing(val) {
        console.log(new Date() + val)
        if (val){
          document.getElementById('music').play()
        }else{
          document.getElementById('music').pause()
        }

      },
    },

    mounted() {
      var self = this;
      this.$nextTick(function () {
//        self.getUser();

        bus.$on('userShow',(data) => {
          this.userShow = data
        })
      })
    },

  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-bottom: 100px;
  }
  .userShow{
    position: fixed;
    left: 0;
    /*top: 0;*/
    width: 50%;
    height: 100%;
    background-color: #000;
    color: #ffffff;

  }
/*
  .yourName-enter-active {
    transition: all 0s ease;
  }

  .yourName-leave-active {
    transition: all 0.5s ease-out;
  }

  .yourName-enter, .yourName-slide-leave-active {
    transform: translateX(100vh);
  }*/

  .play-slide-enter-active {
    transition: all .3s ease
  }

  .play-slide-leave-active {
    transition: all .3s ease-out
  }

  .play-slide-enter, .play-slide-leave-active {
    transform: translateY(100vh)
  }

  .bar-slide-enter-active {
    transition: all .3s ease
  }


</style>
