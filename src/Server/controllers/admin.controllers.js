const adminModel = require('../models/admin.model')
const productModel = require("../models/product.model")
const jwt = require("jsonwebtoken")
const JWT = process.env.JWT_SECRET
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret:process.env.API_SECRET
});
module.exports={}