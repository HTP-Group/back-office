import mongoose from 'mongoose';

const Price = mongoose.model('Pricing', new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'teacher_id' 
  },
  name: {
    type: mongoose.Schema.Types.String,
    ref: 'teacher_name' 
  },
  comments: mongoose.Schema.Types.String,
}))

async function createPrice(teacher_id, teacher_name) {
  const price = new Price({
    teacher_id,
    teacher_name,
    students: ['Jeremy', 'alicia'],
    courses: ['maths, histoire']
  })
  const result = await price.save()
  console.log(result)
}
createPrice()