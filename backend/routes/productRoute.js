const {
  addProductCtrl,
  getAllProductsCtrl,
} = require("../controllers/getProductsCtrl");

const router = require("express").Router();

router.route("/").post(addProductCtrl).get(getAllProductsCtrl);

module.exports = router;
