var db = require("../../routes/mysql");
//mock 随机生成随机数
var Mock = require('mockjs');

exports.upload = function (req,res) {

    var cat_id = req.body.cat_id
    var goods_name = req.body.goods_name
    var goods_Yprice = req.body.goods_Yprice
    var goods_Sprice = req.body.goods_Sprice
    var goods_num = req.body.goods_num
    var goods_picArr = req.body.goods_picArr
    var goods_content = req.body.goods_content

    var Random = Mock.Random
    let natural=(Random.natural(10000000,99999999));
    let string=(Random.string("lower",5 ));
    var goods_id = cat_id+string+natural;

    console.log(goods_id,cat_id,goods_name,goods_Yprice,goods_Sprice,goods_num,goods_picArr,goods_content)

    db.fetch("insert into tb_goods(goods_id,cat_id,goods_name,goods_Yprice,goods_Sprice,goods_num,goods_picArr,goods_content) values('" + goods_id + "','" + cat_id + "','" + goods_name + "','" + goods_Yprice + "','" + goods_Sprice + "','" + goods_num + "','" + goods_picArr + "','" + goods_content + "')",function (err,rows) {
        if(err){
            console.log(err)
        }else{
            console.log(rows)
        }
    })
}
