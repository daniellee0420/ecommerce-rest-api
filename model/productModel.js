const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: {
        type:String
    },
    description: {
        type:String
    },
    price: {
        type:Number
    },
    discountPercentage: {
        type:Number
    },
    rating: {
        type:Number
    },
    stock: {
        type:Number
    },
    brand: {
        type:String
    },
    category: {
        type:String
    },
    thumbnail:{
        type:String
    },
    images:{
        type : Array , "default" : []
    }

})

module.exports = mongoose.model("product", productSchema)