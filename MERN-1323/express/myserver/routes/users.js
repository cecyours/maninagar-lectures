var express = require("express");
var router = express.Router();

const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    age: 10,
    grade: "10th",
    email: "aarav.sharma@example.com",
  },
  {
    id: 2,
    name: "Mia Johnson",
    age: 11,
    grade: "11th",
    email: "mia.johnson@example.com",
  },
  {
    id: 3,
    name: "Liam Williams",
    age: 12,
    grade: "12th",
    email: "liam.williams@example.com",
  },
  {
    id: 4,
    name: "Sophia Brown",
    age: 10,
    grade: "10th",
    email: "sophia.brown@example.com",
  },
  {
    id: 5,
    name: "Noah Jones",
    age: 11,
    grade: "11th",
    email: "noah.jones@example.com",
  },
  {
    id: 6,
    name: "Isabella Garcia",
    age: 12,
    grade: "12th",
    email: "isabella.garcia@example.com",
  },
  {
    id: 7,
    name: "Elijah Miller",
    age: 10,
    grade: "10th",
    email: "elijah.miller@example.com",
  },
  {
    id: 8,
    name: "Neha Joshi",
    age: 14,
    grade: "8th",
    email: "neha.joshi@example.com",
  },
  {
    id: 9,
    name: "Vikram Rao",
    age: 18,
    grade: "12th",
    email: "vikram.rao@example.com",
  },
  {
    id: 10,
    name: "Tanya Kapoor",
    age: 13,
    grade: "10th",
    email: "tanya.kapoor@example.com",
  },
];


/* GET users listing. */
router.get("/", (req, res, next) => {
  res.json(students);
});

router.post('/', (req, res) => {
  const newStudent = req.body;
  res.status(201).json({ message: "Student created", data: newStudent });
});

module.exports = router;
