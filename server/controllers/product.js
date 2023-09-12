import Product from '../models/Product.js';
import { StatusCodes } from 'http-status-codes';

//CREATE PRODUCT
export const createProduct = async (req,res)=> {
    try {
        const newProduct = new Product(req.body);
        
        const savedProduct = await newProduct.save();
        return res.status(StatusCodes.OK).json(savedProduct)
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});   
    }
}

//GET PRODUCT
export const getSingleProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.status(StatusCodes.OK).json(product)
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});   
    }
}

//GET ALL PRODUCTS
export const getAllProducts = async (req, res) => {
    try {
        const qNew = req.query.new
        const qCategory = req.query.category

        let products;

        if(qNew){
            products = await Product.find({}).sort({createdAt: -1}).limit(5)
        } else if(qCategory){
            products = await Product.find({categories : {
                $in: [qCategory],
            }})
        } else {
            products = await Product.find({})
        }

        if (products.length === 0) {
            return res.status(StatusCodes.NOT_FOUND).json({ msg: 'No Products available yet' })
        }

        return res.status(StatusCodes.OK).json(products);
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});   
    }
}

//UPDATE PRODUCT
export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {$set:req.body,},{new:true});
        return res.status(StatusCodes.OK).json(updatedProduct)
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});   
    }
}

//DELETE PRODUCT
export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        return res.status(StatusCodes.OK).json({msg: 'Product deleted successfully'});
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: error.message});
    }
}