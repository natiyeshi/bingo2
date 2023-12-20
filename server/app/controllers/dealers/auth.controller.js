import createError from "http-errors"
import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"
import DealerLoginJoi from "../../validation/dealer/login.joi.js"
import DealerSignupJoi from "../../validation/dealer/signup.joi.js"

const prisma = new PrismaClient()

export const signup = async (req,res,next)=>{
    const dealerSend =  req.body
    try{
        const dealerJoi = await DealerSignupJoi.validateAsync(dealerSend)
        const hashedPassword = await bcrypt.hash(dealerJoi.password, 10);
        const newDealer = {...dealerJoi,password : hashedPassword}
        let dealerDb = await prisma.dealers.create({data : newDealer})
        res.json(dealerDb)
    }catch(err){
        if(err.isJoi) return next(createError.BadRequest(err.message))
        next(err)
    }
}

export const login = async (req,res,next)=>{
    const loginData =  req.body
    try{
        const dealer = await DealerLoginJoi.validateAsync(loginData)
        const adimnDb = await prisma.dealers.findUnique({
            where : {
                username : dealer.username
            }
        })
        if (!adimnDb) throw createError.BadRequest("user not found")
        const match = await bcrypt.compare(dealer.password,adimnDb.password);
        if(!match) throw createError.BadRequest("incorrect creadential")
        adimnDb.password = null
        res.json(adimnDb)
    }catch(err){
        next(err)
    }
}