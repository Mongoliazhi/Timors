var mysql = require('mysql');

var pool = mysql.createPool({
    host     : '139.224.233.15',
    user     : 'root',
    password : 'shuling520.',
    port: '3306',
    database: 'timors',
});

function fetch(sql, callback) {
    pool.getConnection(function (err, connection) {
        // Use the connection
        connection.query(sql, function (err, rows) {
            callback(err, rows);
            connection.release();//释放链接
        });
    });
}

module.exports.fetch = fetch;
