var express = require('express');
var db = require("./mysql");


//图片上传
var img_upload = require("../controller/public/img_upload")

//  商品上传页面
var goods_upload = require("../controller/goods/goods_upload")


module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render("index", {'title': 'zhuasdua'})
    })
    app.get('/login', function (req, res) {
        res.render("login", {'title': 'zhuasdua'})
    })


    app.get('/index_con', function (req, res) {
        res.render("index_con", {'title': '这是商城的主页'})
    })
    // public
        //图片上传
        app.post('/upload', img_upload.Img_upload)


    //商品列表
    app.get('/goods/goods_list', function (req, res) {
        db.fetch('select tb_goods.goods_id,tb_goods.goods_name,tb_goods.goods_Yprice,tb_goods.goods_Sprice,tb_goods.goods_num,tb_goods.goods_picArr,tb_goods.goods_addTime,tb_category.category from tb_goods LEFT JOIN tb_category on tb_goods.cat_id = tb_category.cat_id', function (err, rows) {
            if (err) {
                console.log(err);

            } else {
                console.log(rows)
                for(var i = 0;i < rows.length;i++){
                    console.log(rows[i].goods_picArr)
                    var d = (rows[i].goods_addTime)
                    d= d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
                    t = rows[i].goods_picArr.split(",");
                    rows[i].goods_picArr = t[0]
                    rows[i].goods_addTime = d;
                }
                res.render("goods/goods_list", {
                    'title': 'zhuasdua',
                    goods_list: rows
                })
            }

        })
    })


    //商品上传
    app.get('/goods/goods_upload', function (req, res) {
        db.fetch('select * from tb_category', function (err, rows) {
            if (err) {
                console.log(err);

            } else {
                res.render("goods/goods_upload", {
                    'title': 'zhuasdua',
                    category: rows
                })
            }
        })
    })
    app.post('/goods/goods_upload', goods_upload.upload)


}
