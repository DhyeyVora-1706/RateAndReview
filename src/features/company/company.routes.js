import express from 'express';
import { CompanyController } from './company.controller.js';

export const companyRouter = express.Router();
const companycontroller = new CompanyController();


companyRouter.post("/addCompany/",(req,res,next) => {
    companycontroller.addCompany(req,res,next);
})

companyRouter.get("/getCompanyList/",(req,res,next) => {
    companycontroller.listCompany(req,res,next);
})

companyRouter.get("/findCompany/",(req,res,next) => {
    companycontroller.findCompany(req,res,next);
})

