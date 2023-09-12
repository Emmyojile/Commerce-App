import express from 'express';
const router = express.Router();
import cartRoutes from './cart.js';
import orderRoutes from './order.js';
import productRoutes from './product.js';
import userRoutes from './user.js';
import authRoutes from './auth.js';


router.use("/cart", cartRoutes);
router.use("/orders", orderRoutes);
router.use("/products", productRoutes);
router.use("/users", userRoutes);
router.use("/", authRoutes);


export default router;