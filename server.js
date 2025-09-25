const express = require('express')
// ໃນ fs ມີຫຼາຍຟັງຊັນ ເຮົາເອົາຄີຟັງຊັນອັນໜື່ງມາໃຊ້ເທົ່ານັ້ນ
// const { readdirSync } = require('fs')
const readdirSync = require('fs')
const morgan = require('morgan')
const cors = require('cors')
const bodypaser = require('body-parser')
// fs = filesystem

// readdirSync.readlinkSync()


// const routerproduct =  require('./Routes/products')
// const routerunit =  require('./Routes/unit')

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(bodypaser.json({limit:"10mb"}))

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

// ເປີດ port ໃຫ້ໝູ່ເຂົ້າຖືງ
app.listen(5000, ()=>console.log("Server runing on port 5000"))

// localhost:5000/api