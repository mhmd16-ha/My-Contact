import { catchError } from "./CatchError.js";
import  jwt  from 'jsonwebtoken';

export const validationToken=catchError(async(req,res,next)=>{
let {token}=req.headers
if(token){
    jwt.verify(token,process.env.JWT_KEY,(err,decoded)=>{
        if(err){
            res.status(401)
            throw new Error ("user is not authorized")
        }
        req.user=decoded.user 
        next() 
    })
}
if(!token){
        res.status(401)
        throw new Error ("user is not authorized")
}
})