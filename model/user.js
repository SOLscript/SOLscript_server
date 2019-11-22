var mongoose = require('mongoose')
var Schema = mongoose.Schema
// var imageSchema = new Schema({
//     imageDate: { type: Date, default: Date.now }
// })

var userSchema = new Schema({
    subList: Array,
    usage: Array,
    
},{ versionKey: '_somethingElse' })


module.exports = mongoose.model('user',userSchema)