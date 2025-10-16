const express = require('express')
const router = express.Router()

const {ShowALlData, Read, Create, Delete} = require('../Controller/history_controller')

router.get('/histories',ShowALlData)
router.get('/histories/:id',Read)
router.post('/histories',Create)
router.delete('/histories/:id',Delete)

module.exports = router