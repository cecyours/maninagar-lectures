var express = require('express');
var router = express.Router();

const students = [
  { id: 1, name: "Aarav Sharma", age: 17, grade: "11th", email: "aarav.sharma@example.com" },
  { id: 2, name: "Isha Verma", age: 16, grade: "10th", email: "isha.verma@example.com" },
  { id: 3, name: "Rohan Patel", age: 18, grade: "12th", email: "rohan.patel@example.com" },
  { id: 4, name: "Sneha Gupta", age: 15, grade: "9th", email: "sneha.gupta@example.com" },
  { id: 5, name: "Karan Mehta", age: 17, grade: "11th", email: "karan.mehta@example.com" },
  { id: 6, name: "Ananya Singh", age: 16, grade: "10th", email: "ananya.singh@example.com" },
  { id: 7, name: "Vikram Reddy", age: 18, grade: "12th", email: "vikram.reddy@example.com" },
  { id: 8, name: "Diya Nair", age: 15, grade: "9th", email: "diya.nair@example.com" },
  { id: 9, name: "Yash Kapoor", age: 17, grade: "11th", email: "yash.kapoor@example.com" },
  { id: 10, name: "Meera Joshi", age: 16, grade: "10th", email: "meera.joshi@example.com" },
];

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.status(200).json(students)
});

/* GET users listing. */
router.get('/:id'
  , function (req, res, next) {
  const { id } = req.params
  const filterdData = students.filter((students) => students.id == id)
  console.log(filterdData);
  res.status(200).json(filterdData)
})

/* GET users listing. */
const path = require('path');

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../views/mine.html'));
});

module.exports = router;
