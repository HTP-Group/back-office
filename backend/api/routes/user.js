import { register } from '../controllers/user';
import express from 'express';
import router from express.Router();

router.post('/register', async (req, res) => {
  register(req, res)
})

module.exports = router;