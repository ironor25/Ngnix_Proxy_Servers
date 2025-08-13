import express from "express"

const app = express()

app.get("/",(req,res)=>{
    res.json({
        message: "hi this is shoe server"
    })
})

app.listen(3000,()=>{
    console.log("shoe-server")
})