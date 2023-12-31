const dbConnect = require('./mongoDb');

// dbConnection().then((res)=>{
    
//     res.find({}).toArray().then((product)=>{
//         console.log(product);
//     }); 
// });

const main = async () =>{
    let data = await dbConnect();
     //get the product from colection
    //find() return the product
    //toArray returns the product in proper format
    data= await data.find({}).toArray();
    console.log(data);
}

main();