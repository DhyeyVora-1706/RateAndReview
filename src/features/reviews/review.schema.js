import mongoose from "mongoose";

export const reviewSchema = new mongoose.Schema({
    fullname : {
        type: String,
        required : [true,"Name is required"]
    },
    subject : {
        type:String,
        required : [true,"subject is required"]
    },
    reviewText : {
        type:String,
        required : [true,"review text is required"]
    },
    ratings : {
        type:Number,
        required : [true,"Ratings are required"]
    },
    companyId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Company'
    }
})