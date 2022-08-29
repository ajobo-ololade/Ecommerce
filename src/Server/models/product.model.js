const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    nameofProduct:{
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
    sizes:{
        type:String,
        require:true

    },
    
    picture:{
        type:String,
        require:true,
    },
    flavours:{
        type:String,
        require:true,
    },

    yearofProduction:{
        type:String,
        require:true,
    },

    
})
let productModel = mongoose.model('product_tb',productSchema)
module.exports= productModel