var mongoose = require('mongoose')
var Schema = mongoose.Schema
// var imageSchema = new Schema({
//     imageDate: { type: Date, default: Date.now }
// })

var postSchema = new Schema({
    title: {type:String, index:"text"}, // 구독 상품명
    subTitle: {type:String, index:"text"}, // 구독 짧은 설명
    image: String, // 로고 
    type: String, // 월정액인지
    content: String,
    category: String, // 카테고리
    price : Number, // 가격
    like : {type:Boolean,default:false}, // 좋아요 눌렀는지
    likeCount : Number, 
    feat : String,
    // 좋아요 수
    images : Array // 이미지들
},{ versionKey: '_somethingElse' })


module.exports = mongoose.model('post',postSchema)