const express = require('express')
const router = express.Router()

const {ShowALlData, Read, Create, Delete, Update} = require('../Controller/category_controller')

router.get('/categories',ShowALlData)
router.get('/categories/:id',Read)
router.post('/categories',Create)
router.put('/categories/:id',Update)
router.delete('/categories/:id',Delete)

module.exports = router