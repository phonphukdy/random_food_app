const express = require('express')
const router = express.Router()

// router ເຮັດໄດ້ຄືກັບ app
router.get('/product',(req, res)=>{
    res.send('Hello, products router endpoint')
})

router.get('/product/:id',(req, res)=>{
    const id = req.params.id   

    res.send(`Hello, products by ID ${id} router endpoint`)
})

module.exports = router

// localhost:5000/api/product
