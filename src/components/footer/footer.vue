<template>
  <div class="footer">
    <transition name="play-slide"
                @after-enter="showBlurBg"
                @before-leave="hideBlurBg"
                @after-leave="routerViewAnimation='page-slide'">
                <play v-show="playPageShow"></play>
    </transition>

    <div class="index_footer">
      <p class="footer_line"></p>
      <ul class="footer_ul nav_noactive">
        <li class="nav_active">
          <router-link to="/main">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bangong"></use>
            </svg>
            <p>首页</p>
          </router-link>
        </li>

        <li>
          <router-link to="/music">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-DJ"></use>
            </svg>
            <p>音乐</p>
          </router-link>
        </li>

        <li>
          <a @touchstart="showPlayPage" @click="showPlayPage">
            <!--<img class="" style="border: 2px solid #E38FA6;" src="../../../static/images/erji.png" alt="">-->
            <svg style="font-size:4rem" class="footer_logoimg icon" aria-hidden="true">
              <use xlink:href="#icon-erji1"></use>
            </svg>
          </a>
        </li>

        <li>
          <router-link to="/cart">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gouwu-2"></use>
            </svg>
            <p>购物车</p>
          </router-link>
        </li>
        <li>
          <router-link to="/my">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zhu"></use>
            </svg>
            <p>我的</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Play from '../music/Play'
  import bus from '../../bus/bus'
  export default {
    name: 'footer',
    data () {
      return {
        msg: 'footer',
        playPageShow:false,
        routerViewAnimation: 'page-slide',
      }
    },
    components:{
      Play
    },
    watch: {
      message: {},
    },
    methods: {
      setLicolor(a){
        console.log(a)
        var li = document.querySelectorAll(".footer_ul li");
        li.forEach(function (ali, index) {
          li[index].setAttribute("class", "");
        })
        li[a].setAttribute("class", "nav_active");
        li[a].querySelectorAll("p")[0].style.color = "red"

        bus.$emit('playPageShow',false) //打开 播放弹出窗
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
      hideBlurBg () {
        this.blurBgShow = false
      },
    },

    created(){

    },

    mounted(){
      var self = this;
      this.$nextTick(function () {

        bus.$on('playPageShow',(data) => {
          this.playPageShow = data
        })

        console.log("您当前的路由")
        console.log(this.$route.name)
        switch (this.$route.name) {
          case 'Main':
            self.setLicolor(0)
            break;
          case 'Main1':
            self.setLicolor(0)
            break;
          case 'Classfig':
            self.setLicolor(1)
            break;
          case 'Music':
            self.setLicolor(1)
            break;
          case 'Cart':
            self.setLicolor(3)
            break;
          case 'My':
            self.setLicolor(4)
            break;
        }


      })
    }
  }


</script>

<style lang="sass" scoped>
  .index_footer
    position: fixed
    left: 0
    bottom: 0
    width: 100%
    background-color: #fff
    z-index: 1000
    .footer_line
      position: absolute
      top: -2px
      left: 0
      width: 100%
      height: 2px
      background: linear-gradient(to right, #DF9E49, #EDD87B, #E8B659, #DA9D42, #FCECCB, #FFFFFD, #EDCF81, #E6BD6B, #C77625)
    .footer_ul
      width: 100%
      display: -webkit-box
      display: -webkit-flex
      display: flex
      -webkit-flex-direction: row
      flex-direction: row
      li
        -webkit-box-flex: 1
        -webkit-flex: 1
        flex: 1
        width: 20%
        text-align: center
        padding: 0.2rem 0
        a
          position: relative
          overflow: auto
          i
            font-size: 1.6rem
            margin-bottom: 0.2rem
          svg
            font-size: 2rem
            margin-bottom: 0.2rem
          b
            position: absolute
            right: -0.9rem
            top: -0.9rem
            width: 1.4rem
            height: 1.4rem
            line-height: 1.4rem
            background-color: #E54239
            color: #ffffff
            border-radius: 50%

        .footer_logoimg
          position: absolute
          left: 50%
          margin-left: -2.5rem
          margin-top: -1.5rem
          width: 5rem
          height: 5rem
          /*border-radius: 50%*/
      li:nth-child(3)
        flex: 1.2
    .nav_active
      color: red

  .play-slide-enter-active
    transition: all .3s ease

  .play-slide-leave-active
    transition: all .3s ease-out

  .play-slide-enter, .play-slide-leave-active
    transform: translateY(100vh)

  /*.bar-slide-enter-active*/
    /*transition: all .3s ease*/

</style>
