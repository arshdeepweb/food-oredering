import { User } from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import validator from 'validator'

const loginUser = async (req, res) => {
  console.log(req.json)
  const {email,password} = req.body
  try {
    const user = await User.findOne({email})

    if(!user){
      return res.json({success:false,message:"User Doesn't Exist"})
    }

    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch){
      return res.json({success:false,message:"invalid Credentials"})
    }

    const token = createToken(user._id)
    res.json({success:true,token})

  } catch (error) {
    console.log(error)
    res.json({success:false,message:"error"})
  }
}

const createToken = (id) =>{
  return jwt.sign({id},process.env.JWT_SECRET)
}

const registerUser = async (req, res) => {
  const {name,email,password} = req.body;
  try {
    const exist = await User.findOne({email});
    if(exist){
      return res.json({success:false,message:"User already exists"})
    }

    if(!validator.isEmail(email)){
      return res.json({success:false,message:"Enter Valid Email"})
    }

    if(password.length<8){
      return res.json({success:false,message:"Please Enter Strong Password"})
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,salt)

    const newUser = new User({
      name:name,
      email:email,
      password:hashPassword
    })

    const user = await newUser.save()
    const token = createToken(user._id)

    res.json({success:true,message:token})

  } catch (error) {
    console.log(error)
    res.json({success:true,message:token})
  }
}

export {loginUser, registerUser}