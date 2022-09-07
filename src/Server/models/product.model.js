const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    
    category:{
        type:String,
        require:true
    },
    
    price:{
        type:String,
        require:true
    },
    size:{
        type:String ,
        require:true

    },
    
    image:{
        type:String ,
        require:true,
    },
    flavours:{
        type:String,
        require:true,
    },

    yearofP:{
        type:String,
        require:true,
    },
    date:{
        type:Date,
        default:Date.now

    },

    
})
let productModel = mongoose.model('product_tb',productSchema)
module.exports= productModel