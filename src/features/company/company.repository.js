import mongoose from "mongoose";
import { companySchema } from "./company.schema.js";
import { customErrorHandler } from "../../../error-handlers/customErrorHandler.js";

const companyModel = mongoose.model('Company',companySchema);

export class CompanyRepository{
    async addCompany(companyObj)
    {
        try{
            let newCompanyObj = new companyModel(companyObj);
            await newCompanyObj.save();
            return { success : true , res : newCompanyObj };
        }
        catch(err)
        {
            if(err instanceof customErrorHandler)
            {
                    throw new customErrorHandler(err.message,err.code);
            }
            throw new Error(err.message);
        }
    }

    async listCompanies()
    {
        try{
            const companyList = await companyModel.find();
            return { success : true , res : companyList };
        }
        catch(err)
        {
            if(err instanceof customErrorHandler){
                throw new customErrorHandler(err.message,err.code);
            }
            throw new Error(err.message);
        }
    }

    async findCompany(companyName)
    {
        try{
            const regex = new RegExp(name, 'i'); 
            const companies = await this.find({ name: { $regex: regex } });
            return { success : true , res : companies };
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