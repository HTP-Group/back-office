import { User, validate } from '../models/user';
import bcrypt from 'bcrypt';
import _ from 'lodash';

function register(req, res) {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  
  let user =  await User.findOne({ email: req.body.email })
  if (user) return res.status(400).send('user already registered')
  
  user =  await new User(_.pick(req.body, ['firstname', 'lastname', 'email', 'password', 'isParent']));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt)

  await user.save();

  return res.send(user);
}

module.exports = {
  register
}