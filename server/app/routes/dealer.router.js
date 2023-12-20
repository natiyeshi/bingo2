import express from "express"
import { signup,login } from "../controllers/dealers/auth.controller.js"
import { deleteDealer,getAllDealers,getDealer } from "../controllers/dealers/crud.controller.js"

const router = express.Router()

router.post("/signup",signup)
router.post("/login",login)
router.post("/getDealer/:id",getDealer)
router.post("/delete/:id",deleteDealer)
router.post("/getAllDealers",getAllDealers)

export default router