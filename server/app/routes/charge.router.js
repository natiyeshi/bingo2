import express from "express"
import { charge,getDealerCharge,getAllCharges,deleteAllCharges,deleteCharge } from "../controllers/charges/crud.controller.js"

const router = express.Router()

router.post("/chargeDealer",charge)
router.post("/getAllCharges",getAllCharges)
router.post("/getDealerCharge",getDealerCharge)
router.post("/deleteCharge",deleteCharge)
router.post("/deleteAllCharges",deleteAllCharges)

export default router