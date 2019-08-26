var express = require('express');
// var config = require('./config/default')
//创建应用
var app = express();
// var goodsRouter = require('./routes/index');
// app.use('/index', goodsRouter);
var Index = require('./models/index');
app.get('/index',function (req,res) {
    var songList = Index.find({}, function (err, data) {
        if (err) throw  err;
        res.send(data)
        console.log(data)
    });
})
//监听
app.listen(3000, function() {
    console.log('listen on 3000')
})