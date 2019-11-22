var mongoose = require('mongoose')
var Schema = mongoose.Schema
// var imageSchema = new Schema({
//     imageDate: { type: Date, default: Date.now }
// })

var postSchema = new Schema({
    title: {type:String, index:"text"},
    subTitle: {type:String, index:"text"},
    image: String,
    category: String,
    price : Number,
    like : Boolean,
    likeCount : Number,
    images : Array
},{ versionKey: '_somethingElse' })


module.exports = mongoose.model('post',postSchema)