var express = require("express");
const Movie = require("../models/Movie");
var router = express.Router();

router.get("/", async function (req, res) {
  try {
    console.log(req.query," coder")
    const movies = await Movie.find();

    res.status(200).json({success:true,data:movies})
  } catch (error) {}
});

router.post("/", async function (req, res) {
    try { 
        const {name,director,releaseYear} = req.body;
 
        const movie = await Movie.create({name,director,releaseYear});
        movie.save();
  
      res.status(200).json({success:true,movie})
    } catch (error) {}
  });
module.exports = router;
