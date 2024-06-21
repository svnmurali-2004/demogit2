const express=require("express")
const app=express("express")
const cors=require("cors")
const mongoose=require("mongoose")
const connectDB = require("./db")
const authmiddleware=require("./middleware/authmiddleware")
const authRouter=require("./routes/authRouter")
const actionRouter=require("./routes/actionRouter")
const chatbotRouter=require("./routes/chatbotRouter")
const path=require("path")
require("dotenv").config()
// hello from feature branch
//hello from feature branch second time
//hello by main person

app.use(cors())
app.use(express.json())  
app.use("/api/users/",authRouter)
app.use("/api/actions/",actionRouter)
app.use("/api/chatbot/",chatbotRouter)
connectDB().then(()=>{
    app.listen(5000,()=>{console.log(`server is running at port ${process.env.port}`)})
})
