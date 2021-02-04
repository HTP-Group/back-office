import userController from '../controllers/user.controller.js';
import express from 'express';
const router = express.Router();

router.post('/register', async (req, res) => {
  userController.register(req, res)
})

export default router;