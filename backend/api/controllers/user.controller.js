import { UserModel } from '../models/user.js';
import bcrypt from 'bcrypt';
import _ from 'lodash';
import jwt from 'jsonwebtoken';
import payload_user from '../helper/sessionHelper.js';

const USER = new UserModel()

async function register(req, res) {
  try {
    const { error } = USER.validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    let user = await USER.findUserByEmail(req.body.email);
    
    if (user) return res.status(400).send('user already registered')
    
    user = await USER.newUser(req.body);

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt)

    console.log('**** NEW USER: ****\n',user)
    user.save();
    // console.log('key',process.env.JWT_SECRET_KEY)
    
    const token = generateAuthToken(user);
    console.log('********', user)
    console.log('token register controller', token )
    console.log('********')

    return res.send(token);
  }
  catch(err) {
    console.error('**register**',err)
  }
}

async function signIn(req, res) {
  const { error } = await USER.validateSignIn(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  
  let user =  await USER.findUserByEmail(req.body.email);
  if (!user) return res.status(400).send('Invalid email or password')
  
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid email or password')

  const token = generateAuthToken(user);
  console.log('success')
  return res.status(200).send(token);
}

async function me(req, res) {
  try {
    const payload = payload_user(req)
    console.log('payload', payload)
    let user = await USER.findUserById(payload.user_id)
    if (!user) return;

    console.log('user', user)
    return res.send(user)
  }
  catch(err) {
    console.error('**get-me**',err)
  }
}
// update de la session qui est en cours
async function userUpdate(req, res) {
  try {
    const payload = payload_user(req)
    let admin = await USER.findUserById(payload.user_id)
    if (!admin) res.status(400).send('Invalid update'); 

    const result = await USER.update({
      id: payload.user_id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
      isAdmin: req.body.isAdmin,
      city: req.body.city,
      job: req.body.job,

    });
    
    res.send(result);
  }
  catch (err) {
    console.error('**update_user**', err)
  }
}

async function users(req, res) {
  try {
    const payload = payload_user(req)
    let admin = await USER.getUsers({})
    console.log(admin, 'test admin')
    if (!admin) res.status(400).send('Invalid request'); 
    return res.send(admin)
  }
  catch(err) {
    console.error(err)
  }
}

// async function logout(req, res) {
//   try {
//     const payload = payload_user(req)
//     let admin = await USER.findUserById(payload.user_id)
//     if (!admin) res.status(400).send('impossible to logout');
//   }
//   catch(err) {
//     console.error(err)
//   }
// }
// async function get_children() {
  //  const payload = payload_user(req)
  //  let children = await CHILDREN.findChildrenByParentId(id)
// }

// async function removeChildren(id) {
// const result = await deleteOne({_id: id }) // or deleteMany({_id: id})
// findByIdAndRemove(id)
// }


function generateAuthToken(user) {
  const token = jwt.sign({user_id: user.id }, process.env.JWT_SECRET_KEY, { algorithm: 'HS256'});
  return token
}

const userController = {
  register,
  signIn,
  me,
  userUpdate,
  users,
  // logout
}
export default userController
