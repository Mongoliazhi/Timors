/**
 * Created by Administrator on 2017/8/20.
 * vue 全局过滤器filter
 */


    // 图片分割 获取第一张图片
    Vue.filter('img_desp',
        function(value) {
            var t = JSON.parse(value)
            return t[0];
        })
    // 图片分割 获取所有图片
    Vue.filter('img_despAll',
        function(value) {
            //T为分割的数组
            console.log(value)
            var t = JSON.parse(value)
            console.log(t[0])
        })

    //首页将价格数字转出成iconfont
    Vue.filter('main_price',
        function(value) {
            //T为分割的数组
            var price_html = '<i class="iconfont gj-rmb"></i>';
            for (var i = 0; i < value.length; i++) {
                price_html += '<i class="iconfont gj-' + value[i] + '"></i>'
            }
            console.log(price_html)
            return price_html

        })

    //将图片链接地址 添加域名地址
    Vue.filter('img_url',
        function(value) {
            //T为分割的数组
            var img_url = 'http://daily-test.oss-cn-hangzhou.aliyuncs.com/'+value;
            return img_url

        })

    //时间转换
    Vue.filter('time',
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
    //购物车数量转换
    Vue.filter('cart_Num',
        function(Num) {

            var Num = parseInt(Num);
            if (Num > 9) {
                Num = 9 + '+';
                return Num;
            } else if (Num == 0) {
                return;
            } else {
                return Num;
            }
        })
    //将数字转化中文数字
    Vue.filter('num_China',
        function(val) {
            switch (val){
                case 1:
                    return  "一"
                    break;
                case 2:
                    return  "二"
                    break;
                case 3:
                    return  "三"
                    break;
                case 4:
                    return  "四"
                    break;
                case 5:
                    return  "五"
                    break;
                case 6:
                    return  "六"
                    break;
                case 7:
                    return  "七"
                    break;
                case 8:
                    return  "八"
                    break;
                case 9:
                    return  "九"
                    break;
                case 10:
                    return "十"
                    break;
            }

        })
    //购物车数量转换
    Vue.filter('PriceHandle',
        function(num) {
            var newnum="";
            num=num+"";
            var temp=num.split("\.");
            var mylength=0;
            if(temp.length>=2){
                mylength=temp[1].length;
            }
            switch(mylength){
                case 0:
                    newnum=num+".00";
                    break;
                case 1:
                    newnum=num+"0";
                    break;
                default:
                    newnum=num;
                    break;
            }
            return newnum
        })

    //时间转换 获取年月日期
    Vue.filter('yearm',
        function(Num) {
            var t = new Date(Num);
            return t.toLocaleDateString().replace(/\//g,'.')

        })

    Vue.filter('yearsf',
        function(Num) {
            var t = new Date(Num);
            var tem = t.toLocaleTimeString().replace(/['上午','下午']/g,'')
            var arr_t = tem.split(':')
            var time1;
            if(t.toLocaleTimeString().indexOf('上午') != -1){
                return arr_t[0] + ':' + arr_t[1]
            }else{
                return (parseInt(arr_t[0])+12) + ':' + arr_t[1]
            }
        })


export Vue;


