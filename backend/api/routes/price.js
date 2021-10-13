import priceController from '../controllers/price.controller.js';
import express from 'express';
import auth from '../middleware/user.js';
const router = express.Router();

router.post('/addPrice', async (req, res) => {
  auth(req, res)
  priceController.addPrice(req, res)
})

router.get('/prices', async (req, res) => {
  auth(req, res)
  priceController.prices(req, res)
})

export default router;