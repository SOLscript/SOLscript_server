var mongoose = require('mongoose')
var Schema = mongoose.Schema
// var imageSchema = new Schema({
//     imageDate: { type: Date, default: Date.now }
// })

var userSchema = new Schema({
    email: String,
    // fbToken: String,
    sns: String,
    name: String,
    
    jsonWebToken: String
},{ versionKey: '_somethingElse' })


module.exports = mongoose.model('user',userSchema)