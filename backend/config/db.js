import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB = async () =>{

  try{
    await mongoose.connect(`mongodb+srv://arshdeep:arsh4576@cluster0.r3hfo9u.mongodb.net/${DB_NAME}`);
    console.log(`MongoDB Connected `);
  }catch(error){
    console.log("MONGODB Connection Failed : ",  error)
  }

}

export {connectDB}