import Joi from "joi"
/*
@ database schema

model admins {
  id String @id @default(uuid())
  username String @db.VarChar(255)
  password String @db.VarChar(255)
  @@unique([username])
}
*/
export default Joi.object({
    oldPassword: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(3).required(),
    confirm: Joi.string().min(3).required(),
})