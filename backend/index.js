const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send({
        message : "this is get endpoint"
    })
})

app.post("/",(req,res)=>{
    res.send({
        message : "this is post endpoint"
    })
})