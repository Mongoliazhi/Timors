/**
 * Created by Administrator on 2017/9/28.
 */
import Vue from 'vue';


Vue.filter('time', function (value) {
    console.log(value)
    return value.slice(0,10)
})

//时间转换
Vue.filter('time1',
  function(date) {
    var type = "";

    var gmtCreate = new Date(date),
      y = gmtCreate.getFullYear(),
      m = (gmtCreate.getMonth()+1)<=9?'0'+ (gmtCreate.getMonth()+1):(gmtCreate.getMonth()+1),
      d = gmtCreate.getDate()<=9?'0'+ gmtCreate.getDate():gmtCreate.getDate(),
      h = gmtCreate.getHours()<=9?'0'+ gmtCreate.getHours():gmtCreate.getHours(),
      mi = gmtCreate.getMinutes()<=9?'0'+ gmtCreate.getMinutes():gmtCreate.getMinutes();
    if(type == 'zh'){
      date = y + '年' + m + '月' + d + '日 ' + h + ':' +  mi;
    }else{
      date = y + '-' + m + '-' + d + ' ' + h + ':' +  mi;
    }
    return date;


  })


// 图片分割 获取第一张图片
Vue.filter('img_desp',
  function(value) {
    var s = value.split(",")
    return s[0];
  })
//将图片链接地址 添加域名地址
Vue.filter('img_url',
  function(value) {
    //T为分割的数组
    var img_url = 'http://localhost:3000'+value;
    return img_url

  })
export default Vue
