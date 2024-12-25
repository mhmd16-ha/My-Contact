import mongoose from 'mongoose'

export const connectDb=async()=>{
    try{
        const connect=await mongoose.connect(process.env.CONNECTION_STRING)
        console.log(`Database connection is success with ${connect.connection.host} ${connect.connection.name}`); 
    }catch(err){
        console.log(err);
        process.exit(1)
        
    }
}