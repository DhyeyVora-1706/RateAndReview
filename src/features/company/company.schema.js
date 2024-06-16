import mongoose from "mongoose";

export const companySchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "CompanyId is required"]
    },
    location:{
        type:String,
        required : [true,"Location is required"]
    },
    FoundedOn:{
        type:Date,
        required : [true,'Founder Date is required']
    },
    Logo : {
        type:String,
        required : [true,"logo is required"]
    },
    city:{
        type:String,
        required:[true,"city is required"]
    }
})