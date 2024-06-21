const express=require("express")
const app=express("express")
const cors=require("cors")
const mongoose=require("mongoose")
const connectDB = require("./db")
const authmiddleware=require("./middleware/authmiddleware")
const authRouter=require("./routes/authRouter")
const actionRouter=require("./routes/actionRouter")
const path=require("path")
require("dotenv").config()
//hello by main person
//hello by murali
//hello by murali
app.use(cors())
app.use(express.json())  
app.use("/api/users/",authRouter)
app.use("/api/actions/",actionRouter)
connectDB().then(()=>{
    app.listen(5000,()=>{console.log(`server is running at port ${process.env.port}`)})
})
