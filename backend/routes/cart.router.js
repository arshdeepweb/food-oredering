import express from "express";
import { addToCart, removeToCart, getCart } from "../controllers/cart.controller.js";
import {authMiddleware} from "../middlewares/auth.middleware.js";

const cartRouter = express.Router()

cartRouter.post("/add", authMiddleware, addToCart)
cartRouter.post("/remove",authMiddleware, removeToCart)
cartRouter.post("/get",authMiddleware, getCart)

cartRouter.post("/hi",(req,res)=>{
  res.send("Hi User")
})


export {cartRouter}