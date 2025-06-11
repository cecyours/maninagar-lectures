var express = require('express');
const contactUs = require('../models/contactUs');
var router = express.Router();


// create
router.post('/', async function (req, res, next) {
    try {
        const data = req.body
        console.log(data);
        const insertQuery = await contactUs.create(data)

        console.log(insertQuery);
        res.status(200).json({
            success: true,
            message: "Data inserted Successfully",
            data: insertQuery
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "failed to insert data"
        })
    }
});

// fetch all  recors
router.get('/', async function (req, res) {
    try {
        const contactUsData = await contactUs.find()

        res.status(200).json({
            success: true,
            message: "Contact Us fetched Successfully",
            data: contactUsData
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "failed to fetch data"
        })
    }
})


// getch record by  unique Id
router.get('/:id', async function (req, res) {
    try {
        const { id } = req.params
        const contactUsData = await contactUs.findById(id)
        res.status(200).json({
            success: true,
            message: "Contact Us fetched Successfully",
            data: contactUsData
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "failed to fetch data"
        })
    }
})



router.delete('/:id', async function (req, res) {
    try {
        const { id } = req.params
        console.log(id);

        const contactUsDataDeleted = await contactUs.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "Contact Us deleted Successfully",
            data: contactUsDataDeleted
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "failed to delete data"
        })
    }
})

router.put('/:id', async function (req, res) {
    try {

        const { id } = req.params;
        const data = req.body;


        const updatedData = await contactUs.findByIdAndUpdate(id, data, { new: true, runValidators: true })

        res.status(200).json({
            success: true,
            message: "Contact Us Updated Successfully",
            data: updatedData
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "failed to updated data"
        })

    }
})













// router.put('/:id', a sync function (req, res, next) {
//     try {
//         const id = req.params.id; // Get ID from URL
//         const updatedData = req.body; // Get update data from request body

//         console.log("Updating data for ID:", id);
//         console.log("New Data:", updatedData);

//         const updateQuery = await contactUs.findByIdAndUpdate(id, updatedData, {
//             new: true, // Return the updated document
//             runValidators: true // Ensure validation rules are enforced
//         });

//         if (!updateQuery) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Data not found for the given ID"
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: "Data updated successfully",
//             data: updateQuery
//         });
//     } catch (error) {
//         console.error("Update Error:", error);
//         res.status(500).json({
//             success: false,
//             message: "Failed to update data",
//             error: error.message
//         });
//     }
// });








module.exports = router;
