<template>
  <div class="nav_1">
    <header class="mui-bar mui-bar-nav" :style="headerColor">
      <h1 class="mui-title">{{navName}}
        <template v-if="navNum != undefined && navNum > 0">
          ({{navNum}})
        </template>
      </h1>
      <a @touchend.prevent="hideSinger" @click="hideSinger" class="mui-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiantou1"></use>
        </svg>
      </a>
    </header>
  </div>
</template>

<script>
  import Mock from 'mockjs'

  export default {
    name: 'nav_1',
    data() {
      return {
        headerColor: {
//          backgroundColor: Mock.mock('@color')
          backgroundColor: '#8B87C1'
        },
      }
    },
    props: {
      navName: {
        type: String,
        default: ''
      },
      navNum: {
        type: Number,
        default: ''
      }
    },
    watch: {},
    methods: {
      hideSinger: function () {
        this.$router.go(-1);
      },
    },

    created() {

    },

    mounted() {
      var self = this;
      this.$nextTick(function () {
        console.log(this.navName)
        console.log(this.navNum)
      })
    }
  }


</script>

<style lang="sass" scoped>

</style>
