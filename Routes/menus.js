const express = require('express')
const router = express.Router()

const {ShowALlData, Read, Create, Delete} = require('../Controller/menu_controller')

router.get('/categories',ShowALlData)
router.get('/menus/:id',Read)
router.post('/categories',Create)
router.delete('/menus/:id',Delete)

module.exports = router