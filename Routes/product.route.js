const express = require("express");
const prouter = express.Router();
const Product = require("../Models/Product.model");

//Post A Product Data
prouter.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const result = await product.save();
    res.send(result);
  } catch (error) {
    console.log("error");
  }
});

//Get All product Data
//Two Optional Parameters 1.Query 2.Projection
prouter.get("/", async (req, res) => {
  try {
    const results = await Product.find({}, {});
    res.send(results);
  } catch (error) {
    console.log("Error");
  }
});

//Get single product Data
prouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const prodcut = await Product.findById(id);
    res.send(prodcut);
  } catch (error) {
    console.log("Error");
  }
});

// Delete a Product
prouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const prodcut = await Product.findByIdAndDelete(id);
    res.send(prodcut);
    console.log("Product Deleted");
  } catch (error) {
    console.log(error);
  }
});

prouter.patch("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const updates = req.body;
    const options = { new: true };
    const result = await Product.findByIdAndUpdate(id, updates, options);
    res.send(result);
    console.log("Product Updated");
  } catch (error) {
    console.log(error);
  }
});

module.exports = prouter;