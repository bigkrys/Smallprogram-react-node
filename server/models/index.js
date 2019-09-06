var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 声明一个数据集 对象
var indexSchema = new Schema({
    username: {
        type: String,
        unique: true
    },

});
// 将数据模型暴露出去
module.exports = {
    schema:indexSchema,
    model:mongoose.model("Index",indexSchema)
}