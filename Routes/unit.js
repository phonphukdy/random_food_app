const express = require('express')
const router = express.Router()

router.get('/unit',(req, res)=>{
    res.json({"hello" : "Hello unit router endpoint"})
})

router.get('/unit/:id',(req, res)=>{
    const id = req.params.id
    res.json({"hello" : `Hello unit router ID ${id} endpoint`})
})

module.exports = router