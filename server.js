const express = require('express')
const { readdirSync } = require('fs')
const morgan = require('morgan')
const cors = require('cors')
const bodypaser = require('body-parser')

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(bodypaser.json({limit:"10mb"}))

readdirSync('./Routes').map((r)=>app.use('/api', require(`./Routes/${r}`)))


// app.get('/', (req, res) => res.send("Server is running"))

app.listen(5000, ()=>console.log("Server runing on port 5000"))