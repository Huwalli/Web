var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"alicehu20030307"
})

con.connect(function(err){
    if(err)throw err;
    console.log("connected!")
}
)