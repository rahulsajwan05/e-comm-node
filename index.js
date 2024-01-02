const con = require('./mysqlConfig');
const express = require('express');

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    con.query("SELECT * FROM user", (err, rows) => {
        if (err) {
            res.send(err)
        }
        res.send(rows)
    });
})
app.post('/', (req, res) => {
    const data= req.body;
    con.query("INSERT INTO user SET ?", data ,(err, rows,fields) => {
        if (err) throw err;
        res.send(rows)
    });
})

app.put('/:id', (req, res) => {
    const data= [req.body.name,req.body.password,req.body.user_type,req.params.id];
    con.query("UPDATE user SET name=?,password=?,user_type=? WHERE id =?", data, (err, rows,fields) => {
        if (err) throw err;
        res.send(rows)
    });
})

app.listen(5000);
// con.query("SELECT * FROM user" , (err, rows) => {
//     if (err) throw err;
//     console.log(rows);
// });