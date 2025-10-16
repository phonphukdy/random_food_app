const db = require("../DB/connect")

// Search
exports.Read = async (req, res) => {
    try {
        const id = req.params.id
        const sql = "SELECT h.history_id, m.menu_id, m.menu_name, c.category_name, m.menu_price, h.eaten_at FROM histories h JOIN menus m ON h.menu_id = m.menu_id JOIN categories c ON m.category_id = c.category_id WHERE h.history_id LIKE ?"

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

exports.ShowALlData = async (req, res) => {
    try {
        const sql = "SELECT h.history_id, m.menu_id, m.menu_name, c.category_name, m.menu_price, h.eaten_at FROM histories h JOIN menus m ON h.menu_id = m.menu_id JOIN categories c ON m.category_id = c.category_id"
        
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
        const {menu_id} = req.body
        const sql = "INSERT INTO histories (menu_id) VALUES (?)"
        
        const val = [menu_id]

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
        const sql = "DELETE FROM histories WHERE history_id = ?"

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