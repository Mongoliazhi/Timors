<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <audio id="music"
           :src="dataUrl"
           @timeupdate="updateTime"
           @ended="playContinue"
           autoplay></audio>

    <transition name="yourName">

    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
  //  import Play from './components/music/Play.vue'
  import {mapState, mapGetters, mapMutations} from 'vuex'

  export default {
    components: {
//        Play
    },
    name: 'app',
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
      }
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

  .yourName-enter-active {
    transition: all 0s ease;
  }

  .yourName-leave-active {
    transition: all 0.5s ease-out;
  }

  .yourName-enter, .yourName-slide-leave-active {
    transform: translateX(100vh);
  }


</style>
