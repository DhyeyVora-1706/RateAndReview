import { CompanyRepository } from "./company.repository.js";


export class CompanyController{

    constructor(){
        this.companyrepository = new CompanyRepository();
    }

    async addCompany(req,res,next)
    {
        try{
            const response = await this.companyrepository.addCompany(req.body);
            return res.status(201).json({
                success : response.success,
                msg : "Company Added Successfully",
                data : response.res
            })
        }
        catch(err)
        {
            next(err);
        }
    }

    async listCompany(req,res,next)
    {
        try{
            const response = await this.companyrepository.listCompanies();
            return res.status(200).json({
                success : response.success,
                data : response.res
            });
        }
        catch(err)
        {
            next(err);
        }
    }

    async findCompany(req,res,next)
    {
        try{
            const response = await this.companyrepository.findCompany(req.body.companyName);
            if(!response)
            {
                return res.status(200).json({
                    success : true,
                    msg : "No Company Found matching finding the search criteria"
                })
            }
            else
            {
                return res.status(200).json({
                    success : response.success,
                    msg : response.res
                })
            }
        }
        catch(err)
        {
            next(err);
        }
    }
}