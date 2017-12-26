var express = require('express');
var db = require("../mysql");
var returnData = require("../config")

var request = require('request'),
    fs = require('fs');

module.exports = function (app) {
    //快捷登陆记录用户
    app.post('/registerUser', function (req, res) {
        console.log(req.body)
        db.fetch("insert into tb_account (user_name,user_headImg,user_gender)" +
            "values ('" + req.body.user_name + "','" + req.body.user_headImg + "','" + req.body.user_gender + "')", function (err, rows) {
            if (err) {
                console.log(err);
            } else {
                db.fetch('select * from tb_account where user_name ="'+req.body.user_name+'"', function (err, rows) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(rows)
                        var data = returnData(rows[0],400,'success','')
                        res.send(data)
                    }
                })
            }
        })
    })
    //用户登陆
    app.post('/timorsLogin', function (req, res) {
        // res.render("login", {'title': 'zhuasdua'})

        let username = req.body.username;
        let password = req.body.password;
        console.log(username+"...."+password)
        db.fetch('select * from tb_account where user_nameNum="'+username+'"', function (err, rows) {
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
                    var data = returnData(rows[0],400,'success','')
                    res.send(data)
                }

            }
        })
    })

    //首页获取商品列表
    app.post('/mainGetgoodslist', function (req, res) {
        // console.log(req.body)
        db.fetch('select * from tb_goods', function (err, rows) {
            if (err) {
                console.log(err);
            } else {
                res.send(rows)
            }
        })
    })
    //首页获取商品详情
    app.post('/getGoodsDetail', function (req, res) {
        // console.log(req.body.goodsId)
        db.fetch('select * from tb_goods where goods_id="'+req.body.goodsId+'"', function (err, rows) {
            if (err) {
                console.log(err);
            } else {
                var data = returnData(rows,400,'success','')
                res.send(data)
            }
        })
    })


    //music

    //music 收藏
    app.post('/musicCollection', function (req, res) {
        // console.log(req.body)
        if(req.body.isCollection == 1){ //添加收藏
            db.fetch('select * from tb_userMusic where user_id="'+req.body.user_id+'" and id ="'+ req.body.id +'"', function (err, rows) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(rows)

                    // var data = [];
                    // for(var i=0;i<rows.length;i++){
                    //     console.log(data[i])
                    //     data.push(rows[i])
                    // }
                    // console.log(data)
                    console.log("123213")
                    if(rows.length > 0){
                        console.log("3124124")
                        if(req.body.user_id == rows[0].user_id && req.body.id == rows[0].id){
                            console.log("1133")
                            var data = returnData({},400,'fail','请勿反复提交')
                            res.send(data)
                        }else{
                            console.log("1144")
                            db.fetch("insert into tb_userMusic (user_id,albummid,id,mid,name,singer_id,singer_mid,singer_name,isCollection)" +
                                "values ('" + req.body.user_id + "','" + req.body.albummid + "','" + req.body.id + "','" + req.body.mid + "','" + req.body.name + "','" + req.body.singer_id + "','" +req.body.singer_mid + "','" + req.body.singer_name +"','" + req.body.isCollection + "')", function (err, rows) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    var data = returnData({},400,'success','')
                                    res.send(data)
                                }
                            })
                        }
                    }else{
                        console.log("1155")
                        db.fetch("insert into tb_userMusic (user_id,albummid,id,mid,name,singer_id,singer_mid,singer_name,isCollection)" +
                            "values ('" + req.body.user_id + "','" + req.body.albummid + "','" + req.body.id + "','" + req.body.mid + "','" + req.body.name + "','" + req.body.singer_id + "','" +req.body.singer_mid + "','" + req.body.singer_name +"','" + req.body.isCollection + "')", function (err, rows) {
                            if (err) {
                                console.log(err);
                            } else {
                                var data = returnData({},400,'success','')
                                res.send(data)
                            }
                        })
                    }

                }
            })

        }else{ //删除收藏

        }

    })



    //music 用户音乐收藏 列表
    app.post('/getMusicLoveList', function (req, res) {
        console.log(req.body)
        db.fetch('select * from tb_userMusic where user_id="'+req.body.user_id+'"', function (err, rows) {
            if (err) {
                console.log(err);
            } else {
                console.log(rows)
                var data = returnData(rows,400,'success','')
                res.send(data)
            }
        })
    })


    //travel 旅行列表
    app.post('/oneT', function (req, res) {
        console.log(req.body)
        db.fetch('select * from tb_travel', function (err, rows) {
            if (err) {
                console.log(err);
            } else {
                var data = returnData(rows,400,'success','')
                res.send(data)
            }
        })
    })
    //商品上传
/*    app.get('/goods/goods_upload', function (req, res) {
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
    })*/



}
