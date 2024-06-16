const express = require("express");
require("./db/config");
const productRoutes = require("./routes/products/productsRoutes");

const allRoutes = express.Router();

allRoutes.use("/product" , productRoutes);

module.exports = allRoutes;