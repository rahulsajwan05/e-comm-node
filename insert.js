const dbConnection = require('./mongoDb');

const inserts = async () => {
    const db=await dbConnection();
    const result= await db.insertMany([
        {name: "Blue T-shirt",brand:'Roadster',
        price: 1600,category: 'Cloth'},
        {
            name: "Check",brand:'test',
            price: 1522,category: 'Cloth'
        },
        {
            name: "dotted",brand:'test',
            price: 1522,category: 'Cloth'
        },
        {
            name: "dotted",brand:'test',
            price: 1522,category: 'Cloth'
        }
    ]) 
    console.log(result);
}

inserts();