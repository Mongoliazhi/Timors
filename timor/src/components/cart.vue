<template>
  <div class="cart">
    <h1>{{ msg }}</h1>

    <h2>{{ count }}</h2>
    <button @click="abb">-</button>
    <button @click="add">+</button>

    <v-footer></v-footer>
  </div>
</template>

<script>
  import footer from './footer/footer.vue'
  import { mapState,mapGetters,mapActions } from 'vuex'
export default {
  name: 'cart',
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
    'v-footer':footer
  },
  methods:{
    ...mapActions([
      'add',
      'abb'
    ])
  },
}
</script>

<style scoped>

</style>
