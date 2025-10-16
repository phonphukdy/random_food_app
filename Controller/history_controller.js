const db = require("../DB/connect")

// Search
exports.Read = async (req, res) => {
    try {
        const id = req.params.id
        const sql = "SELECT * FROM menus WHERE id LIKE ? OR name LIKE ? OR category LIKE ? OR price LIKE ?"

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
        const sql = "SELECT * FROM menus"
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
        const {name, category, price} = req.body
        console.log(name, price, category)
        const sql = "INSERT INTO menus (name, category, price) VALUES (?, ?, ?)"
        
        const val = [name, category, price]

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
        const sql = "DELETE FROM menus WHERE id = ?"

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