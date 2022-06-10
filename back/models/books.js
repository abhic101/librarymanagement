const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name:String,
    author:String,
    category:String,
    publication:String,
    pageno:String,
    price:String,
    avilablenumber:Number,
    thumbnail:String
});

module.exports = mongoose.model("TotalBooks",bookSchema);