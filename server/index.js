import express from 'express'
import  mongoDB from './db/db.js'
import dotenv from 'dotenv'
dotenv.config();

import { signupPostApi,loginPostApi } from './controller/user.controller.js'

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 5000


//user Login and SignUp
app.post('/api/v1/signups',signupPostApi )
app.post('/api/v1/logins',loginPostApi )

app.listen(PORT,()=>{
    console.log(`port is running on port ${PORT}`)
    mongoDB()
})


