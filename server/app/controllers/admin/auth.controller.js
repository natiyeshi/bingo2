import createError from "http-errors"
import bcrypt from "bcrypt"
import AdminJoi from "../../validation/admin/admin.joi.js"
import { PrismaClient } from "@prisma/client"
import { signAdmin } from  "../../utils/admin.jwt.js"
import jwt from "jsonwebtoken"
const prisma = new PrismaClient()

export const signup = async (req,res,next)=>{
    const adminSend =  req.body
    try{
        const adminJoi = await AdminJoi.validateAsync(adminSend)
        const hashedPassword = await bcrypt.hash(adminJoi.password, 10);
        const newAdmin = {...adminJoi,password : hashedPassword}
        let adminDb = await prisma.admins.create({data : newAdmin})
        res.json(adminDb)
    }catch(err){
        if(err.isJoi) return next(createError.BadRequest(err.message))
        next(err)
    }
}

export const login = async (req,res,next)=>{
    const loginData =  req.body
    try{
        const admin = await AdminJoi.validateAsync(loginData)
        const adimnDb = await prisma.admins.findUnique({
            where : {
                username : admin.username
            }
        })
        if (!adimnDb) throw createError.BadRequest("user not found")
        const match = await bcrypt.compare(admin.password,adimnDb.password);
        if(!match) throw createError.BadRequest("incorrect creadential")
        const data = {
           username : adimnDb.username
        }
        res.cookie("admin_access_token",jwt.sign({ id : adimnDb.id},process.env.ADMIN_ACCESS_TOKEN))
           .json(data)
    }catch(err){
        next(err)
    }
}


export const logout = async (req,res,next)=>{
    res.cookie("admin_access_token","").send()
}