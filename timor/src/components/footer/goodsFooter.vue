<template>
  <div class="goodsFooter">
    <div class="goodsxq_footer">
      <div class="footer_fa"><p class="goodsxq_line"></p>
        <ul class="goodsxq_ul">
          <li>
            <router-link to="/">
              <i class="iconfont gj-shouye"></i>
              <p>首页</p>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <i class="iconfont gj-account"></i>
              <p>客服</p>
            </router-link>
          </li>
          <li class="fly_end">
            <router-link to="/cart">
              <i class="iconfont gj-gouwuche1"></i>
              <p>购物车</p>
            </router-link>
          </li>
        </ul>
        <div class="goodsxq_btn">
          <div>
            <button type="button" class="btn_1">加入购物车</button>
          </div>
          <div>
            <button type="button" class="btn_2">立刻购买</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Play from '../music/Play'

  export default {
    name: 'goodsFooter',
    data() {
      return {}
    },
    components: {},
    watch: {},
    methods: {},

    created() {

    },

    mounted() {
      var self = this;
      this.$nextTick(function () {

      })
    }
  }


</script>

<style scoped>
  .goodsxq_footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    z-index: 100;
  }

  .goodsxq_footer .goodsxq_line {
    position: absolute;
    top: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #E6BD6B;
    overflow: auto;
  }

  .goodsxq_footer .footer_fa {
    position: relative;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
  }

  .goodsxq_footer .goodsxq_footer_h1 {
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    background-color: #000;
    color: #fff;
    opacity: 0.7;
    font-size: 1.5rem;
  }

  .goodsxq_footer .goodsxq_ul {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-flex: 2;
    -webkit-flex: 2;
    flex: 2;
  }

  .goodsxq_footer .goodsxq_ul li {
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    text-align: center;
  }

  .goodsxq_footer .goodsxq_ul li a {
    position: relative;
    overflow: auto;
    color: #887b2f;
    padding-top: 0.4rem;
  }

  .goodsxq_footer .goodsxq_ul li a i {
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
  }

  .goodsxq_footer .goodsxq_ul li a em {
    position: absolute;
    right: 0rem;
    top: 0rem;
    width: 1.4rem;
    height: 1.4rem;
    line-height: 1.4rem;
    background-color: #E54239;
    color: #ffffff;
    border-radius: 50%;
  }

  .goodsxq_footer .goodsxq_btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-flex: 3;
    -webkit-flex: 3;
    flex: 3;
    font-size: 1.4rem;
    box-sizing: content-box;
  }

  .goodsxq_footer .goodsxq_btn div {
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    height: 3.5rem;
  }

  .goodsxq_footer .goodsxq_btn div button {
    width: 100%;
    height: 100%;
    border: none;
    text-align: center;
    color: #fff;
    font-size: 1.1rem;
    border-radius: 0;
  }

  .goodsxq_footer .goodsxq_btn div .btn_1 {
    background-color: #ffb03f;
  }

  .goodsxq_footer .goodsxq_btn div .btn_2 {
    background-color: #f23030;
  }

  .goodsxq_footer .goodsxq_btn div .btn_3 {
    background-color: #949494;
  }

  .goodsxq_footer .goodsxq_btn div .btn_4 {
    background-color: #535353;
  }

  .goodsxq_footer .goodsxq_div {
    display: flex;
    display: -webkit-flex;
    -webkit-box-flex: 3;
    -webkit-flex: 3;
    flex: 3;
    padding: 1rem 0;
  }

  .goodsxq_footer .goodsxq_div p {
    margin-left: 1rem;
  }

  .goodsxq_footer .goodsxq_div p i {
    color: #B63928;
  }

  .goodsxq_footer .goodsxq_btn_1 {
    -webkit-box-flex: 1.5;
    -webkit-flex: 1.5;
    flex: 1.5;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    height: 4rem;
  }

  .goodsxq_footer .goodsxq_btn_1 div {
    width: 100%;
    height: 100%;
  }

  .goodsxq_footer .goodsxq_btn_1 div button {
    width: 100%;
    height: 100%;
    border: none;
    -webkit-box-flex: 1;
    text-align: center;
    color: #cab644;
    font-size: 1.1rem;
  }

  .goodsxq_footer .goodsxq_btn_1 div .btn_1 {
    background-color: #1E463D;
  }

  .goodsxq_footer .goodsxq_btn_1 div .btn_2 {
    background-color: #163223;
  }

  .goodsxq_footer .footer_team {
    width: 100%;
    background-color: #1E463D;
    padding: 1rem 0;
  }

  .goodsxq_footer .footer_team span {
    color: #cab644;
  }

  .goodsxq_footer .footer_team span:nth-child(1) {
    float: left;
    margin-left: 2rem;
  }

  .goodsxq_footer .footer_team span:nth-child(2) {
    float: right;
    margin-right: 2rem;
  }

  .goodsxq_footer .footer_fa1 {
    width: 100%;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    height: 4rem;
  }

  .goodsxq_footer .goodsxq_div2 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -moz-align-items: center;
    -webkit-align-items: center;
    align-items: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    justify-content: center;
  }

  .goodsxq_footer .goodsxq_div2 p {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -moz-align-items: center;
    -webkit-align-items: center;
    align-items: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    justify-content: center;
    align-content: center;
    color: #163223;
  }

  .goodsxq_footer .goodsxq_div2 p i {
    font-size: 1.6rem;
    margin-right: 0.2rem;
  }

  .goodsxq_footer .goodsxq_div3 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-flex: 2;
    -webkit-flex: 2;
    flex: 2;
    -webkit-box-align: center;
    -moz-align-items: center;
    -webkit-align-items: center;
    align-items: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    justify-content: center;
    padding-right: 0.5rem;
  }

  .goodsxq_footer .goodsxq_div3 div {
    display: flex;
    flex-direction: column;
    -webkit-box-justify: flex-end;
    justify-content: flex-end;
  }

  .goodsxq_footer .goodsxq_div3 div p span {
    justify-content: flex-end;
    color: #B63928;
    font-weight: bold;
  }

  .goodsxq_footer .goodsxq_div3 div em {
    justify-content: flex-end;
    font-size: 12px;
  }


</style>
