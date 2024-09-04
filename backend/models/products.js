const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
    },
    desc: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;
