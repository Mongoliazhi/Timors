/**
 * Created by Administrator on 2017/8/20.
 * vue 全局过滤器filter
 */
import Vue from 'vue';
import * as  _public from './public'

// 修改时间
Vue.filter('time',
  function (data) {
    return data.substring(0, 10) + "      " + data.substring(11, 19);
  })

// 图片分割 获取第一张图片
Vue.filter('getImgOne',
  function (data) {
    var t = data.split(",");
    return _public.getHttp + t[0];
  })


export default Vue;


