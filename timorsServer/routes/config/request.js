/**
 * Created by Administrator on 2017/7/21.
 */
var db = require("../mysql");
var request = require('request'),
    fs = require('fs');


function getDat(){
    request('https://m.mafengwo.cn/?category=get_info_flow_list&page=3', function (error, res) {
        console.log("123")
        var data = (JSON.parse(res.body).data).list;
        console.log(data)




        for (var item in data) {
            //先判断当前的旅行列表数据是否存在
            db.fetch('select * from tb_travel where travel_id="' + data[item].data.id + '"', function (err, rows) {
                if (err) {
                    console.log(err);
                } else {
                    if(rows){
                        db.fetch("insert into tb_travel (travel_id,travel_title,travel_jumpurl,travel_imgurl,travel_content,travel_time,travel_fabulous)" +
                            "values ('" + data[item].data.id + "','" + data[item].data.title + "','" + data[item].data.jump_url + "','" + data[item].data.image + "','" + data[item].data.content + "','" + data[item].data_source.mtime + "','" + data[item].data_source.pv + "')", function (err, rows) {
                            if (err) {
                                console.log(err);
                            } else {
                                // console.log(rows)
                            }
                        })
                    }
                }
            });


        }
    });
}

module.exports.getDat = getDat;