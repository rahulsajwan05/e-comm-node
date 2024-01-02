const express = require('express');
const multer = require('multer');
const products= require('./products');
const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination:(req,res,cb) =>{
            cb(null,"uploads")
        },
        filename:(req,file,cb)=>{
            cb(null,file.fieldname+-"-"+ Date.now()+".jpg");
        }
    })
}).single("user_file")

app.post('/upload', upload ,(req, res) =>{
    res.send("File upload")
});

app.listen(5000,()=>{
    console.log("Server is running on port 3000")
})
