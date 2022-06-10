const mongoose = require('mongoose');

const studentschema = new mongoose.Schema({
  firstname:String,
  secondname:String,
  email:String,
  dateofbirth:String,
  gender:String,
  department:String,
  year:String,
  rollno:String,
  password:String
});

module.exports = mongoose.model("StudentSchema",studentschema);