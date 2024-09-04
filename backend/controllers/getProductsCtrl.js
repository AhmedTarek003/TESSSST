const asyncHandler = require("express-async-handler");
const Products = require("../models/products");

exports.addProductCtrl = asyncHandler(async (req, res) => {
  const newProduct = await Products.create(req.body);
  res.status(201).json(newProduct);
});

exports.getAllProductsCtrl = asyncHandler(async (req, res) => {
  const products = await Products.find();
  res.status(200).json(products);
});
