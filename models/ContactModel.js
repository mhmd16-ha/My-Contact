import mongoose from "mongoose";


const schema=mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        require:true,
        ref:"User"
    },
    name:{
        type:String,
        require:[true,"please add the contact name"]
    },
    email:{
        type:String,
        require:[true,"please add the contact email"]
    },
    phone:{
        type:String,
        require:[true,"please add the contact phone"]
    },
},{
    timestamps:true,
    versionKey:false,
})

const ContactModel=mongoose.model("Contact",schema)
export default ContactModel