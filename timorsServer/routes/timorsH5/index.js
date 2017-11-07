var express = require('express');
var db = require("../mysql");



module.exports = function (app) {
    //用户登陆
    app.post('/timorsLogin', function (req, res) {
        // res.render("login", {'title': 'zhuasdua'})

        let username = req.body.username;
        let password = req.body.password;
        console.log(username+"...."+password)
        db.query('select * from tb_account where user_name="'+username+'"', function (err, rows) {
            if (err) {
                console.log(err);
            } else {
                console.log(rows)
                console.log(rows[0].user_password)
                if(rows.length==0){
                    res.send("1") //
                }
                else if(rows[0].user_password != password){
                    res.send("2")
                }else if(rows[0].user_password == password){
                    res.send(rows[0])
                }

            }
        })
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
