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
router.get('/user', async (req, res) => {
  // execution du guard / auth !!! a chaque call sauf les register et login
  auth(req, res)
  userController.me(req, res)
})
router.put('/user_update/:id', async(req, res) => {
  auth(req, res)
  userController.userUpdate(req, res)
})
router.get('/users', async (req, res) => {
  auth(req, res)
  userController.users(req, res)
})

export default router;