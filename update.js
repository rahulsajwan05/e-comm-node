const dbConnection = require('./mongoDb');

const update = async () => {
    let data= await dbConnection();
    let result = await data.updateMany(
        
            {name: 'Dotted'},
            {$set: { name: 'Dotted' , price:600}}
        
    );
    console.log(result);
}
update();