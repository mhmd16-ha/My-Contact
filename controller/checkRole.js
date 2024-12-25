
import ContactModel from '../models/ContactModel.js';
import { catchError } from './../middleware/CatchError.js';
export const checkRole=catchError(async(req,res,next)=>{
  const doc=await ContactModel.findById(req.params.id) 
  if(!doc){
    res.status(404)
    throw new Error("user don't have authorize to update this contact")
  }
  if(doc.userId==req.user.userId){
      next() 
    }
} )