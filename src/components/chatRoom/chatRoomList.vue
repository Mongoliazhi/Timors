<template>
  <div class="chatRoomList">
    <router-view></router-view>
    <v-nav :nav-name="'联系人'" :nav-num="0"></v-nav>

    <ul class="mui-table-view mui-table-view-chevron">
      <li @click="joinChatRoom(1)" class="mui-table-view-cell mui-media">
        <a class="mui-navigate-right">
          <img class="mui-media-object mui-pull-left" src="../../../static/images/qq.png">
          <div class="mui-media-body">机器人
            <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a class='mui-navigate-right' href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../../../static/images/cc_headpic1.png">
          <div class="mui-media-body">叔叔
            <p class='mui-ellipsis'>静静的看这个世界，最后终于疯了</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a class="mui-navigate-right">
          <img class="mui-media-object mui-pull-left" src="../../../static/images/cc_headpic1.png">
          <div class="mui-media-body">Vue 技术交流群
            <p class='mui-ellipsis'>尤雨溪: 老板写的聊天室很不错哦。。</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

  import {mapState, mapGetters, mapActions} from 'vuex'
  import nav from '../header/nav.vue'

  export default {
    name: 'chatRoomList',
    data() {
      return {
        thisUserId: this.$store.User
      }
    },
    computed: {
     /* ...mapState({
        userDate: (state) => {return state.User.user},
      }),*/
      ...mapGetters([
        'getUser'
      ])
    },
    components: {
      'v-nav': nav
    },
    watch: {},
    methods: {
      joinChatRoom(index) {
        console.log(index);
        this.$socket.emit('roomid', "1");
        this.$router.push({name: 'ChatRoom', params: {chatRoomId: index}})
      },
      getFriendGroup() {
        this.$socket.emit('everyMessage', {
          from_user: "111",  //发送方id（即自己的id）
        })
      },
    },
    mounted() {
      var self = this;
      this.$nextTick(function () {
        self.getFriendGroup();
        console.log("9-9-9-9-9")
//        console.log(this.userDate);
        console.log(this.getUser.user_id)

      })
    },
  }
</script>

<style scoped>
  .chatRoomList {
    margin-top: 4rem;
    margin-bottom: 3rem;
  }

  .mui-table-view .mui-media-object {
    border-radius: 50%;
  }

</style>
