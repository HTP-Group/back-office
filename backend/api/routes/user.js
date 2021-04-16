import userController from '../controllers/user.controller.js';
import express from 'express';
import auth from '../middleware/user.js'
const router = express.Router();

router.post('/register', async (req, res) => {
  userController.register(req, res)
})
router.post('/signIn', async (req, res) => {
  userController.signIn(req, res)
})
router.get('/profile', async () => {
  // execution du guard / auth !!! ac haque call sauf les register et login
  auth()
  userController.me(req, res)
})
export default router;