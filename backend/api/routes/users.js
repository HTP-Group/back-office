const { Users, validate } = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);
  
  let user =  await User.findOne({ email: req.body.email })
  if (user) return res.status(400).send('user already registered')
  
  user =  await new User({
    firstname: req.body.firstname, 
    lastname: req.body.lastname, 
    email: req.body.email, 
    password: req.body.password
  })

  await user.save();

  return res.send(users);
})

module.exports = router;