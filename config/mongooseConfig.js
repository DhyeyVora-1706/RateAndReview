import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";

const db_url = process.env.DB_URL;
export async function connectToMongoDB(){
    try{
        await mongoose.connect(db_url,{
            useNewUrlParser : true,
            useUnifiedTopology : true
        });
        console.log("Connected to mongoDB");
    }
    catch(err)
    {
        console.log(err);
    }
}