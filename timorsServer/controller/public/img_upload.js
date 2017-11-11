var formidable = require('formidable'),
    http = require('http'),
    util = require('util');

exports.Img_upload = function (req,res) {

    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        console.log("11111111111111111");
        //创建表单上传
        var up_file = null;
        var form = new formidable.IncomingForm();
        //设置编辑
        form.encoding = 'utf-8';
        //设置文件存储路径ss
        form.uploadDir = "public/timors";//win本地上传
        //保留后缀
        form.keepExtensions = true;
        //设置单文件大小限制
        form.maxFieldsSize = 2 * 1024 * 1024;
        //form.maxFields = 1000;  设置所以文件的大小总和

        form.parse(req, function (err, fields, files) {
            console.log("2222222222222222222")
            if (err) {
                res.render('/', {title: "sb"});
                return;
            } else {
                //console.log(files)
                var html = files.file.path;
                console.log(html)
                var rs = /\w*.\w*$/g;
                var re = "/timors/" + html.match(rs).toString();
                console.log(re)
                res.end(re);
            }
        });
        return;
    }
}
