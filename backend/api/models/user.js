const Joi = require('joi');
const mongoose = require('mongoose');

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
  }
}));

function validateUser(id) {
  const schema = {
    firstname: Joi.string().min(3).max(50),
    lastname: Joi.string().min(3).max(50),
    email: Joi.string().min(8).max(150),
    password: Joi.string().min(3).max(1050),
  }
  return Joi.validate(user, schema);
}
exports.User = User;
exports.validate = validateUser;