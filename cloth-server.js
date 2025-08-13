import express from "express"
import cors from "cors"
const app = express()

app.use(cors())
app.get("/",(req,res)=>{
    res.json({
        message: "hi this is cloth server"
    })
})
app.get("/shop",(req,res)=>{
    res.json("Welcome to fancy clothing  page.")
})
app.listen(3001,()=>{
    console.log("cloth-server on port 3001")
})