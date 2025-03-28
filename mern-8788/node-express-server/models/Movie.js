const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name: String,
  director: String,
  releaseYear: Number,
});

const Movie = mongoose.model("Movie", MovieSchema);
module.exports =  Movie ;
