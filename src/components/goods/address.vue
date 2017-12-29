<template>
  <div class="address">
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">我的地址</h1>
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
    </header>

    <div class="address-list-box">
        <div class="address-box">
          <div class="address-top">
            <p>12342342<span>3fsdfsdgsdg</span></p>
            <p>245435345</p>
          </div>
          <div class="address-state-btn">
            <label class="pull-left">
              <input type="radio" name="default" checked="checked"/>
              <!--<template v-if="!v.isdefault">-->
                <i class="iconfont gj-round"></i>
              <!--</template>-->
              <!--<template v-else>-->
                <i class="iconfont gj-roundcheckfill"></i>
              <!--</template>-->
              <span class="pull-left-text">设为默认</span>
            </label>
            <div class="pull-right">
              <a  href="javascript:void(0)">
                编辑
              </a>
              <a class="delete"  >
                删除
              </a>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

  import { mapState,mapGetters,mapActions } from 'vuex'
export default {
  name: 'address',
  data () {
    return {
      msg: '购物车'
    }
  },
  computed: {
    ...mapState([
      'count'
    ])
  },
  components:{

  },
  methods:{

  },
}
</script>

<style scoped>
  .address-list-box { margin-top: 3rem; margin-bottom: 3rem; }
  .address-list-box .address-box { margin-bottom: 1.5rem; padding: 0 1rem; }
  .address-list-box .address-box .address-top { border: 1px solid #A5A5A5; border-radius: 16px; padding: 0 1rem; }
  .address-list-box .address-box .address-top p:first-child { font-size: 1.2rem; padding: 10px 0 5px; color: #234940; border-bottom: 1px dashed #D5CFC6; }
  .address-list-box .address-box .address-top p:last-child { line-height: 1.6rem; margin: 5px 0 10px; font-size: 1rem; color: #444; overflow: hidden; white-space: normal; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
  .address-list-box .address-box .address-top p:first-child span { margin-left: 10px; color: #89816A; }
  .address-list-box .address-box .address-state-btn { height: 3rem; overflow: hidden; padding: 10px 0; color: #234940; }
  .address-list-box .address-box .address-state-btn .pull-left { float: left; }
  .address-list-box .address-box .address-state-btn .pull-left i { font-size: 1.6rem; vertical-align: middle; }
  .address-list-box .address-box .address-state-btn .pull-right { float: right; text-align: right; }
  .address-list-box .address-box .address-state-btn .pull-right a { padding: 0 10px; }
  .address-list-box .address-box .address-state-btn .pull-right a:first-child { border-right: 1px solid #234940; }

</style>
