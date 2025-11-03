var express = require('express');
var router = express.Router();


const students = [
  {
    "id": 1,
    "name": "Aarav Sharma",
    "age": 10,
    "grade": "10th",
    "email": "aarav.sharma@example.com"
  },
  {
    "id": 2,
    "name": "Isha Patel",
    "age": 11,
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
    "age": 12,
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
    "age": 19,
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
    "age": 13,
    "grade": "10th",
    "email": "tanya.kapoor@example.com"
  }
]

/* GET users listing. */
// static routes

// get all students 
router.get('/', function (req, res, next) {
  res.json(students)
});


router.post('/', function (req, res) {
  try {
    const body = req.body
    students.push(body)
    res.json(students)
  } catch (error) {
    console.log(error);
  }
})


// get students by perticuler id 
// dynamic route
router.get('/:id', function (req, res, next) {
  const { id } = req.params;
  const filterdStudent = students.filter(stu => stu.id === Number(id))
  res.json(filterdStudent)
});

// dynamic routes with params
router.get('/email/:emailId', function (req, res, next) {
  const { emailId } = req.params;
  const filterdStudent = students.filter(stu => stu.email === emailId)
  res.json(filterdStudent)
});


// delete perticuler by id 
router.delete('/:id', function (req, res, next) {
  const { id } = req.params;
  const filterdStudent = students.filter(stu => stu.id !== Number(id))
  res.json(filterdStudent)
});

router.delete('/by-email/:emailId', function (req, res) {
  const { emailId } = req.params
  const filterdStudent = students.filter(stu => stu.email !== emailId)
  res.json(filterdStudent)
})



// Id  
router.put('/:id', function (req, res) {
  try {
    const { id } = req.params  // 
    const data = req.body

    // return index 
    const studentIndex = students.findIndex(stu => stu.id === Number(id))

    if (studentIndex === -1) {
      return res.status(400).json({ Message: "Student not found" })
    }

    students[studentIndex] = { ...students[studentIndex], ...data }

    res.status(200).json({ message: "user updated successfuly", data: students[studentIndex] })
  } catch (error) {
    console.log(error);
  }
})


// age > 15 
// /greater-fifteen
// /lessthen-fifteen


// CRUD 


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
