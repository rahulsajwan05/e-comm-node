const {MongoClient}= require('mongodb');
const url = "mongodb://127.0.0.1:27017" ;

//connect to MongoDB using url
const client = new MongoClient(url);     
const database ='E-Commerce-Replica'
async function getData(){
    let result= await client.connect(url);
    //which database connect to
    let db=result.db(database);
    //which collection connect to
    let collection= db.collection('product');
    //get the product from colection
    //find() return the product
    //toArray returns the product in proper format
    let response = await collection.find().toArray();
    console.log(response); 
}
 
getData();