var express = require("express");
const Book = require("../models/Book");
const Student = require("../models/Student");
var router = express.Router();

router.get("/p", function (req, res, next) {
  res.send("i am fine");
});

router.get('/get-data',async function(req,res){
    try{

        const books = await Book.find();
        const students = await Student.find();
        res.status(200).json({success:true,books,students})
    }
    catch(error)
    {
        res.status(500).json({success:false,message:error.message})
    }
});

router.get("/insert-record", async function (req, res) {
  try {
    const b = await Book.create({
      bookName: "Game of Thrones",
      bookPrice: 30.23,
      bookEdition: 2,
      bookAuthor: "Master",
    });
    await b.save();
    res.status(200).json({ success: true, book: b });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});
router.get("/student-insert-record", async function (req, res) {
  try {
    const b = await Student.create({
      studentName: "Anil",
      studentRoll: 30,
    });
    await b.save();
    res.status(200).json({ success: true, student: b });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});
module.exports = router;
