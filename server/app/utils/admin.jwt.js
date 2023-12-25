import jwt from "jsonwebtoken";

export const signAdmin = (load) => {
    return jwt.sign(load,process.env.ACCESS_TOKEN)
}