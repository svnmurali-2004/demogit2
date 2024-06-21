const {GoogleGenerativeAI}=require("@google/generative-ai")
require("dotenv").config()
const asyncHandler = require('express-async-handler');
const chatbot=asyncHandler(async(req,res)=>{
    try{
    const history =req.body.history
    const message=req.body.message
    const generationConfig=req.body.generationConfig
    console.log(process.env.API_KEY)
    const genAI=new GoogleGenerativeAI(process.env.API_KEY)
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});

        const chat = model.startChat({
            history: history,
            generationConfig: generationConfig,
            
            
        });
            
        const result = await chat.sendMessage(message);
        console.log(result.response.text())

         res.send({acknowledged:true,text:result.response.text()})
        }catch(err){
            console.log(err)
        }
})

module.exports=chatbot