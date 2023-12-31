const dbConnection = require('./mongoDb');

const deleteF = async () =>{
     let data= await dbConnection();
     let result = await data.deleteOne(
        {name: 'dotted'}
        );
     console.log(result);
}

deleteF();