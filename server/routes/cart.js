const express = require('express');
const router = express.Router();
const {createCart, updateCart, deleteCart, getUserCart, getAllCarts} = require('../controllers/cart')
const {verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin} = require('../middlewares/auth')

router.route('/').post(verifyToken, createCart).delete(verifyTokenAndAuth, deleteCart)
router.route('/:userId').get(verifyTokenAndAuth, getUserCart)
router.route('/:id').put(verifyTokenAndAuth, updateCart)
router.route('/').get(verifyTokenAndAdmin, getAllCarts)

module.exports = router