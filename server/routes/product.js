const express = require('express');
const router = express.Router();
const {createProduct, updateProduct, getAllProducts, getSingleProduct, deleteProduct} = require('../controllers/product')
const {verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin} = require('../middlewares/auth')


router.route('/').post(createProduct)
router.route('/').get(getAllProducts)
router.route('/singleProduct/:id').get(getSingleProduct).put(verifyTokenAndAdmin,updateProduct).delete(deleteProduct)


module.exports = router