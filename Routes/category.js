const express = require('express')
const router = express.Router()

router.get('/category',(req, res)=>{
    res.json({"hello" : "Hello category router endpoint"})
})

router.get('/category/:id',(req, res)=>{
    const id = req.params.id
    res.json({"hello" : `Hello category router ID ${id} endpoint`})
})

module.exports = router