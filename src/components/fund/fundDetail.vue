<template>
  <div class="fundDetail">
    <header class="mui-bar mui-bar-nav" style="background-color: #8B87C1;">
      <h1 class="mui-title">基金</h1>
      <a @touchend.prevent="hideSinger" @click="hideSinger" class="mui-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiantou1"></use>
        </svg>
      </a>
    </header>



  </div>
</template>

<script>
  import * as _fetch from '../../config/fetch'
  import {mapState, mapGetters, mapActions} from 'vuex'
  import axios from 'axios'

  export default {
    name: 'fundDetail',
    data() {
      return {
        fundList:[],
      }
    },
    computed: {
      ...mapState([
        'count'
      ])
    },
    components: {},
    methods: {
      hideSinger: function () {
        this.$router.go(-1);
      },
    },
    mounted() {
      var self = this;
      this.$nextTick(() => {


//        _fetch.fetch("/oneT", {
//
//        }).then(($res) => {
//          console.log($res)
//
//        }).catch((error) => {
//          console.log(error)
//        })

      })
    }
  }
</script>

<style scoped>

</style>
