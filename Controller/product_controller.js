// export ນຳອອກໄປທີລະຟັງຊັນອອກໄປ (export(s) ຕ້ອງມີໂຕ s)
exports.read = async(req, res) => {
    try {
       const id = req.params.id 
       res.send(`product controller by ID: ${id} endpoint`)
    } catch (err) {
        console.log(`Server Error : ${err}`)
    }
}

// show all data
exports.ListData = async (req, res) => {
    // ຄວາມຄິດໄອເດີຍຢູ່ທີ Try
    try {
        res.send('Show all Data controller endpoint')
    } catch (error) {
        console.log(`Server Error : ${err}`)
    }
}

// post
exports.create = async (req, res) => {
    try {
        res.send('Save Data complete ... !!!')
    } catch (err) {
        console.log(`Server Error : ${err}`)
    }
}

exports.updateData = async (req, res) => {
    try {
       const id = req.params.id 

       res.send(`Update By ID : ${id} Data complete ... !!`)
    } catch (err) {
        console.log(`Server Error : ${err}`)
    }
}

exports.deleteData = async (req, res) => {
    try {
       const id = req.params.id 

       res.send(`Delete By ID : ${id} Data complete ... !!`)
    } catch (err) {
        console.log(`Server Error : ${err}`)
    }
}
















