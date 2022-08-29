const userModel = require("../models/user.model")
const cloudinary = require ('cloudinary')
const jwt = require("jsonwebtoken")
const JWT = process.env.JWT_SECRET
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret:process.env.API_SECRET
});
const displaySignup = ((req,res)=>{
    const newUser = req.body
    userModel.findOne({email:req.body.email},(err,result)=>{
        if (result) {
            res.send({message:"Email already exist", status:false})
            console.log(`Email alraedy exist`)
            
        } else {
            const form = new userModel(newUser)
            form.save((err)=>{
                if (err) {
                    console.log(err,`An Error occured in signing up`)
                    res.send({message:`Sign up failed`, status:false})
                    
                } else {
                    res.send({message:`Registration Successful`, status:true})
                    
                }
            })
            
        }
    })

})
const displaySignin = ((req,res)=>{
    const email = req.body.email
    const password = req.body.password
    userModel.findOne({email:email},(err,user)=>{
        if (err) {
           res.status(501).send({message:`Server Error`,status:false})
            
        } else {
            if (!user) {
                console.log(err)
                res.send({message:`Email not found`,status:false})
                
            } else {
                user.validatePassword(password,(err,result)=>{
                    if (err) {
                        console.log(`ERROR IN GENERATING TOKEN`)
                        
                    } else {
                        if (result) {
                            const token = jwt.sign({email},JWT,{expiresIn:3600})
                            res.send({message:`Correct password`,status:true,user,token})
                        } else {
                            res.send({message:`Invalid Password`,status:false})
                        }
                        
                    }
                })
                
            }
            
        }
    })

})
module.exports={displaySignup,displaySignin}