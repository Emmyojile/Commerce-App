import express from 'express';
const router = express.Router();
import {
  createCart,
  updateCart,
  deleteCart,
  getUserCart,
  getAllCarts,
} from '../controllers/cart.js';
import {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} from '../middlewares/auth.js';


router.route('/').post(verifyToken, createCart).delete(verifyTokenAndAuth, deleteCart)
router.route('/:userId').get(verifyTokenAndAuth, getUserCart)
router.route('/:id').put(verifyTokenAndAuth, updateCart)
router.route('/').get(verifyTokenAndAdmin, getAllCarts)

export default router