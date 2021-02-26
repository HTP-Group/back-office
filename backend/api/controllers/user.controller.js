import { UserModel } from '../models/user.js';
import bcrypt from 'bcrypt';
import _ from 'lodash';
import jwt from 'jsonwebtoken';

const USER = new UserModel()

async function register(req, res) {
  const { error } = USER.validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
 
  let user = await USER.findUserByEmail(req.body.email)
  console.log(user)
  
  if (user) return res.status(400).send('user already registered')
  
  user = await USER.newUser(req.body);
  console.log(user)
  const salt = await bcrypt.genSalt(10);
  console.log(salt)
  user.password = await bcrypt.hash(user.password, salt)
  console.log(user)
  user.save();
  console.log(process.env.JWT_SECRET_KEY)
  
  const token = generateAuthToken(user)

  return res.send(token);
}

async function signIn(req, res) {
  const { error } = await USER.validateSignIn(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  
  let user =  await USER.findUserByEmail(req.body.email)
  if (!user) return res.status(400).send('Invalid email or password')
  
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid email or password')

  return res.send(token);
}

function generateAuthToken(user){
  const token = jwt.sign({user_id: user.id }, process.env.JWT_SECRET_KEY, { algorithm: 'HS256'});
  return token
} 

const userController = {
  register,
  signIn
}
export default userController
