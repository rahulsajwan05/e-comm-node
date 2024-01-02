const express = require('express');
require('./config');
const products= require('./products');

const app = express();

//parse the data from the string
app.use(express.json());

app.get('/search/:key', async (req, res, next) => {
    // res.send("Search") 
    console.log(req.params.key);
    let data = await products.find({
        //for multiple search/fields
        "$or":[
            {"name": {$regex: req.params.key}},
            {"category": {$regex: req.params.key}},
        ]
    })
    res.send(data);
})

app.listen(5000);