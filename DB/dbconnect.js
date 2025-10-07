const mongoose = require('mongoose')

const connectdb = async () => {
    try {
        const dbconnect = await mongoose.connect('mongodb://localhost:27017/db')
        // ຖ້າມີ username ກັບ password ແມ່ນໃສ່ແບບນີ້
        // const dbconnect = await mongoose.connectJ('mongodb://bounmy:12345:@localhost:27017') ອາດຈະຍັງບໍ່ຖືກຄັກໃຫ້ໄປເບີ່ງເອງ

        console.log('Create database complete...')
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectdb