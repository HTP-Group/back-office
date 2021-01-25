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
  },
  // parent = true vs teacher = false
  statut: {
    type: Boolean,
    required: true,
  }
}));

function validateUser(user) {
  const schema = Joi.object({
    firstname: Joi.string().min(3).max(50).required(),
    lastname: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(8).max(150).required().email(),
    password: Joi.string().min(3).max(1050).required(),
    statut: Joi.boolean().required(),
  })
  return schema.validate(user);
}
exports.User = User;
exports.validate = validateUser;