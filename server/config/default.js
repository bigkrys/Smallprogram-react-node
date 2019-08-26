/**
 * 配置文件
 * @type {{ports: number}}
 */
var express = require('express');
express.modules.exports = {
    ports:3000,
    session:{
        secret:'myapp',
        key:'myapp',
        maxAge:2592000000
    },
    mongodb:'mongodb://localhost:27017/server'
}