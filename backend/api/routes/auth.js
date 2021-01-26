import jwt from 'jsonwebtoken';
import{ User } from '../mdels/user';
import Joi from 'joi';
import bcrypt from 'bcrypt';
import _ from 'lodash';
import express from 'express';
const router = express.Router();

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  
  let user =  await User.findOne({ email: req.body.email })
  if (!user) return res.status(400).send('Invalid email or password')
  
  const validPAssword = await bcrypt.compare(req.body.password, user.password);
  if (!validPAssword) return res.status(400).send('Invalid email or password')

  // I have to make my private key in second argument
  const token = jwt.sign({_id: user._id }, 'jwtPrivateKey');
  return res.send(token);
})

function validate(req) {
  const schema = Joi.object({
    email: Joi.string().min(8).max(150).required().email(),
    password: Joi.string().min(3).max(1050).required(),
    statut: Joi.boolean().required()
  })
  return schema.validate(req);
}

module.exports = router;