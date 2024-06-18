import express from 'express'
import {authMiddleware } from '../middlewares/auth.middleware.js'
import { listOrders, placeOrder, userOrder } from '../controllers/order.controller.js'

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder)
orderRouter.post("/userorder",authMiddleware,userOrder)
orderRouter.post("/listorder",listOrders)

export default orderRouter