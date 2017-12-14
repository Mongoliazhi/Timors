<template>
  <div class="cart">
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">购物车 <span>(0)</span></h1>
      <a class="mui-icon mui-icon-left-nav mui-pull-left"></a>
      <button class="mui-btn mui-btn-blue mui-btn-link mui-pull-right">编辑</button>
    </header>

    <div class="cart_no">
      <svg class="icon svg1" aria-hidden="true">
        <use xlink:href="#icon-cart-copy"></use>
      </svg>
      <h5>您的购物车空空如也</h5>


    </div>

    <v-footer></v-footer>
  </div>
</template>

<script>
  import footer from '../footer/footer.vue'
  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {
    name: 'cart',
    data() {
      return {
        msg: '购物车',

      }
    },
    components: {
      'v-footer': footer
    },
    methods: {
      returnI() {
        alert("2332")
        this.$router.go(-1);
      },
    },
  }
</script>

<style scoped>
  .cart_no {
    text-align: center;
    margin-top: 30%;
  }

  .cart_no .svg1 {
    font-size: 6rem;
  }

  .cart_no h5 {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: #333;
  }

  .cart_no .cart_Recommend {
    position: relative;
    margin-top: 4rem;
    width: 70%;
    margin-left: 15%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -moz-align-items: center;
    -webkit-align-items: center;
    align-items: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    justify-content: center;
  }

  .cart_no .cart_Recommend .svg2 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1.2;
    -webkit-flex: 1.6;
    flex: 1.6;
    font-size: 2rem;
  }

  .cart_no .cart_Recommend p {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 2;
    -webkit-flex: 2;
    flex: 2;
    font-size: 1.2rem;
    color: #8B87C1;
  }

  .cart_no .cart_Recommend ::before {
    position: absolute;
    left: -2rem;
    top: 1rem;
    content: "";
    width: 3rem;
    height: 3px;
    background-color: #8B87C1;
  }

  .cart_no .cart_Recommend ::after {
    position: absolute;
    right: -2rem;
    top: 1rem;
    content: "";
    width: 3rem;
    height: 3px;
    background-color: #8B87C1;
  }
</style>
