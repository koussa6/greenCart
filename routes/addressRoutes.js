import express from 'express';
import authSeller from '../middleware/authSeller.js';
import { addAddress, getAddress } from '../controllers/addressController.js';

const addressRouter = express.Router();

addressRouter.post('/add', authSeller, addAddress);
addressRouter.get('/getAddress', authSeller, getAddress);

export default addressRouter;
