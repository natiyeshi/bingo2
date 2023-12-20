import express from "express"
import { signup,login } from "../controllers/admin/auth.controller.js"
import { deleteAdmin,getAllAdmins,getAdmin } from "../controllers/admin/crud.controller.js"

const router = express.Router()

router.post("/signup",signup)
router.post("/login",login)
router.post("/getAdmin/:id",getAdmin)
router.post("/delete/:id",deleteAdmin)
router.post("/getAllAdmins",getAllAdmins)

export default router