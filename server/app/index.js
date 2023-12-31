import express from "express";
import morgan from "morgan";
import dotenv from 'dotenv';
import chalk from 'chalk';
import cors from "cors"
import cookieParser from "cookie-parser";
import createError from "http-errors";
import path,{ dirname } from "path"
// custome import
import adminRoute from "./routes/admin.router.js"
import dealerRoute from "./routes/dealer.router.js"
import chargeRoute from "./routes/charge.router.js"
import settingRoute from "./routes/setting.route.js"
import betRoute from "./routes/bet.router.js"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


dotenv.config();
const app = express()
const PORT = process.env.PORT || 4000
//middlewares
app.use(express.static(path.join(__dirname, 'static')));
app.use(morgan("dev"))
app.use(express.json())
app.use(cors({ 
    origin : ["http://localhost:5173"],
    credentials : true
}))
app.use(cookieParser())
//routes
app.use("/admin",adminRoute)
app.use("/dealer",dealerRoute)
app.use("/charge",chargeRoute)
app.use("/setting",settingRoute)
app.use("/bet",betRoute)

app.get("*",(req,res,next)=>{

    res.sendFile(path.join(__dirname, 'static', 'index.html'));
})

app.use((req,res,next) => {
    next(createError.NotFound("route not found"))
})


app.use((err,req,res,next) => {
    res.status(err.status || 500)
    console.log(chalk.bgYellow.black.bold(err))
    res.send({
        error: { 
            "status" : err.status || 500,
            "message" : err.message || " internale server error",
        }
    })
})

app.listen(PORT,console.log(chalk.bgBlue.bold(` port ${PORT}.... `)))