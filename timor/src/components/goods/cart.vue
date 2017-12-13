<template>
  <div class="cart">
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">购物车 <span>(0)</span></h1>
      <a @click="returnI" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <button class="mui-btn mui-btn-blue mui-btn-link mui-pull-right">编辑</button>
    </header>

    <div class="cart_no">
      <svg class="icon svg1" aria-hidden="true">
        <use xlink:href="#icon-cart-copy"></use>
      </svg>
      <h5>您的购物车空空如也</h5>

      <div class="cart_Recommend">
        <svg class="icon svg2" aria-hidden="true">
          <use xlink:href="#icon-019"></use>
        </svg>
        <p>猜您喜欢</p>
        <div class="bus">
          <div class="windows"></div>
          <div class="lights"></div>
          <div class="street"></div>
        </div>
        <section class="countdown">

          <div v-show="!expired" class="timer">
            <div class="box">
              <div class="spacer"></div>
              <p class="value">{{ theTime.days }}</p>
              <p class="label">days</p>
            </div>
            <div class="box">
              <div class="spacer"></div>
              <p class="value">{{ theTime.hours }}</p>
              <p class="label">hours</p>
            </div>
            <div class="box">
              <div class="spacer"></div>
              <p class="value">{{ theTime.minutes }}</p>
              <p class="label">minutes</p>
            </div>
            <div class="box">
              <div class="spacer"></div>
              <p class="value">{{ theTime.seconds }}</p>
              <p class="label">seconds</p>
            </div>
            <p class="text">to meet you</p>
          </div>

          <div v-show="expired" class="expired-timer timer">
            <div class="box">
              <div class="spacer"></div>
              <p class="value">It's the great day</p>
              <p class="label">I'll have you in my arms</p>
            </div>
          </div>

        </section>
      </div>
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
        deadline: 'Dec 5, 2017 19:28:00',
        days: 'HI',
        hours: 'TH',
        minutes: 'ER',
        seconds: 'E!',
        expired: false
      }
    },
    computed: {
      theTime() {
        var ctx = this,
          countDownDate = new Date(ctx.deadline).getTime();



        var times = setInterval(function () {


          // Difference between the 2 dates
          var countDownDate = new Date(ctx.deadline).getTime(),


          now = new Date().getTime(),
          diff = countDownDate - now,

          // Time conversion to days, hours, minutes and seconds
          tdays = Math.floor(diff / (1000 * 60 * 60 * 24)),
          thours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          tminutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          tseconds = Math.floor((diff % (1000 * 60)) / 1000);

          // Keep 2 digits
          ctx.days = (tdays < 10) ? '0' + tdays : tdays;
          ctx.hours = (thours < 10) ? '0' + thours : thours;
          ctx.minutes = (tminutes < 10) ? '0' + tminutes : tminutes;
          ctx.seconds = (tseconds < 10) ? '0' + tseconds : tseconds;

          // Check for time expiration
          if (diff < 0) {
            clearInterval(times);
            ctx.expired = true;
          }
        }, 1000);

        // Return data
        return {
          days: ctx.days,
          hours: ctx.hours,
          minutes: ctx.minutes,
          seconds: ctx.seconds
        };
      }
    },
    components: {
      'v-footer': footer
    },
    methods: {
      returnI() {
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
