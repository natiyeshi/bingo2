import Joi from "joi"

// model settings{
//     id String @id @default(uuid())
//     rate Decimal
//   }
  
export default Joi.object({
    rate: Joi.number().min(0).max(100).required(),
})