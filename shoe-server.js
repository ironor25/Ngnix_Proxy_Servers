import express from "express"
import cors from "cors"

const app = express()


app.use(cors())

app.get("/",(req,res)=>{
    res.json({
        message: "hi this is shoe server"
    })
})

app.get("/shop",(req,res)=>{
    res.json("Welcome to shoe shopping page.")
})

app.listen(3000,()=>{
    console.log("shoe-server on 3000")
})