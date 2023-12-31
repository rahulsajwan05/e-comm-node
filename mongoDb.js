const {MongoClient}= require('mongodb');
const url = "mongodb://127.0.0.1:27017" ;

//connect to MongoDB using url
const client = new MongoClient(url);     
const database ='E-Commerce-Replica'
async function dbConnection(){
    let result= await client.connect(url);
    //which database connect to
    let db=result.db(database);
    //which collection connect to
    return  db.collection('product');
}

module.exports = dbConnection;