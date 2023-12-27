import createError from "http-errors"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getAllBets = async (req,res,next) => {
    try{
        const bets = await prisma.bets.findMany({ include : { dealers : true }  })
        res.json(bets)
    }catch(err){
        next(err)
    }
}


export const getDealerBet = async (req,res,next) => {
    try{
        const { id } = req.body
        if(!id) throw createError.BadRequest()
        const charges = await prisma.bets.findMany({ where : { dealerId : id }})
        res.json(charges)
    }catch(err){
        next(err)
    }
}


// export const deleteCharge = async (req,res,next) => {
//     try{
//         const { id } = req.body
//         if(!id) throw createError.BadRequest()
//         const charge = await prisma.charges.deleteMany({ where : { id  } })
//         res.json(charge)
//     }catch(err){
//         next(err)
//     }
// }


// export const deleteAllCharges = async (req,res,next) => {
//     try{
//         const charge = await prisma.charges.deleteMany()
//         res.json(charge)
//     }catch(err){
//         next(err)
//     }
// }
