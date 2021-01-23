const mongoose = require('mongoose');
const users = require('./routes/users');
const express = require('express');
const app = express();


mongoose.connect('mongodb://localhost/o-school', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
} )
  .then(() => console.log('connected to mongoDb'))
  .catch((err) => console.error('could nod connect to mongoDb..', err)); 

app.use(express.json())
app.use('/api/users', users)

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