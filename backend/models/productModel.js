import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {type: String,required:true,unique:true},
        slug:{type: String,required:true,unique:true},
        image: {type: String,required:true},
        smeBrand: { type: mongoose.Schema.Types.ObjectId, ref: 'SME', required: true },
        smeName:{type:String,required:true},
        type:{type:String,required:true},
        brand:{type: String},
        category:{type: String,required:true},
        description:{type: String,required:true},
        price:{type: Number,required:true},
        countInStock:{type: Number},
        rating:{type: Number,required:true},
        numReviews:{type: Number,required:true},
    },
    {
        timestamps:true
    }
);

const Product = mongoose.model('Product',productSchema);
export default Product;