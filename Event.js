// const os  =require("os");
// console.log(os.arch());
// console.log(os.freemem()/(1024*1024*1024));
// console.log(os.totalmem()/(1024*1024*1024));
  //name of system
// console.log(os.hostname());

//  console.log(os.platform());
//  console.log(os.userInfo());

const express = require("express");
const EventEmitter = require("events");

const app = express();
const event = new EventEmitter();

let count = 1;
event.on("countApi", () => {
    console.log("countApi working"+count++);
    
});
app.get("/", (req, res) => {
    res.send("working");
    event.emit("countApi");
});

app.get("/search", (req, res) => {
    res.send("search working");
    event.emit("countApi");
});
app.listen(5000);
