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

})
module.exports={displaySignup}