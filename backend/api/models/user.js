import Joi from 'joi';
import mongoose from 'mongoose';
import _ from 'lodash';
// import config from 'config';
// import jwt from 'jsonwebtoken'

// const userSchema = new mongoose.Schema({
//   firstname: {
//     type: String,
//     required: true,
//     minlength: 3, 
//     maxlength: 50,
//   }, 
//   lastname: {
//     type: String,
//     required: true,
//     minlength: 3, 
//     maxlength: 50,
//   } , 
//   email: {
//     type: String,
//     required: true,
//     minlength: 8, 
//     maxlength: 150,
//     unique: true
//   } ,
//   password: {
//     type: String,
//     required: true,
//     minlength: 3, 
//     maxlength: 1050,
//   },
//   // parent = true vs teacher = false
//   isParent: {
//     type: Boolean,
//     required: true,
//   }
// })
// const User = mongoose.model('User', userSchema)
// userSchema.methods.generateAuthToken = function() {
  // const token = jwt.sign({_id: this._id})
  // return token;
// }
const User = mongoose.model('User', new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 3, 
    maxlength: 50,
  }, 
  lastname: {
    type: String,
    required: true,
    minlength: 3, 
    maxlength: 50,
  } , 
  email: {
    type: String,
    required: true,
    minlength: 8, 
    maxlength: 150,
    unique: true
  } ,
  password: {
    type: String,
    required: true,
    minlength: 3, 
    maxlength: 1050,
  },
  // parent = true vs teacher = false
  isParent: {
    type: Boolean,
    required: true,
  }
}));

export class UserModel {
  constructor() {
  }
  validateUser(user) {
    const schema = Joi.object({
      firstname: Joi.string().min(3).max(50).required(),
      lastname: Joi.string().min(3).max(50).required(),
      email: Joi.string().min(8).max(150).required().email(),
      password: Joi.string().min(3).max(1050).required(),
      isParent: Joi.boolean().required(),
    })
    return schema.validate(user);
  }
  async newUser(body) {
    const user = await new User(_.pick(body, ['firstname', 'lastname', 'email', 'password', 'isParent']));
    return user
  }
  async findUserByEmail(email) {
    const user = await User.findOne({ email: email })
    return user
  }
  validateSignIn(req) {
    const schema = Joi.object({
      email: Joi.string().min(8).max(150).required().email(),
      password: Joi.string().min(3).max(1050).required(),
      isParent: Joi.boolean().required()
    })
    
    return schema.validate(req);
  }
}
