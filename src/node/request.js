/**
 * Created by Administrator on 2017/7/21.
 */
// import request from 'request';
var request = require('request'),
    fs = require('fs');

request('https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1514013475070', function (error, response) {
  console.log(response.body)
});
