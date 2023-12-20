import createError from "http-errors"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const charge = async (req,res,next) => {
    try{
        const { id,amount } = req.body 
        if(!id || !amount){
            throw createError.BadRequest()
        }
        const data = {
            dealerId : id ,
            amount 
        }
        const charge = await prisma.charges.create({ data, include : { dealers : true }  })
        res.json(charge)
    }catch(err){
        next(err)
    }
}


export const getAllCharges = async (req,res,next) => {
    try{
        const charge = await prisma.charges.findMany({ include : { dealers : true }  })
        res.json(charge)
    }catch(err){
        next(err)
    }
}


export const getDealerCharge = async (req,res,next) => {
    try{
        const { id } = req.body
        if(!id) throw createError.BadRequest()
        const charge = await prisma.charges.findMany({ where : { dealerId : id }, include : { dealers : true }  })
        res.json(charge)
    }catch(err){
        next(err)
    }
}


export const deleteCharge = async (req,res,next) => {
    try{
        const { id } = req.body
        if(!id) throw createError.BadRequest()
        const charge = await prisma.charges.deleteMany({ where : { id  } })
        res.json(charge)
    }catch(err){
        next(err)
    }
}


export const deleteAllCharges = async (req,res,next) => {
    try{
        const charge = await prisma.charges.deleteMany()
        res.json(charge)
    }catch(err){
        next(err)
    }
}
