import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/food.route.js'

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