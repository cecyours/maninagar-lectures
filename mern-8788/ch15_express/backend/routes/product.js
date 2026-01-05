var express = require('express');
const { default: Product } = require('../models/product');
const upload = require('../middleware/upload');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.find()
      .populate('category', 'title');

    res.status(200).json({
      success: true,
      products   
    });
  } catch (error) {
    next(error);
  }
});

// router.post('/', async function (req, res, next) {
//     try {
//         const data = req.body
//         const createdProduct = await Product.create(data)

//         res.status(201).json({ message: "Product Created Successfully", createdProduct })

//     } catch (error) {
//         res.status(500).json({ message: "Product Creation faied", error })
//         console.log(error);

//     }
// });


router.post('/', upload.array('images', 5), async (req, res, next) => {
  try {
    const { title, description, category, price } = req.body;

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one image is required"
      });
    }

    // Create relative paths for the database
    const images = req.files.map(file => ({
      url: `/uploads/${file.filename}`,
      public_id: file.filename
    }));

    const product = new Product({
      title,
      description,
      category,
      price,
      images
    });

    await product.save();

    res.status(201).json({
      success: true,
      data: product
    });
  } catch (error) {
    console.error('Error creating product:', error);
    next(error);
  }
});


router.get('/:id', async function (req, res, next) {
    try {
        const { id } = req.params
        const products = await Product.findById(id)
        res.status(200).json({ message: "Product fetched Successfully", data: products })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Product fetching faied", error })
    }
});

router.put('/:id', async function (req, res, next) {
    try {
        const body = req.body
        const { id } = req.params
        const products = await Product.findByIdAndUpdate(id, body, { new: true })
        res.status(200).json({ message: "Product fetched Successfully", data: products })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Product fetching faied", error })
    }
});


router.delete('/:id', async function (req, res, next) {
    try {
        const { id } = req.params
        const products = await Product.findByIdAndDelete(id)
        res.status(200).json({ message: "Product deleted Successfully", data: products })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Product fetching faied", error })
    }
});

module.exports = router;