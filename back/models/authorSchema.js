const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  author:String
});

module.exports = mongoose.model("AuthorSchema",authorSchema);