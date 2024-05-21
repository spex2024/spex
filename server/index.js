import express from 'express'
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'
import Feedback from "./routes/feedback.js";
import User from "./routes/user.js";
import * as bodyParser from "express";
import cookieParser from "cookie-parser";


dotenv.config()

const app = express();
app.use(cors({
    origin: 'https://spex-africa.vercel.app',
    credentials :true
}));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());


 app.use('/api' , Feedback)
 app.use('/api' ,User )
app.use('/', (req,res) =>{
   res.send("Server has started")
})






// DB CONNECTION
mongoose.connect(process.env.HOST)
    .then(() =>app.listen(process.env.PORT ,()=> console.log(`Server connected to the database and running on port ${process.env.PORT}`)))
    .catch((err) => console.log(`error : ${err.message}`))
