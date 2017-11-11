<template>
  <div class="classfig">
    <div class="empty_header">
      <div class="index_line_fa">
        <p class="index_line"></p>
      </div>
      <div class="empty_header_search">
        <form action="">
          <div class="empty_header_search">
            <input v-model="message" @keydown="search_keydown($event)" @blur="search_input1($event)"
                   @focus="search_input($event)"
                   class="input_search" type="text" placeholder="请输入梦想地">
            <button id="search_btn" @click="search_btn" type="button" :disabled="search_btn1_active"
                    :class="search_btn1">搜索
            </button>
          </div>
        </form>
      </div>
    </div>

    <!--商品内容-->
    <div class="goods-content">
      <template v-for="item in searchList">
        <a :href="item.vue_url">
          <dl class="">
            <dt>
              <img :src="item.vue_Imgurl" alt="">
            </dt>
            <dd class="line">
              <p class="goodsList_line"></p>
              <p class="state">China</p>
            </dd>
            <dd class="goodstit">{{item.vue_content}}</dd>
            <dd class="goods-money">
              <span>{{item.vue_Time | time}}</span>
              <p><i class="iconfont gj-good"></i><span>{{item.vue_Fabulous}}</span></p>
            </dd>

          </dl>
        </a>
      </template>
    </div>

    <v-footer message="classfig"></v-footer>
  </div>
</template>

<script>

  import axios from 'axios'
  import footer from './footer/footer.vue'
  import filer from './filter/index'

  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    name: 'classfig',
    data () {
      return {
        message: "",
        search_btn1: "n",
        search_btn1_active: "disabled",

        searchList:[],
      }
    },
    computed: {
      ...mapState([
        'count'
      ])
    },
    components: {
      'v-footer': footer
    },
    watch: {
      message: function (val, oldVal) {
        if (val == "") {
          this.search_btn1 = "n"
          this.search_btn1_active = true
        } else {
          this.search_btn1 = "y"
          this.search_btn1_active = false
        }
      },
    },
    methods: {
      search_btn: function () {
        var keyWord = this.message
      },
      search_keydown: function (e) {
        if (e.keyCode == 13) {
          e.preventDefault();
          var keyWord = this.message
        }
      },
      search_input: function (e) {
        console.log(e)
        e.target.placeholder = "";
        e.target.style.textAlign = "left"
      },
      search_input1: function (e) {

        if (e.target.value == "") {
          e.target.placeholder = "请输入梦想地";
          e.target.style.textAlign = "center"
        }
      },
    },
    mounted(){
        var self = this;
        this.$nextTick(function () {
          axios.get('http://localhost:3000/demo')
            .then(function ($res) {
              self.searchList = JSON.parse($res.data);
                console.log(self.searchList)
            }).catch(function (error) {
            console.log(error);
          })
      })
    }
  }
</script>


<style lang="sass" scoped>
  .empty_header
    position: fixed
    top: 0%
    left: 0%
    width: 100%
    z-index: 100
    .empty_header_nav
      position: relative
      background-color: #1E463D
      width: 100%
      text-align: center
      padding: 0.6rem 0
      z-index: 110

  .empty_header_search
    position: relative
    background-color: #1E463D
    width: 100%
    text-align: center
    padding: 0.6rem 1rem
    .input_search
      width: 80%
      height: 2rem
      border: 1px solid #DA9D42
      border-radius: 0.8rem
      background-color: transparent
      text-align: center
      color: #DA9D42
      padding: 0 1rem
    button
      border: none
      color: #fff
      width: 15%
      float: right
      height: 2rem
      border-radius: 0.8rem
    .y
      background-color: #DA9D42
    .n
      background-color: #767676
      color: #1E463D

  .classfig
    padding: 1rem
  .goods-content
    padding-right: 3%
    width: 100%
    display: block
    overflow: hidden
    margin-top: 5rem
    margin-bottom: 4rem
    a
      display: block
      //overflow: hidden
      dl
        //-webkit-box-flex: 1
        width: 100%
        position: relative
        float: left
        background-color: #ffffff
        margin-bottom: 2rem
        border-radius: 0 0 1rem 0
        box-shadow: 10px 10px 10px #c1c8a8
        .line
          position: relative
          .goodsList_line
            width: 100%
            height: 3px
            background: linear-gradient(to right, #DF9E49, #EDD87B, #E8B659, #DA9D42, #FCECCB, #FFFFFD, #EDCF81, #E6BD6B, #C77625)
          .state
            display: inline-block
            padding: 0.5rem 1rem
            background-color: #B53825
            position: absolute
            top: -1rem
            left: .5rem
            border-radius: 0.8rem
            color: #ffffff
        .goodstit
          text-indent: 2rem
          padding: 1rem
          white-space: normal
          overflow: hidden
          text-align: justify
          height: 3.8rem
          line-height: 1.4rem
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          color: #23453A
        .goods-money
          overflow: auto
          display: block
          padding: 0.5rem 1rem
          span:first-child
            float: left
            color: #B23A29
            font-size: 1.2rem
          p
            float: right
            color: #AAA9A9
            i
              margin-right: 0.5rem
        dt
          width: 100%
          img
            width: 100%
            height: 12rem

</style>
