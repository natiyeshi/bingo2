import Joi from "joi"

// model dealers{
//     id String @id @default(uuid())
//     firstName String @db.VarChar(255)
//     lastName String @db.VarChar(255)
//     username String @db.VarChar(255)
//     password String @db.VarChar(255)
//     amount Decimal
  
//     charges charges[]
//     @@unique([username]) 
//   }
  
export default Joi.object({
    username: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(3).required(),
})