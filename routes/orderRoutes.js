import express from 'express';
import authSeller from '../middleware/authSeller.js';
import authUser from '../middleware/authUser.js';

import {
  getAllOrders,
  getUserOrders,
  placeOrderCOD,
} from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.post('/cod', authUser, placeOrderCOD);

orderRouter.get('/user', getUserOrders);
orderRouter.get('/seller', getAllOrders);

export default orderRouter;
