const mongoose = require("mongoose");

const bookissueSchema = new mongoose.Schema({
    name:String,
    author:String,
    category:String,
    pageno:Number,
    rollno:Number,
    fromdate:String,
    todate:String,
    thumbnail:String
});

module.exports = mongoose.model("BookIssue",bookissueSchema);