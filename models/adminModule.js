const mongoose = require('mongoose');

const adminschema = new mongoose.Schema({
  firstname:String,
  secondname:String,
  email:String,
  dateofbirth:String,
  gender:String,
  department:String,
  employid:String,
  password:String
});

module.exports = mongoose.model("AdminSchema",adminschema);