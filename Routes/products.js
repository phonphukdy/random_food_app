const express = require('express')
const router = express.Router()

// trick to add function you create, (press ctrl + space)
const {read, ListData, create, updateData, deleteData} = require('../Controller/product_controller')

// router ເຮັດໄດ້ຄືກັບ app
<<<<<<< HEAD
router.get('/product',(req, res)=>{
    res.send('Hello, product router endpoint')
})

router.get('/product/:id',(req, res)=>{
    const id = req.params.id   

    res.send(`Hello, products by ID ${id} router endpoint`)
})
=======
router.get('/product',ListData)
router.get('/product/:id',read)
router.post('/product',create)
// ຕ້ອງຮູ້ວ່າເຮົາຈະແກ້ໄຂໃນໄລການໃດ
router.put('/product/:id',updateData)
router.delete('/product/:id',deleteData)
>>>>>>> 14570d6a9eb844fdd629aec0ed06a4ac1e076fdd

module.exports = router
// localhost:5000/api/product