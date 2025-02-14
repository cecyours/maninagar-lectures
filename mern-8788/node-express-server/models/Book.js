const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  bookName: String,
  bookPrice: Number,
  bookEdition: Number,
  bookAuthor: String,
});

const Book = mongoose.model("Book", BookSchema);
module.exports =  Book ;
