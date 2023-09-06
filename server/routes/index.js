const express = require('express');
const router = express.Router();

const cartRoutes = require("./cart")
const orderRoutes = require("./order")
const productRoutes = require("./product")
const userRoutes = require("./user")
const authRoutes = require("./auth")

router.use("/cart", cartRoutes);
router.use("/orders", orderRoutes);
router.use("/products", productRoutes);
router.use("/users", userRoutes);
router.use("/", authRoutes);


module.exports = router;