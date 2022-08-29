const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    
    phoneNumber:{
        type:String,
        require:true
    },
    
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true

    },
    
    password:{
        type:String,
        require:true,
    },
    
})
let saltRound = 5;
userSchema.pre('save',function(next){
    bcrypt.hash(this.password,saltRound,(err,hashedPassword)=>{
        if (err) {
            console.log(`error in hashing password `)
            
        } else {
            this.password = hashedPassword
            next()
            
        }
    })
})
userSchema.methods.validatePassword = function(password,callback)
{
    bcrypt.compare(password,this.password,(err,same)=>{
        if (!err) {
            callback(err,same)
            
        } 
        else {
           next()
            
        }
    })
}
let userModel = mongoose.model('user_tb',userSchema)
module.exports= userModel