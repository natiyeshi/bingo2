import jwt from "jsonwebtoken";

export const signAdmin = (load) => {
    return jwt.sign(load,process.env.SECRETE_TOKEN)
}