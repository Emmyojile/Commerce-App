import express from 'express';
import {
  allUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  userStats,
} from '../controllers/user.js';
const router = express.Router();
import {
  verifyToken,
  verifyTokenAndAuth,
  verifyTokenAndAdmin,
} from '../middlewares/auth.js';


router.route('/').get(verifyTokenAndAdmin, allUsers)
router.route('/stats').get(verifyTokenAndAdmin, userStats)
router.route('/:username').get(verifyTokenAndAdmin, getSingleUser);
router.route('/:id').put(verifyTokenAndAuth,updateUser).delete(deleteUser)


export default router