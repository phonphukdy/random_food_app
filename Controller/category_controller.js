const db = require("../DB/connect")

// Search
exports.Read = async (req, res) => {
    try {
        const id = req.params.id
        const sql = "SELECT * FROM categories WHERE category_id LIKE ? OR category_name LIKE ?"


        const val = [
            `${id}`,
            `%${id}%`,
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

exports.Update = async (req, res) => {
    try {
        const id = req.params.id
        const { category_name } = req.body
        console.log(`id: ${id}, name: ${category_name}`)
        const sql = "UPDATE categories SET category_name = ? WHERE category_id = ?"

        const val = [
            `${category_name}`,
            `${id}`
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
        const sql = "SELECT * FROM categories"

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
        const {category_name} = req.body
        const sql = "INSERT INTO categories (category_name) VALUES (?)"
        
        const val = [category_name]

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
        const sql = "DELETE FROM categories WHERE category_id = ?"

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