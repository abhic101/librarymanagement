const mongoose = require('mongoose');

const bookrequestschema = new mongoose.Schema({
  name:String,
  author:String,
  category:String,
  publication:String
});

module.exports = mongoose.model("BookRequestSchema",bookrequestschema);