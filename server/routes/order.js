import express from 'express';
const router = express.Router();
import {
  updateOrder,
  createOrder,
  deleteOrder,
  getUserOrders,
  getAllOrders,
  getIncome,
} from '../controllers/order.js';
import {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} from '../middlewares/auth.js';



router.route('/').post(verifyToken,createOrder).get(verifyTokenAndAdmin,getAllOrders)
router.route('/:id').put(verifyTokenAndAdmin, updateOrder).delete(verifyTokenAndAdmin, deleteOrder)
router.route('/:userId').get(verifyTokenAndAuth,getUserOrders)
router.route('/income').get(verifyTokenAndAdmin, getIncome)

export default router