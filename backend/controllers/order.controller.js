import Stripe from 'stripe';
import {Order} from '../models/order.model.js';
import {User} from '../models/user.model.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
  

  try {
    // Create a new order
    const newOrder = new Order({
      userId: req.body.userId,
      items: req.body.items,
      address: req.body.address,
      amount: req.body.amount,
      payment: req.body.payment
    });

    await newOrder.save();

    // Clear user cart data
    await User.findByIdAndUpdate(req.body.userId, { cartData: {} });

    

    res.json({ success: true, message : "Order Placed" });
    console.log("Stripe session created successfully.");

  } catch (error) {
    console.error("Error creating order or Stripe session:", error);
    res.json({ success: false, message: "Error" });
  }
};

const userOrder = async (req,res) =>{

  try {
    const orders = await Order.find({userId:req.body.userId})
    res.send({success:true,data:orders})
  } catch (error) {
    console.log(error);
    res.send({success:false, message: "Error"})
  }
  
}

const listOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
    res.send({success:true,data:orders})
  } catch (error) {
    console.log(error); 
    res.send({success:false,message:"Error"})
  }
}

const orderStatus = async (req, res) =>{
  try {

    const reqstatus = req.body.status
    const updateStatus = await Order.findByIdAndUpdate({_id:req.body._id},{status:reqstatus})
    res.send({success:true,message:"Update Status"})
  } catch (error) {
    console.log(error);
    res.send({success:false,message:"Error"})
  }
}

export {placeOrder, userOrder, listOrders, orderStatus};
