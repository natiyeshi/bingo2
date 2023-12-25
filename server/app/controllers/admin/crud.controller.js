import createError from "http-errors"
import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"
import ChangePasswordJoi from "../../validation/admin/changePassword.joi.js"
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


export const updateAdmin = async (req,res,next) => {
    try{
        const adminPass = req.body
        console.log(adminPass)
        const validatedData = await ChangePasswordJoi.validateAsync(adminPass)
        if(validatedData.confirm != validatedData.password){
            throw createError.BadRequest("cofirm does not match")
        }

        let data = await prisma.admins.findUnique({ where : { id : req.id }})
        if(!data){
            throw createError.BadRequest("user not found!")
        }
        const match = await bcrypt.compare(validatedData.oldPassword,data.password);
        if(!match){
            throw createError.BadRequest("wrong password!")
        }
        const hashedPassword = await bcrypt.hash(validatedData.password, 10);
        let changePassword = await prisma.admins.update({ where : { id : req.id } , data : { password : hashedPassword }})
        console.log(changePassword)
        res.json(changePassword)
    }catch(err){
        if(err.isJoi) return next(createError.BadRequest(err.message))
        next(err)
    }
}
