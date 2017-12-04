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

    <router-view class="router_c"></router-view>
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
      getUser() {
        this.$store.commit('getUser')
      },

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
          return 'http://ws.stream.qqmusic.qq.com/' + state.musicPayServer.PlayIndex.id + '.m4a?fromtag=46'
        },
        playing: state => state.musicPayServer.playing,
        user: state => state.User.user
      }),

    },
    watch: {
      playing(val) {
        console.log(new Date() + val)
        if (val)
          document.getElementById('music').play()
        else
          document.getElementById('music').pause()

      },
    },
    mounted() {
      var self = this;
      this.$nextTick(function () {
        self.getUser();

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
