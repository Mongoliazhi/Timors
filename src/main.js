// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import axios from  'axios'

import App from './App'
import router from './router'
import store from './vuex/index'

Vue.config.productionTip = false

Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  template: '<App/>',
  components: { App }
})
