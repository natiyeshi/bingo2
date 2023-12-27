import createError from "http-errors"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const charge = async (req,res,next) => {
    try{
        console.log(req.body)
        const { id,amount } = req.body 
        if(!id || !amount){
            throw createError.BadRequest()
        }
        const data = {
            dealerId : id ,
            amount 
        }
        const dealerAmount = await prisma.dealers.findUnique({ where : { id } })
        const newAmount = parseFloat(amount) + parseFloat(dealerAmount.amount)
        await prisma.dealers.update({ where : { id },data : { amount : newAmount}}) 
        const charge = await prisma.charges.create({ data })
        res.json({ id,newAmount })
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
        const charges = await prisma.charges.findMany({ where : { dealerId : id }})
        res.json(charges)
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
