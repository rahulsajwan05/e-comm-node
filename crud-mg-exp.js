const express = require('express');
require('./config');
const products= require('./products');

const app = express();

//parse the data from the string
app.use(express.json());

app.post('/create', async (req, res, next) => {

    //store into database
    let data = new products(req.body);
    let result = await data.save();
    console.log(req.body);
    res.send(result);
});

app.get('/', async (req,res, next) => {
    let data = await products.find();
    res.send(data);
});

app.put('/update/:_id', async (req, res, next) => {
    console.log(req.params);
    let data = await products.updateOne(
        req.params,
        {$set: req.body}
        );

    res.send(data);
});

app.delete('/delete/:_id', async (req, res, next) => {
    let data = await products.deleteOne(req.params);
    res.send(data);

});

app.listen('5000',(req, res, next) => {
    // res.send("Listen");
    console.log("connected");
});