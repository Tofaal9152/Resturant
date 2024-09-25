import express from "express"
import dotenv from "dotenv"
import connectDB from './db/connectDB.js'
dotenv.config();
connectDB()
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
