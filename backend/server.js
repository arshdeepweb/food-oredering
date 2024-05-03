import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/food.route.js'
import userRouter from './routes/user.route.js'
import 'dotenv/config'

// config

const app = express()
const port = 4000

// middleware

app.use(cors())
app.use(express.json())

// database connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
app.use("/api/user", userRouter)
app.use("/images", express.static('uploads'))

app.get("/",(req,res)=>{
  res.send("Api Working")
})
app.get("/insta",(req,res)=>{
  res.send("Instagram")
})

app.listen(port,()=>{
  console.log(`server is started from http://localhost:${port}`)
})