const adminModel = require('../models/admin.model')
const productModel = require("../models/product.model")
const jwt = require("jsonwebtoken")
const cloudinary = require ('cloudinary')
const JWT = process.env.JWT_SECRET
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret:process.env.API_SECRET
});
const setProduct = ((req,res)=>{
    const name = req.body.name
    const price = req.body.price
    const category = req.body.category
    const size = req.body.size 
    const yearofP = req.body.yearofP
    const flavours = req.body.flavours
    const file = req.body.file
    cloudinary.v2.uploader.upload(file,
        {
            folder: 'Liquor Store',
            //  public_id:`/${id1}`,
            format: 'jpg'
        },
        (err,result)=>{
        if (err) {
            console.log(err,`Upload Failed`)
            res.send({message:`Upload Failed`, status :false})
            
        } else {
            const form = new productModel({name,price,size,yearofP,flavours,category,"image":result.secure_url})
    form.save((err)=>{
        if (err) {
            console.log(err,`an error occured in saving this item`)
            res.send({message:`Error in saving product, please try again`,status:false})
            
        } else {
            res.send({message:`You have successfully added this product`,status:true})
            
        }
    })
        }
    })
    
})
module.exports={setProduct}