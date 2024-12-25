import mongoose from "mongoose";

const schema =mongoose.Schema({
    userName:{
        type:String,
        require:[true,'Please add the user name']
    },
    email:{
        type:String,
        require:[true,'Please add the user email'],
        unique:[true,'Email address already taken']
    },
    password:{
        type:String,
        require:[true,'Please add the user password'],
       
    }

},{
    timestamps:true,
    versionKey:false,
})
const UserModel=mongoose.model("User",schema)
export default UserModel