import express from "express"
import { changeRate,getRate } from "../controllers/setting/crud.controller.js"

const router = express.Router()

router.post("/changeRate",changeRate)
router.post("/getRate",getRate)

export default router