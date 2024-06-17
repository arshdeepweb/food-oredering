import { User } from "../models/user.model.js";


const addToCart = async (req, res) => {
  try {
    let userData = await User.findOne({_id:req.body.userId})
    let cartData = userData.cartData

    if(!cartData[req.body.itemId]){
      cartData[req.body.itemId] = 1
    } else {
      cartData[req.body.itemId] += 1
    }

    await User.findByIdAndUpdate(req.body.userId, {cartData})
    res.json({success:true, message:"Add To Cart"})

  } catch (error) {
    console.log(error);
    res.json({success:false, message:"Error"})

  }
};



const removeToCart = async (req, res) =>{
 try {
  let userData = await User.findOne({_id:req.body.userId})
  let cartData = userData.cartData

  if(cartData[req.body.itemId]>0){
    cartData[req.body.itemId] -= 1
  }

  await User.findByIdAndUpdate(req.body.userId,{cartData})
  res.json({success:true, message:"remove To Cart"})
 } catch (error) {
  console.log(error)
  res.json({success:false, message:"Error"})
 }
}

const getCart = async (req,res) =>{
  try {
    let userData = await User.findOne({_id:req.body.userId})
    let cartData = await userData.cartData
    res.json({success:true,message:cartData})
  } catch (error) {
    res.json({success:false,message:"error"})
  }
}

export {addToCart, removeToCart, getCart}