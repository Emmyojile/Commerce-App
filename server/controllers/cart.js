import Cart from '../models/Cart.js';
import { StatusCodes } from 'http-status-codes';


//CREATE CART
export const createCart = async (req, res) => {
    try {
        const newCart = await Cart(req.body)

        const savedCart = await newCart.save();
        return res.status(StatusCodes.OK).json({savedCart})
    } catch (error) {
      console.log(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message})
    }
}

//UPDATE CART
export const updateCart = async (req, res) =>{
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true});
        return res.status(StatusCodes.OK).json({updatedCart})
    } catch (error) {
      console.log(error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message})
    }
}

//DELETE CART
export const deleteCart = async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        return res.status(StatusCodes.OK).json({msg: 'Cart deleted successfully'}); 
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message})
    }
}

//GET USER CART
export const getUserCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({userId: req.params.userId})
        return res.status(StatusCodes.OK).json({cart})
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message})
    }
}

//GET ALL CARTS
export const getAllCarts = async (req, res) => {
    try {
        const carts = await Cart.find()
        return res.status(StatusCodes.OK).json({carts})
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message})
    }
}