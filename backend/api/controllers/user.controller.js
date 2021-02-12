import { UserModel } from '../models/user.js';
import config from 'config';
import bcrypt from 'bcrypt';
import _ from 'lodash';
const user = new UserModel()

async function register(req, res) {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  
  let user =  user.findUserByEmail(req.body.email)
  if (user) return res.status(400).send('user already registered')
  
  user =  await user.newUser(req.body);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt)

  await user.save();

  return res.send(user);
}

async function signIn() {
  const { error } = validateSignIn(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  
  let user =  user.findUserByEmail(req.body.email)
  if (!user) return res.status(400).send('Invalid email or password')
  
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid email or password')

  // I have to make my private key in second argument
  const token = jwt.sign({_id: user._id }, config.get('jwtPrivateKey'));
  return res.send(token);
}

const userController = {
  register,
  signIn
}
export default userController
