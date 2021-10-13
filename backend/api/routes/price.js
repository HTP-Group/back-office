import priceController from '../controllers/price.controller.js';
import express from 'express';
import auth from '../middleware/user.js';
const router = express.Router();

router.post('/addPrice', async (req, res) => {
  auth(req, res)
  priceController.addPrice(req, res)
})

export default router;