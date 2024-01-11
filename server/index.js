import express from 'express'
import mongoDB from './db/db.js'
import dotenv from 'dotenv'
dotenv.config();
import { Server } from 'socket.io'
import { signupPostApi, loginPostApi } from './controller/user.controller.js'

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 5000


const io = new Server(5002, {
    cors: {
        origin: '*'
    }
})
//socket connection
io.on("connection", (socket) => {
    socket.emit("user connected");
    socket.on("message", (data) => {
        console.log(data)
    })   //"message is event name"
})

//reciever api 

app.get('/sends', async (req, res) => {
    const { message } = req.query
    io.emit("recieve", message)
    res.json({
        message: "Message sent"
    })
})
//user Login and SignUp
app.post('/api/v1/signups', signupPostApi)
app.post('/api/v1/logins', loginPostApi)

app.listen(PORT, () => {
    console.log(`port is running on port ${PORT}`)
    mongoDB()
})


