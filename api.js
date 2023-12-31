const express = require('express');
const dbConnection = require('./mongoDb')
const mongoDb = require('mongodb');
const app = express();
//convert the data and avialble for post requests
// get the body from request
app.use(express.json());



app.get('/', async (req, res) => {
    let data = await dbConnection();
    data = await data.find().toArray();
    console.log(data);
    res.send(data);
});

app.post('/', async (req, res) => {
    console.log(req.body);
    let data = await dbConnection();
    data = await data.insertOne(req.body);
    res.send(data);
})

app.put('/:name', async (req, res) => {
    let data = await dbConnection();
    let result = await data.updateOne(
        {name:req.params.name},
        {$set: req.body}
    )
    res.send(result);
});

app.delete('/:id', async (req, res) => {
    let data = await dbConnection();
    let result = await data.deleteOne(
        {_id: new mongoDb.ObjectId(req.params.id)}
    )
    res.send(result);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});