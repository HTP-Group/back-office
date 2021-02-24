import mongoose from 'mongoose';
import user from './api/routes/user.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express()
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080/");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// app.options('http://localhost:8080/', cors())

// const corsOptions = {
//   origin: 'http://localhost:8080/',
//   optionsSuccessStatus: 200,
//   methods: "GET, PUT, POST, DELETE"
// }

mongoose.connect('mongodb://localhost/o-school', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
} )
  .then(() => console.log('connected to mongoDb'))
  .catch((err) => console.error('could not connect to mongoDb..', err)); 

app.use(express.json())
app.use('/api/user', user)
// app.use(cors(corsOptions));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`))

// module.exports.absolute = function(number) {
//   return (number >= 0) ? number : -number;
// }
// module.exports.great = function(name) {
//   return `Welcome ${name}`;
// }
// module.exports.getStudents = function() {
//   return ['Thib', 'Ramaz']
// }
// module.exports.getTeacher = function(teacherID) {
//   return { id: teacherID, age: 34 };
// }