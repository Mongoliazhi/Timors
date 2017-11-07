var express = require('express');
var db = require("./mysql");



module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render("index", {'title': 'zhuasdua'})
    })
    app.post('/login', function (req, res) {
        // res.render("login", {'title': 'zhuasdua'})
        console.log(req.body)
        res.send("1112");
    })

    //商品上传
/*    app.get('/goods/goods_upload', function (req, res) {
        db.query('select * from tb_category', function (err, rows) {
            if (err) {
                console.log(err);

            } else {
                res.render("goods/goods_upload", {
                    'title': 'zhuasdua',
                    category: rows
                })
            }
        })
    })*/



}
