
import axios from 'axios'
// import qs from 'qs'
// import * as _ from '../util/tool'

axios.defaults.timeout = 10000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';           //配置请求头
axios.defaults.baseURL = 'http://localhost:3000';   //配置接口地址
//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  //在发送请求之前做某件事
  if(config.method  === 'post'){
    // config.data = qs.stringify(config.data);
  }
  return config;
},(error) =>{
  // _.toast("错误的传参", 'fail');
  console.log("错误的传参")
  // return Promise.reject(error);
});
//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
  //对响应数据做些事
  console.log(res)
  // if(!res.data.success){
  if(!res.data){
    // _.toast(res.data.msg);

    return Promise.reject(res);
  }
  return res;
}, (error) => {
  // _.toast("网络异常", 'fail');
  console.log("错误的传参")
  return Promise.reject(error);
});
//返回一个Promise(发送post请求)
export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        console.log("fetch success!")
        resolve(response);
      }, err => {
        console.log("77799")
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}


