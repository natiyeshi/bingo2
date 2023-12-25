import createError from "http-errors"
import { PrismaClient } from "@prisma/client"
import SettingJoi from "../../validation/setting/setting.joi.js"
const prisma = new PrismaClient()

export const changeRate = async (req,res,next) => {
    try{
        const rate = req.body
        // throw createError.BadGateway(JSON.stringify(rate))
        const validatedData = await SettingJoi.validateAsync(rate)
        const data = await prisma.settings.updateMany({ data : { rate : validatedData.rate }})
        res.json(data)
    }catch(err){
        next(err)
    }
}

export const getRate = async (req,res,next) =>{
    try{
        const data = await prisma.settings.findFirst()
        res.json(data)
    }catch(err){
        next(err)
    }

}

