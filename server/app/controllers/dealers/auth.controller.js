import createError from "http-errors"
import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"
import DealerLoginJoi from "../../validation/dealer/login.joi.js"
import DealerSignupJoi from "../../validation/dealer/signup.joi.js"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient()

export const signup = async (req,res,next)=>{
    let dealerSend =  req.body
    delete dealerSend["confirm"]
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
        const dealerDb = await prisma.dealers.findUnique({
            where : {
                username : dealer.username,
            }
        })
        if (!dealerDb) throw createError.BadRequest("user not found")
        const match = await bcrypt.compare(dealer.password,dealerDb.password);
        if(!match) throw createError.BadRequest("incorrect creadential")
        if(!dealerDb.working) throw createError.BadRequest("user is not allowed!")
        dealerDb.password = null
        res.cookie("access_token",jwt.sign({ id : dealerDb.id},process.env.ACCESS_TOKEN))
        .json(dealerDb)
        
    }catch(err){
        next(err)
    }
}

export const logout = async (req,res,next)=>{
    res.cookie("access_token","").send()
}