const express = require('express')
<<<<<<< HEAD
// ໃນ fs ມີຫຼາຍຟັງຊັນ ເຮົາເອົາຄີຟັງຊັນອັນໜື່ງມາໃຊ້ເທົ່ານັ້ນ
// const { readdirSync } = require('fs')
=======
// ໃນ fs ມີຫຼາຍຟັງຊັນ ເຮົາເອົາຄີ(ໃນ JSON)ຟັງຊັນອັນໜື່ງມາໃຊ້ເທົ່ານັ້ນ
// fs = filesystem
>>>>>>> 14570d6a9eb844fdd629aec0ed06a4ac1e076fdd
const { readdirSync } = require('fs')
const morgan = require('morgan')
const cors = require('cors')
const bodypaser = require('body-parser')
const connectDB = require('./DB/dbconnect')

// readdirSync.readlinkSync()

// const routerproduct =  require('./Routes/products')
// const routerunit =  require('./Routes/unit')

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(bodypaser.json({limit:"10mb"}))
connectDB()

app.get('/favicon.ico', (req, res) => res.status(204).end());


/*app.get("/api", (req, res) => {
    res.send('Hello, get endpoint')
})

// id ໃຊ້ໄວ້ຄົ້ນຂໍ້ມູນ, ແກ້ໄຂຂໍ້ມູນ ແລະ ລຶບຂໍ້ມູນ
app.get("/api/:id", (req, res) => {
    const id = req.params.id

    res.send(`Hello, show ID ${id} endpoint`)
    // or
    // res.send('Hello, show ID' + id + 'endpoint')
})*/

// app.use('/api', routerproduct)
// app.use('/api', routerunit)

readdirSync('./Routes').map((r)=>app.use('/api', require(`./Routes/${r}`)))
// readdirSync('./Routes').map((r)=>app.use('/', require(`./Routes/${r}`))) ສາມາດເຂົ້າໄດ້ໂດຍບໍ່ຕ້ອງມີຄຳວ່າ api ກໍໄດ້ (localhost:5000/product/12421)

// ເປີດ port ໃຫ້ໝູ່ເຂົ້າຖືງ
app.listen(5000, ()=>console.log("Server runing on port 5000"))

// localhost:5000/api