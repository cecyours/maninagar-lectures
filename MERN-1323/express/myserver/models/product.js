const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            default: ""
        },
        category: {
            type: String,
            required: true
        },
        stock: {
            type: Number,
            default: 1
        },
        image: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;