import  jwt from "jsonwebtoken";
import { catchError } from "../middleware/CatchError.js";
import UserModel from "../models/UserModel.js";
import bcrypt from 'bcrypt'

const registerUser=catchError(async(req,res)=>{
    const {userName,email,password}=req.body
    if(!userName||!email||!password){
        res.status(400)
        throw new Error("all fields are maditory")
    }
    const availableEmail=await UserModel.findOne({email})
    if(availableEmail){
        res.status(400)
        throw new Error("user already register")
    }
    req.body.password=bcrypt.hashSync(password,8)
    const user=new UserModel(req.body)
    await user.save()
    res.status(200).json({message:"Register succcess",id:user._id,email:user.email})
})
const loginUser=catchError(async(req,res)=>{
    const {email,password}=req.body
    if(!email||!password){
        res.status(400)
        throw new Error("all fields are maditory")
    }
    const availableEmail=await UserModel.findOne({email})
    if(email&&bcrypt.compareSync(password,availableEmail.password)){
        let token=jwt.sign({user:{userId:availableEmail._id,email:availableEmail.email,userName:availableEmail.userName}},process.env.JWT_KEY
            ,{expiresIn:"5 day"}
        )
    res.status(200).json({message:"login",token})
    }else{
        res.status(401)
        throw new Error("email or password is not faild")     
    }
 
})
const curruntUserInfo=catchError(async(req,res)=>{
     let user=req.user
    res.status(200).json({message:"curruntUserInfo",user})
})


export{
    registerUser,loginUser,curruntUserInfo
}