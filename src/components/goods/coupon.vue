<template>
  <div class="address_1">
    <router-view></router-view>

    <v-nav :nav-name="'我的优惠券'" :nav-num="11"></v-nav>

    <div class="couponS">
      <div class="couponS_head">
        <div class="couponS_head_div"><span class="act">未使用</span></div>
        <div class="couponS_head_div"><span>已使用</span></div>
        <div class="couponS_head_div"><span>已过期</span></div>
      </div>

      <div class="couponListAll">
        <div class="couponList redSc redBc redImg">
          <div class="divLeft redBc"></div>
          <div class="divRight redBc"></div>
          <div class="couponList_head redBbc">
            <div class="div_1 redBrc">
              <p class="red">¥ <em>50</em></p>
              <span class="black">满 ¥499使用</span>
            </div>
            <div class="div_2">
              <p class="black">美妆499-50专享券</p>
              <div class="times">
                <i class="black">2018.1.1-2017.11.11</i>
              </div>
            </div>
          </div>
          <div class="couponList_foot ">
            <span class="black">仅限自营仓美妆类商品适用</span>
            <button type="button" class="redSc redBc">立即使用</button>
          </div>
        </div>

        <div class="couponList graySc grayBc grayImg">
          <div class="divLeft grayBc"></div>
          <div class="divRight grayBc"></div>
          <div class="couponList_head grayBbc">
            <div class="div_1 grayBrc">
              <p class="">¥ <em>50</em></p>
              <span class="">满 ¥499使用</span>
            </div>
            <div class="div_2">
              <p class="">美妆499-50专享券</p>
              <div class="times">
                <i class="">2018.1.1-2017.11.11</i>
              </div>
            </div>
          </div>
          <div class="couponList_foot">
            <span>仅限自营仓美妆类商品适用</span>
            <button type="button" class="graySc grayBc">立即使用</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  import { mapState,mapGetters,mapActions } from 'vuex'
  import nav from '../header/nav.vue'
export default {
  name: 'address_1',
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
    addAddress(){

      this.$router.push({name: 'AddressEdit', params: {id: 111}})
//      this.$router.push({name: 'TopList', params: {id: 1}})
    }
  },
  mounted(){
    var self = this;
    this.$nextTick(function () {
      //判断当前用户是否登陆
      console.log(self.userDate)
      if(self.userDate.user_name){
        self.islogin = true;
//        self.getMusicLoveList();  //获取我喜欢 音乐列表
      }else{
        self.islogin = false;
      }
    })
  },
}
</script>

<style scoped>
  .couponS { margin-top: 4rem;width: 100%; padding: 0 1rem;}
  .couponS .couponS_head { width: 100%; padding: 0 1rem; margin-top: 1rem; overflow: auto; }
  .couponS .couponS_head .couponS_head_div { float: left; width: 33.33%; text-align: center; font-size: 1.4rem; font-weight: bold; color: #1E463D; }
  .couponS .couponS_head .couponS_head_div span { display: inline-block; width: 76%; padding: 0.3rem 0; }
  .couponS .couponS_head .couponS_head_div .act { border-bottom: 2px solid #1E463D; }
  .couponS .couponListAll { width: 100%; overflow: hidden; }
  .couponS .couponListAll .couponList { position: relative; width: 100%; border-radius: 5px; z-index: 10; margin: 1rem 0; background-size: 100px 50px; }
  .couponS .couponListAll .couponList .couponList_head { width: 100%; overflow: auto; }
  .couponS .couponListAll .couponList .couponList_head .div_1 { width: 35%; height: 8.5rem; float: left; padding: 0.5rem 1rem; }
  .couponS .couponListAll .couponList .couponList_head .div_1 p em { font-size: 5rem; font-weight: bold; }
  .couponS .couponListAll .couponList .couponList_head .div_2 { width: 65%; height: 8.5rem; float: left; padding: 0.5rem 1rem; }
  .couponS .couponListAll .couponList .couponList_head .div_2 p { font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1.8rem 0; }
  .couponS .couponListAll .couponList .couponList_head .div_2 .times { width: 100%; overflow: auto; }
  .couponS .couponListAll .couponList .couponList_head .div_2 .times i { float: left; }
  .couponS .couponListAll .couponList .couponList_foot { padding: 0.8rem; overflow: auto; }
  .couponS .couponListAll .couponList .couponList_foot span { float: left; font-weight: bold; }
  .couponS .couponListAll .couponList .couponList_foot button { float: right; border-radius: 5px; background-color: transparent; }
  .couponS .couponListAll .divLeft { position: absolute; width: 1.4rem; height: 1.4rem; left: -1rem; top: 7.8rem; border-radius: 50%; z-index: 100; background-color: #EEEEEE; }
  .couponS .couponListAll .divRight { position: absolute; width: 1.4rem; height: 1.4rem; right: -1rem; top: 7.8rem; border-radius: 50%; z-index: 100; background-color: #EEEEEE; }
  .couponS .couponListAll .red { color: #9B0000; }
  .couponS .couponListAll .black { color: #000; }
  .couponS .couponListAll .redSc { color: red; }
  .couponS .couponListAll .redBc { border: 1px solid red; }
  .couponS .couponListAll .redBbc { border-bottom: 1px dashed red; }
  .couponS .couponListAll .redBrc { border-right: 1px dashed red; }
  .couponS .couponListAll .redImg { background-image: url("https://static.hzking.cn/assets/images/couponRed.png"); background-color: #FEF6F4; }
  .couponS .couponListAll .graySc { color: #999; }
  .couponS .couponListAll .grayBc { border: 1px solid #999; }
  .couponS .couponListAll .grayBbc { border-bottom: 1px dashed #999; }
  .couponS .couponListAll .grayBrc { border-right: 1px dashed #999; }
  .couponS .couponListAll .grayImg { background-image: url("https://static.hzking.cn/assets/images/couponGray.png"); background-color: #FFFFFF; }
</style>
