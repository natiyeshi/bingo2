import express from "express"
import { signup,login,logout } from "../controllers/admin/auth.controller.js"
import { deleteAdmin,getAllAdmins,getAdmin,updateAdmin } from "../controllers/admin/crud.controller.js"
import { checkAdminMw } from "../middlewares/checkAdmin.js"

const router = express.Router()

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
router.post("/getAdmin/:id",checkAdminMw,getAdmin)
router.post("/delete/:id",checkAdminMw,deleteAdmin)
router.post("/getAllAdmins",checkAdminMw,getAllAdmins)
router.post("/changePassword",checkAdminMw,updateAdmin)

export default router