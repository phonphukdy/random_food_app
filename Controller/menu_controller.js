const db = require("../DB/connect")

// Search
exports.Read = async (req, res) => {
    try {
        const id = req.params.id
        const sql = "SELECT m.menu_id, m.menu_name, c.category_name, m.menu_price FROM menus m JOIN categories c ON m.category_id = c.category_id WHERE m.menu_id LIKE ? OR m.menu_name LIKE ? OR c.category_name LIKE ? OR m.menu_price LIKE ?"


        const val = [
            `${id}`,
            `%${id}%`,
            `%${id}%`,
            `${id}`,
        ]
        db.query(sql, val, (err, result) => {
            if(err){
                console.log("Fail :",err)
                return res.status(400).send()
            }
                
            return res.status(200).send(result)
        })
    } 
    catch (err) 
    {
        console.log(`Server Error : ${err}`)
    }
}

exports.ShowALlData = async (req, res) => {
    try {
        const sql = "SELECT m.menu_id, m.menu_name, c.category_name, m.menu_price FROM menus m JOIN categories c ON m.category_id = c.category_id"

        db.query(sql, (err, result) => {
            if(err){
                console.log("Fail :",err)
                return res.status(400).send()
            }
            
            return res.status(200).send(result)
        })
    } 
    catch (err) 
    {
        console.log(`Server Error : ${err}`)
    }
}

// Insert
exports.Create = async (req, res) => {
    try 
    {
        console.log(req.body)
        const {menu_name, category_id, menu_price} = req.body
        console.log(menu_name, category_id, menu_price)
        const sql = "INSERT INTO menus (menu_name, category_id, menu_price) VALUES (?, ?, ?)"
        
        const val = [menu_name, category_id, menu_price]

        db.query(sql, val, (err, result) => {
            if(err){
                console.log("Fail :",err)
                return res.status(400).send()
            }

            return res.status(200).send(result)
        })
    } 
    catch (err) 
    {
        console.log(`Server Error : ${err}`)
    }
}

// delete
exports.Delete = async (req, res) => {
    try {
        const id = req.params.id
        const sql = "DELETE FROM menus WHERE menu_id = ?"

        db.query(sql, id, (err, result) => {
            if(err){
                console.log("Fail :",err)
                return res.status(400).send()
            }

            return res.status(200).send(result)
        })
    } 
    catch (err) 
    {
        console.log(`Server Error : ${err}`)
    }
}