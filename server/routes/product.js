import express from 'express';
const router = express.Router();
import {
  createProduct,
  updateProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
} from '../controllers/product.js';
import {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} from '../middlewares/auth.js';



router.route('/').post(createProduct)
router.route('/').get(getAllProducts)
router.route('/singleProduct/:id').get(getSingleProduct).put(verifyTokenAndAdmin,updateProduct).delete(deleteProduct)


export default router