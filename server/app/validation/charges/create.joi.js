import Joi from "joi"

// model charges {
//     id String @id @default(uuid())
//     date DateTime @default(now())
//     amount Decimal
  
//     dealerId String
//     dealers dealers @relation(fields: [dealerId],references: [id],onDelete: Cascade)
  
//   }
export default Joi.object({
    dealerId: Joi.string(),
    amount : Joi.string().min(0).required()
})