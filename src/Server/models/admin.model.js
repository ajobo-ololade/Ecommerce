const mongoose = require ('mongoose')
const bcrypt = require('bcryptjs')
const adminSchema = mongoose.Schema({
    email:{
        type:String,
        require:true
    },

    
    fullName:{
        type:String,
        require:true
    },
   
    password:{
        type:String,
        require:true,
    },
    

})
let adminModel = mongoose.model('admin_tb',adminSchema)
module.exports = adminModel
