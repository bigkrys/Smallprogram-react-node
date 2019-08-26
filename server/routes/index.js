var express = require('express');
var router = express.Router();
var Index = require('../models/index');

router.get('/index', function (req, res) {
    //返回首页信息
    var songList = Index.find({}, function (err, data) {
        if (err) throw  err;
        res.send(data)
    });
});


router.post('/login', function (req, res) {

});
router.post('/register', function (req, res) {

});