import Joi from 'joi';
import mongoose from 'mongoose';
import _ from 'lodash';

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
  // isAdmin = false === collab; 
  isAdmin: {
    type: Boolean,
    required: true,
  },
  city: {
    type: String,
  },
  job: {
    type: String
  },
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
      confirmPassword: Joi.string().min(3).max(1050).required(),
      isAdmin: Joi.boolean().required(),
      city: Joi.string().max(25).required(),
      job: Joi.string().min(3).required()
    })
    return schema.validate(user);
  }
  async newUser(body) {
    const user = await new User(_.pick(body, ['firstname', 'lastname', 'email', 'password', 'isAdmin']));
    return user;
  }
  async findUserByEmail(email) {
    const user = await User.findOne({ email: email })
    return user;
  }
  async findUserById(id) {
    const user = await User.findOne({_id: id})
    return user;
  }
  validateSignIn(req) {
    const schema = Joi.object({
      email: Joi.string().min(8).max(150).required().email(),
      password: Joi.string().min(3).max(1050).required(),
    })
    
    return schema.validate(req);
  }
  async update(user) {
    const updateDoc = {
      $set: { ...user }
    };
    const result = await User.updateOne({_id: user.id }, updateDoc, { upsert: false })
    return result;
  }
  async addColab() {
    const createCollab = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword:'',
      isAdmin: '',
      city: '',
      job: '',
    }
    await User.push(createCollab)
  }
  async getUsers() {
    const users = await User.find({})
    return users;
  }
}
