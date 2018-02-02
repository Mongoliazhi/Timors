<template>
  <div class="chatRoom">
    <router-view></router-view>

    <v-nav :nav-name="'聊天室'" :nav-num="0"></v-nav>

  </div>
</template>

<script>

  import { mapState,mapGetters,mapActions } from 'vuex'
  import nav from '../header/nav.vue'
export default {
  name: 'chatRoom',
  data () {
    return {
      msg: '购物车'
    }
  },
  computed: {
    ...mapState({
      userDate: state => state.User.user,
    })
  },
  components: {
    'v-nav': nav
  },
  watch:{

  },
  methods:{

  },
  mounted(){
    var self = this;
    this.$nextTick(function () {

    })
  },
}
</script>

<style scoped>
  .chatRoom { margin-top: 4rem; margin-bottom: 3rem; }
</style>
