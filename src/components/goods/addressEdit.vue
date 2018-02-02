<template>
  <div class="addressEdit">
    <v-nav :nav-name="'地址编辑'" :nav-num="0"></v-nav>

    <div class="add-address-box">
      <!--提交表单-->
      <form action="">
        <div class="row">
          <!--<input id="shengshi" type="text" placeholder="请选择省份城市"/>-->

          <div class="content-block">
            <input id="demo1" type="text" readonly placeholder="城市选择特效"  value="广东省,深圳市,南山区"/>
            <input id="value1" type="hidden" value="20,234,504"/>
          </div>
          <template>
            <p class="add1" :style="addressTitle_length">* 请选择省市区地址</p>
          </template>
        </div>
        <!--地址选择器调用js-->
        <div class="row">
          <input type="text" id="detial-address" placeholder="街道地址" v-model="streetAddress"/>
          <template>
            <p :style="streetAddress_length">* 街道地址请填写5-50字符</p>
          </template>
        </div>
        <div class="row">
          <input type="text" placeholder="收货人姓名" v-model="receiverName"/>
          <template>
            <p :style="receiverName_length">* 姓名请填写1-15字符</p>
          </template>
        </div>
        <div class="row">
          <input type="tel" placeholder="收货人手机号码" v-model="receiverTel"/>
          <template>
            <p :style="receiverTel_length">* 请填写有效的手机号</p>
          </template>
        </div>


        <!--保存按钮-->
        <button @click="modifyAddress" class="full-btn" type="button">保存</button>

      </form>
      <!--提交表单js-->
    </div>
  </div>
</template>

<script>

  import {mapState, mapGetters, mapActions} from 'vuex'
  import nav from '../header/nav.vue'

  export default {
    name: 'addressEdit',
    data() {
      return {
        addressTitle: "",
        addressTitle_length: {
          display: "none"
        },
        streetAddress: "",
        streetAddress_length: {
          display: "none"
        },
        receiverName: "",
        receiverName_length: {
          display: "none"
        },
        receiverTel: "",
        receiverTel_length: {
          display: "none"
        },
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
    watch: {
      addressTitle: function (val) {
        console.log(val)
        if (val) {
          this.addressTitle_length.display = "none"
        } else {
          this.addressTitle_length.display = "block"
        }
      },
      streetAddress: function (val) {
        if (val.length > 0 && val.length < 30) {
          this.streetAddress_length.display = "none"
        } else {
          this.streetAddress_length.display = "block"
        }
      },
      receiverName: function (val) {
        if (val.length > 0 && val.length < 15) {
          this.receiverName_length.display = "none"
        } else {
          this.receiverName_length.display = "block"
        }
      },
      receiverTel: function (val) {
        var myReg = /^1[34578]\d{9}$/;
        if (!myReg.test(val)) {
          this.receiverTel_length.display = "block"
        } else {
          this.receiverTel_length.display = "none"
        }
      }
    },
    methods: {
      modifyAddress: function () {
        var self = this;

        if (!self.provinceId) {
          this.addressTitle_length.display = "block"
        }
        if (!self.streetAddress) {
          this.streetAddress_length.display = "block"
        }
        if (!self.receiverName) {
          this.receiverName_length.display = "block"
        }
        if (!self.receiverTel) {
          this.receiverTel_length.display = "block"
        }
      }
    },
    mounted() {
      var self = this;
      this.$nextTick(function () {
        var area1 = new LArea();
        area1.init({
          'trigger': '#demo1', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
          'valueTo': '#value1', //选择完毕后id属性输出到该位置
          'keys': {
            id: 'id',
            name: 'name'
          }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
          'type': 1, //数据源类型
          'data': LAreaData //数据源
        });
        area1.value=[1,13,3];//控制初始位置，注意：该方法并不会影响到input的value
      })
    },
  }
</script>

<style scoped>
  .addressEdit {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 300;
    overflow: auto;
    background-color: #fff;
  }

  .add-address-box {
    margin-top: 3rem;
    padding: 0 1rem 60px 1rem;
    overflow: hidden;
  }

  .add-address-box .row {
    border-bottom: 1px dashed #ddd;
    padding: 10px 0;
    -webkit-box-align: center;
  }

  .add-address-box .row input {
    display: block;
    width: 100%;
    height: 2.6rem;
    margin: 2px 0;
    padding: 0 20px;
    font-size: 14px;
    border: 1px solid #B0B0B0;
    border-radius: 1.5rem;
    background: none;
    text-align: center;
  }

  .add-address-box .row p {
    margin-top: 0.5rem;
    color: #B63928;
  }

  .add-address-box .del {
    border: none;
  }

  .add-address-box .row:first-child {
    margin-top: 1rem;
  }

  .add-address-box .full-btn {
    display: block;
    border-radius: 1.5rem;
    margin: 2rem auto;
    width: 40%;
    border: none;
    outline: none;
    font-size: 1.4rem;
    text-align: center;
    color: #fff;
    background: #8B87C1;
  }

  .add-address-box .logo-img {
    width: 50%;
    margin: 2rem auto 3rem auto;
  }

  .add-address-box .logo-img img {
    width: 100%;
  }
</style>
