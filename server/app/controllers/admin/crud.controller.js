import createError from "http-errors"
import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const deleteAdmin = async (req,res,next) => {
    try{
        const { id } = req.params
        const data = await prisma.admins.delete({ where : { id }})
        res.json(data)
    }catch(err){
        next(err)
    }
}


export const getAllAdmins = async (req,res,next) => {
    try{
        const data = await prisma.admins.findMany()
        res.json(data)
    }catch(err){
        next(err)
    }
}

export const getAdmin = async (req,res,next) => {
    try{
        const { id } = req.params
        if(!id) throw createError.BadRequest("not found")
        let data = await prisma.admins.findUnique({ where : { id }})
        res.json(data)
    }catch(err){
        next(err)
    }
}
