import config from 'config';
import mongoose from 'mongoose';
import user from './api/routes/user.js';
import express from 'express';
const app = express();

if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: JwtPrivateKey is not defined.')
  process.exit(1);
}


mongoose.connect('mongodb://localhost/o-school', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
} )
  .then(() => console.log('connected to mongoDb'))
  .catch((err) => console.error('could not connect to mongoDb..', err)); 

app.use(express.json())
app.use('/api/user', user)

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