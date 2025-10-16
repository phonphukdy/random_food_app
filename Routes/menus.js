const express = require('express')
const router = express.Router()

const {ShowALlData, Read, Create, Delete} = require('../Controller/menu_controller')

router.get('/menus',ShowALlData)
router.get('/menus/:id',Read)
router.post('/menus',Create)
router.delete('/menus/:id',Delete)

module.exports = router