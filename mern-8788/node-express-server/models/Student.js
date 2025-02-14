const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  studentName: String,
  studentRoll:Number,

});
const Student = mongoose.model("Student",StudentSchema);
module.exports =  Student ;