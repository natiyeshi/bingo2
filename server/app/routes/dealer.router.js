import express from "express"
import { signup,login, logout } from "../controllers/dealers/auth.controller.js"
import { bet, deleteDealer,getAllDealers,getDealer,updateWorking } from "../controllers/dealers/crud.controller.js"
import { checkAdminMw } from "../middlewares/checkAdmin.js"
import { checkDealerMw } from "../middlewares/checkDealer.js"
const router = express.Router()

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
router.post("/getDealer/:id",checkDealerMw,getDealer)
router.post("/bet",checkDealerMw,bet)
router.post("/delete/:id",deleteDealer)
router.post("/updateWorking/:id",updateWorking)
router.post("/getAllDealers",checkAdminMw,getAllDealers)

export default router