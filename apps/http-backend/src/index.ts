import express from "express"
import jwt from "jsonwebtoken"
import { middleware } from "./middleware";
import { JWT_SECRET } from "./config";

const app = express()

app.post("/signup",(req,res)=>{
    console.log("Sign up");
    jwt.sign({req},JWT_SECRET)

    
})

app.post("/signin",(req,res)=>{
    console.log("Sign up");
    
})

app.post("/room",middleware,(req,res)=>{
    console.log("Create Room");
    
})

app.listen(3004)