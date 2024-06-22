import express from 'express'
import {authMiddleware } from '../middlewares/auth.middleware.js'
import { listOrders, orderStatus, placeOrder, userOrder } from '../controllers/order.controller.js'

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder)
orderRouter.post("/userorder",authMiddleware,userOrder)
orderRouter.get("/listorder",listOrders)
orderRouter.post("/updateStatus",orderStatus)

export default orderRouter