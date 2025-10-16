const mysql = require("mysql");

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database:"rd_food",
});

db.connect((err) => {
    if(err){
        console.log(err)
        return
    }
    console.log("connected database")
})

module.exports = db