var express = require('express');
const { default: Todo } = require('../models/todo');
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
    try {
        const todos = await Todo.find()
        res.status(200).json({ message: "data fatched successfully", data: todos })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error in fetch data", err: error })
    }
});

// post
router.post('/', async function (req, res, next) {
    try {
        const body = req.body
        console.log(body);

        const todo = await Todo.create(body)
        res.status(200).json({ message: "data created successfully", data: todo })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error in create todo", err: error })
    }
});
router.delete('/:id', async function (req, res, next) {
    try {
        const { id } = req.params
        console.log(id);
        const todo = await Todo.findByIdAndDelete(id)
        res.status(200).json({ message: "data deleted successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error in delete todo", err: error })
    }
});




module.exports = router;
