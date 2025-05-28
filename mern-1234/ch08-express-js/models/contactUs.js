const mongoose = require("mongoose");

const contactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/ // basic email validation
    },
    phoneNumber: {
        type: String,
        required: true,
        match: /^[0-9]{10,15}$/ // allows only numbers with length between 10 to 15
    },
    message: {
        type: String,
        required: true,
    }
}, { timestamps: true }); // includes createdAt and updatedAt fields

// Exporting the model
module.exports = mongoose.model("ContactUs", contactUsSchema);
