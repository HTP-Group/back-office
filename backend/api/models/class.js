const Joi = require('joi');
const mongoose = require('mongoose');

const Classe = mongoose.model('Classe', new mongoose.Schema({
  teacher_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'teacher_id' 
  },
  teacher_name: {
    type: mongoose.Schema.Types.String,
    ref: 'teacher_name' 
  },
  students: [ String ],
  courses: [ String ]
}))

async function createClasse(teacher_id, teacher_name) {
  const classe = new Classe({
    teacher_id,
    teacher_name,
    students: ['Jeremy', 'alicia'],
    courses: ['maths, histoire']
  })
  const result = await classe.save()
  console.log(result)
}
createClasse()