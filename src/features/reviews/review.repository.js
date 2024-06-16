import mongoose from "mongoose";
import { reviewSchema } from "./review.schema.js";
import { customErrorHandler } from "../../../error-handlers/customErrorHandler.js";

const reviewModel = mongoose.model('review',reviewSchema);

export class ReviewRepository{
    async addReview(reviewObj)
    {
        try{
            const newReview = new reviewModel(reviewObj);
            await newReview.save();
            return { success : true , res : newReview };
        }
        catch(err){
            if(err instanceof customErrorHandler){
                throw new customErrorHandler(err.message,err.code);
            }
            throw new Error(err.message);
        }
    }

    async getAllReviews(sortrder){
        try{
            const reviews = await reviewModel.find();
            return { success : true , res : reviews };
        }
        catch(err)
        {
            if(err instanceof customErrorHandler){
                throw new customErrorHandler(err.message,err.code);
            }
            throw new Error(err.message);
        }
    }

    async reviewsByCompany(companyId)
    {
        try{
            const validCompany = await reviewModel.find({companyId});
            if(!validCompany)
            {
                throw new customErrorHandler("companyId Invalid",404);
            }
            else
            {
                let review = await reviewModel.find({companyId})
                return { success : true , res : review };
            }
        }
        catch(err)
        {
            if(err instanceof customErrorHandler){
                throw new customErrorHandler(err.message,err.code);
            }
            throw new Error(err.message);
        }
    }
}
