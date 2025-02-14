var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Hello World.");
});
router.get("/a",function(req,res,next){res.send("helloooo")});

router.get("/props", function (req, res, next) {
  res.send("Hello World. im props");
});

router.get("/json", function (req, res, next) {
  res.json({ success: true, data: { name: "Kites" } });
});

module.exports = router;
