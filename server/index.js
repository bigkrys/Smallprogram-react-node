
var express = require('express');   //引入express模块
var mysql = require('mysql');     //引入mysql模块
var app = express();        //创建express的实例
var https = require('https'),fs=require('fs');
var options = {
    key: fs.readFileSync('./2874836_liangzebra.xyz.key'),
    cert: fs.readFileSync('./2874836_liangzebra.xyz.pem')
}
var httpsServer = https.createServer(options,app);
var httpServer = https.createServer(app);
app.use('/public/img',express.static('public/img'));
app.use('/public/music',express.static('public/music'));
var connection = mysql.createConnection({      //创建mysql实例
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'1011AK,LWL',
    database:'server'
});
connection.connect();
var sql = 'SELECT * FROM album';
var indexresult,hotresult;
var sql1 = 'SELECT * FROM hotlist'
connection.query(sql, function (err,result) {
    if(err){
        console.log('[SELECT ERROR]:',err.message);
    }
    indexresult = result
    // console.log(result);  //数据库查询结果返回到result中
     ////服务器响应请求
});
connection.query(sql1, function (err,result) {
    if(err){
        // console.log('[SELECT ERROR]:',err.message);
    }
    hotresult = result
    // console.log(result);  //数据库查询结果返回到result中
    // ////服务器响应请求
});
app.get('/',function (req,res) {
    res.send('hello,i m krysliang');  ////服务器响应请求
    console.log('有 get请求')
});
app.get('/index',function (req,res) {
    var result = {
        index:indexresult,
        hotlist:hotresult
    }
    res.send(result);
});
connection.end();
httpServer.listen(3001,function () {    ////监听3000端口
    console.log('Shttp erver running at 30001 port');
});
httpsServer.listen(3000,function () {    ////监听3000端口
    console.log(' https Server running at 3000 port');
});