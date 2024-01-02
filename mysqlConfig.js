const mysql = require('mysql');

const con =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})


con.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + con.threadId);
});

module.exports = con;
