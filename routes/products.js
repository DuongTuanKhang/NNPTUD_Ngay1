var express = require("express");
var router = express.Router();
let productModel = require("../schemas/products");

// GET all products
router.get("/", async function (req, res, next) {
  let result = await productModel.find({});
  res.send(result);
});

// POST create a new product
router.post("/", async function (req, res, next) {
  try {
    let newProduct = new productModel(req.body);
    let result = await newProduct.save();
    res.status(201).send(result);
  } catch (err) {
    next(err);
  }
});

router.get("/id", function (req, res, next) {
  res.send("hahah");
});

module.exports = router;
