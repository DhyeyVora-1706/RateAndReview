import express from 'express';
import { ReviewController } from './review.controller.js';

export const reviewRouter = express.Router();
let reviewController = new ReviewController();


reviewRouter.post("/addReview/:companyId",(req,res,next) => {
    reviewController.addReview(req,res,next);
})

reviewRouter.get("/getAllReviews/",(req,res,next) => {
    reviewController.getAllReviews(req,res,next);
})

reviewRouter.get("/getReviews/:companyId",(req,res,next) => {
    reviewController.getReviewsList(req,res,next);
})