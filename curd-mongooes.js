const mongoose = require("mongoose");

// const dbUrl = 'mongodb://localhost:27017/E-Commerce-Replica';
const dbUrl = "mongodb://127.0.0.1:27017/E-Commerce-Replica";

mongoose.connect(dbUrl);
console.log("Connected to MongoDB");

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    category: String,
    brand: String,
  },
  {
    collection: "product",
  }
);

// const productModel = mongoose.model('product', productSchema);
const saveInDb = async () => {
  const productModel = mongoose.model("product", productSchema);
  let data = new productModel({
    name: "blue soild",
    price: "660",
    brand: "zss",
    category: "clothsss",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDb = async () => {
    const productModel = mongoose.model("product", productSchema);
    let data = await productModel.updateOne({
        name: "blue soild"},
         {  $set: {price:1000}   }
      );
    // let result = await data.save();
    console.log(data);
};


const deleteInDb = async () => {
    const productModel = mongoose.model("product", productSchema);
    let data = await productModel.deleteOne({
        name: "blue soild"}
      );
    // let result = await data.save();
    console.log(data);
};

const findInDb = async () => {
    const productModel = mongoose.model("product", productSchema);
    let data = await productModel.find({name: "Check"});
    // let data = await productModel.find();
    console.log(data);
};

findInDb();
