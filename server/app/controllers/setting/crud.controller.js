import createError from "http-errors"
import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const changeRate = async (req,res,next) => {
    try{
        const { rate } = req.body
        const data = await prisma.settings.updateMany({ data : { rate }})
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

