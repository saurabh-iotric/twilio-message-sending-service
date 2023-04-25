const express = require('express')
const app = express()
const messageRouter = require('./routes/messageRouter')

//body parser middleware
app.use(express.json());

app.use('/api/sms',messageRouter)

app.listen(9002,() => {
    console.log("server has been started")
})