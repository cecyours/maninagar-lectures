var express = require('express');
var router = express.Router();

<<<<<<< HEAD

const students = [
  {
    "id": 1,
    "name": "Aarav Sharma",
    "age": 16,
    "grade": "10th",
    "email": "aarav.sharma@example.com"
  },
  {
    "id": 2,
    "name": "Isha Patel",
    "age": 15,
    "grade": "9th",
    "email": "isha.patel@example.com"
  },
  {
    "id": 3,
    "name": "Rohan Mehta",
    "age": 17,
    "grade": "11th",
    "email": "rohan.mehta@example.com"
  },
  {
    "id": 4,
    "name": "Sneha Verma",
    "age": 14,
    "grade": "8th",
    "email": "sneha.verma@example.com"
  },
  {
    "id": 5,
    "name": "Karan Singh",
    "age": 16,
    "grade": "10th",
    "email": "karan.singh@example.com"
  },
  {
    "id": 6,
    "name": "Priya Nair",
    "age": 15,
    "grade": "9th",
    "email": "priya.nair@example.com"
  },
  {
    "id": 7,
    "name": "Aditya Gupta",
    "age": 17,
    "grade": "11th",
    "email": "aditya.gupta@example.com"
  },
  {
    "id": 8,
    "name": "Neha Joshi",
    "age": 14,
    "grade": "8th",
    "email": "neha.joshi@example.com"
  },
  {
    "id": 9,
    "name": "Vikram Rao",
    "age": 18,
    "grade": "12th",
    "email": "vikram.rao@example.com"
  },
  {
    "id": 10,
    "name": "Tanya Kapoor",
    "age": 16,
    "grade": "10th",
    "email": "tanya.kapoor@example.com"
  }
]


/* GET users listing. */
// static routes
router.get('/', function (req, res, next) {
  res.json(students)
});


router.get('/:id', function (req, res, next) {
  const { id } = req.params;
  const filterdStudent = students.filter(stu => stu.id === Number(id))
  res.json(filterdStudent)
});

// dynamic routes with params
router.get('/:emailId', function (req, res, next) {
  const { emailId } = req.params;
  const filterdStudent = students.filter(stu => stu.email === emailId)
  res.json(filterdStudent)
});


// delete 
router.delete('/:id', function (req, res, next) {
  const { id } = req.params;
  const filterdStudent = students.filter(stu => stu.id !== Number(id))
  res.json(filterdStudent)
});



// static routes
router.get('/sania', function (req, res, next) {
  res.send('respond with a sania');
});





module.exports = router;





// in react 
// const { id }  = useParams();




// API methods
// GET  -> Get date
// Post -> create 
// PUT -> update
// uPpdate -> update
// delete -> Delete 
=======
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
>>>>>>> b330280aaa865a04139e67a3c6476726038afd52
