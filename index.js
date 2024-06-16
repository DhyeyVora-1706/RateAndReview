import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { connectToMongoDB } from './config/mongooseConfig.js';
import { customErrorHandler } from './error-handlers/customErrorHandler.js';
import { companyRouter } from './src/features/company/company.routes.js';
import { reviewRouter } from './src/features/reviews/review.routes.js';

const app = express();
const port = process.env.PORT_NUMBER;
app.use(express.json());

app.use("/api/companies",companyRouter);
app.use("/api/reviews",reviewRouter);


app.use((err,req,res,next) => {
    if(err instanceof customErrorHandler)
    {
        return res.status(err.code).json({error : err.message});
    }

    console.log(err);
    res.status(500).send('Something Went Wrong , Please try Later');
})

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
    connectToMongoDB();
})
