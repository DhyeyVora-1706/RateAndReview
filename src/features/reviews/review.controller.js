import { ReviewRepository } from "./review.repository.js";


export class ReviewController{
    
    constructor(){
        this.reviewRepository = new ReviewRepository();
    }

    async addReview(req,res,next)
    {
        try{
            const {companyId} = req.params.companyId;
            const newReview = {...req.body,companyId};
            const response = await this.reviewRepository.addReview(newReview);
            return res.status(200).json({
                success : response.success,
                msg : "Review Added Successfully",
                res : response.res
            })
        }
        catch(err)
        {
            next(err);
        }
    }

    async getAllReviews(req,res,next)
    {
        try{
            const response = await this.reviewRepository.getAllReviews();
            return res.status(200).json({
                success : response.success,
                res : response.res
            })
        }
        catch(err)
        {
            next(err);
        }
    }

    async getReviewPerCompany(req,res,next)
    {
        try{
            const response = await this.reviewRepository.getAllReviews();
            return res.status(200).json({
                success : response.success,
                data : response.res
            })
        }
        catch(err)
        {
            next(err);
        }
    }
}