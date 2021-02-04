import { UserModel } from '../models/user.js';
import bcrypt from 'bcrypt';
import _ from 'lodash';
const user = new UserModel()

async function register(req, res) {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  
  let user =  user.findUserByEmail(req.body.email)
  if (user) return res.status(400).send('user already registered')
  
  user =  await user.newUser(req.body);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt)

  await user.save();

  return res.send(user);
}
// async function 

const userController = {
  register,
}
export default userController
