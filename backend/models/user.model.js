import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  cartData:{
    type:Object,
    default:{}
  }
},{minimize:false})

export const User = mongoose.models.User || mongoose.model("User", userSchema)