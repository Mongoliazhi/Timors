<template>
  <div class="goods">
    <h1>商品</h1>
  </div>
</template>

<script>

  import { mapState,mapGetters,mapActions } from 'vuex'
export default {
  name: 'goods',
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

</style>
