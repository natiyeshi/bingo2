import createError from "http-errors";
import jwt from "jsonwebtoken";

export const checkAdminMw = (req,res,next) => {
    const token = req.cookies?.admin_access_token || ""
    try{
       const data = jwt.verify(token,process.env.ADMIN_ACCESS_TOKEN)
       req.id = data.id
       next()
    }catch(err){
        console.log("admin middleware error")
        res.cookie("admin_access_token","")
        next(createError.Unauthorized())
    }
}