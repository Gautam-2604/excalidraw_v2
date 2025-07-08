import express from "express"
import jwt from "jsonwebtoken"
import { middleware } from "./middleware";
import { JWT_SECRET } from "backend-common/config"
import { createRoomSchema, createUserSchema, signInSchema } from "common/types";

const app = express()

app.post("/signup",(req,res)=>{
    const data =createUserSchema.safeParse(req.body)
    if(!data.success){
        return res.json({
            message:"Chekc inputs"
        })
    }
    console.log("Sign up");
    jwt.sign({req},JWT_SECRET)

    
})

app.post("/signin",(req,res)=>{
    const data =signInSchema.safeParse(req.body)
    if(!data.success){
        return res.json({
            message:"Chekc inputs"
        })
    }
    console.log("Sign up");
    
})

app.post("/room",middleware,(req,res)=>{
    const data =createRoomSchema.safeParse(req.body)
    if(!data.success){
        return res.json({
            message:"Chekc inputs"
        })
    }
    console.log("Create Room");
    
})

app.listen(3004)