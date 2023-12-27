import express from "express"
import { getAllBets,getDealerBet } from "../controllers/bets/crud.controller.js"

const router = express.Router()

router.post("/getAllBets",getAllBets)
router.post("/getDealerCharge",getDealerBet)

export default router