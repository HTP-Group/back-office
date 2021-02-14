import userController from '../controllers/user.controller.js';
import express from 'express';
const router = express.Router();

// router.post('/register', auth, async (req, res) => {
//   userController.register(req, res)
// })

router.post('/register', async (req, res) => {
  userController.register(req, res)
})
router.post('/signIn', async (req, res) => {
  userController.signIn(req, res)
})

export default router;