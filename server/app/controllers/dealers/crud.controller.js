import createError from "http-errors"
import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const deleteDealer = async (req,res,next) => {
    try{
        const { id } = req.params
        const data = await prisma.dealers.delete({ where : { id }})
        res.json(data)
    }catch(err){
        next(err)
    }
}


export const getAllDealers = async (req,res,next) => {
    try{
        const data = await prisma.dealers.findMany()
        res.json(data)
    }catch(err){
        next(err)
    }
}

export const getDealer = async (req,res,next) => {
    try{
        const { id } = req.params
        const data = await prisma.dealers.findUnique({ where : { id }})
        res.json(data)
    }catch(err){
        next(err)
    }
}
