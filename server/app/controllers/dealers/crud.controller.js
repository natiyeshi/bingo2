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
        let data = await prisma.dealers.findMany({ select : {
            amount : true,
            charges : true,
            firstName : true,
            id : true,
            lastName : true,
            username : true,
            working: true
        }})
        res.json(data)
    }catch(err){
        next(err)
    }
}

export const getDealer = async (req,res,next) => {
    try{
        const id = req.id
        const data = await prisma.dealers.findUnique({ where : { id }})
        res.json(data)
    }catch(err){
        next(err)
    }
}


export const updateWorking = async (req,res,next) => {
    try{
        const { id } = req.params
        const data = await prisma.dealers.findUnique({ where : { id }})
        if(!data){
            throw createError.BadRequest("user not found")
        }
        const newData = await prisma.dealers.update({ 
            where : { id },
            data : {
                working  : !data.working
             }
         })
        console.log(newData)
        res.json(newData)
    }catch(err){
        next(err)
    }
}


export const bet = async (req,res,next) => {
    try{
        const id = req.id
        let { betAmount, numberOfPlayers } = req.body
        betAmount = parseFloat(betAmount)
        numberOfPlayers = parseInt(numberOfPlayers)
        if(numberOfPlayers < 2) throw createError.BadRequest("number of players must be greater than 1")
        if(betAmount < 10) throw createError.BadRequest("amount should be greater than 10!")
        const betValue = numberOfPlayers * betAmount  
        const dealer = await prisma.dealers.findUnique({ where : { id }})
        const dealerAmount = parseFloat(dealer.amount)
        if(!dealer){
            throw createError.BadRequest("user not found")
        }
        const setting = await prisma.settings.findFirst()

        const rate = parseFloat(setting.rate)
        const commution = betValue * rate / 100 
        
        if(dealerAmount < commution){
            throw createError.BadRequest("not enough money!")
        }
        const newValue = dealerAmount - commution
        const saveBet = await prisma.bets.create({
            data : {
                numberOfPlayers : numberOfPlayers,
                betAmount : betAmount,
                totalBet : betValue,
                commution : commution,
                netWinnerGain : betValue - commution,
                currRate : rate,
                dealerId : id
            }
         })
        console.log(saveBet)
        const newData = await prisma.dealers.update({ 
            where : { id },
            data : {
                amount : newValue
             }
         })
        console.log(newData)
        res.json(newData)
    }catch(err){
        next(err)
    }
}

