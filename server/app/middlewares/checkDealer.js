import createError from "http-errors";
import jwt from "jsonwebtoken";

export const checkDealerMw = (req,res,next) => {
    const token = req.cookies?.access_token || ""
    try{
       const data = jwt.verify(token,process.env.ACCESS_TOKEN)
       req.id = data.id
       next()
    }catch(err){
        console.log("dealer middleware error")
        res.cookie("access_token","")
        next(createError.Unauthorized())
    }
}