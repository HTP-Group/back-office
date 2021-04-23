import userController from '../controllers/user.controller.js';
// import profileController from '../controllers/profile.controller.js';
import express from 'express';
import auth from '../middleware/user.js'
const router = express.Router();

router.post('/register', async (req, res) => {
  userController.register(req, res)
})
router.post('/signIn', async (req, res) => {
  userController.signIn(req, res)
})
router.get('/profile', async (req, res) => {
  // execution du guard / auth !!! a chaque call sauf les register et login
  auth(req, res)
  userController.me(req, res)
})
router.put('/update_parent/:id', async(req, res) => {
  auth(req, res)
  userController.update_parent(req, res)
})
// router.put('/update_teacher/:id', async(req, res) => {
//   auth(req, res)
//   userController.update_teacher(req, res)
// })
// router.put('/update_password_parent/:id', async(req, res) => {
//   auth(req, res)
//   userController.update_parent_password(req, res)
// })
// router.put('/update_teacher_password/:id', async(req, res) => {
//   auth(req, res)
//   userController.update_teacher_password(req, res)
// })
export default router;