import Order from '../models/Order.js';
import { StatusCodes } from 'http-status-codes';


//CREATE ORDER
export const createOrder = async (req, res,) => {
    try {
        const newOrder = new Order(req.body)

        const savedOrder = await newOrder.save();
        return res.status(StatusCodes.OK).json({savedOrder})
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: error.message});
    }
}

//UPDATE ORDER
export const updateOrder = async (req, res,) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true});
        return res.status(StatusCodes.OK).json({updatedOrder})
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: error.message});
    }
}

//DELETE ORDER
export const deleteOrder = async (req,response) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        return response.status(StatusCodes.OK).json({msg: 'Order deleted successfully'})        
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: error.message});        
    }
}

//GET USER ORDERS
export const getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({userId: req.params.userId})
        return res.status(StatusCodes.OK).json({orders})
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: error.message});        
    }
}

//GET ALL ORDERS
export const getAllOrders = async (req,res) => {
    try {
        const orders = await Order.find({})
        return res.status(StatusCodes.OK).json({orders})
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: error.message});        
    }
}

//GET MONTHLY INCOME
// exports.getIncome = async (req,res) => {
//     try {
//         const date = new Date();
//         const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
//         const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

//         const income = await Order.aggregate([
//             { $match: { createdAt: { $gte: previousMonth}}},
//             {
//                 $project: {
//                     month: { $month: "$createdAt"},
//                     sales: "$amount"
//                 },
//             },
//             {
//                 $group: {
//                     _id: "$month",
//                     total: { $sum: "$sales"}
//                 },
//             },
//         ]);
//         return res.status(StatusCodes.OK).json({income})
//     } catch (error) {
//         console.log(error);
//         return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: error.message});        
//     }
// }


export const getIncome = async (req,res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg: error.message});    
    }
}