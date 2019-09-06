
var express = require('express');   //引入express模块
var mysql = require('mysql');     //引入mysql模块
var app = express();        //创建express的实例
app.use('/public/img',express.static('public/img'));
app.use('/public/nusix',express.static('public/music'));
var connection = mysql.createConnection({      //创建mysql实例
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'1011AK,LWL',
    database:'server'
});
connection.connect();
var sql = 'SELECT * FROM album';
var indexresult;
connection.query(sql, function (err,result) {
    if(err){
        console.log('[SELECT ERROR]:',err.message);
    }
    indexresult = result
    console.log(result);  //数据库查询结果返回到result中
     ////服务器响应请求
});
app.get('/',function (req,res) {
    res.send('hello,i m krysliang');  ////服务器响应请求
});
app.get('/index',function (req,res) {
    res.send(indexresult);
});
connection.end();
app.listen(3000,function () {    ////监听3000端口
    console.log('Server running at 3000 port');
});