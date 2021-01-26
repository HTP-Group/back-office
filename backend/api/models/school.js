import mongoose from 'mongoose';

  const schoolSchema = new mongoose.Schema({
    name: String, 
    teachers: [ String ], 
    events: [ String ],
    students: [ String ],
    isOpen: Boolean
  })
  const School = mongoose.model('School', schoolSchema);

  // Create A school
  async function createSchool() {
    const school = new School({
      name: 'Commerson School',
      teachers: ['Martin', 'grisonet'],
      events: ['Annual party'],
      students: ['Thibault, Ramazan'],
      isOpen: true
    }); 
    const result = await school.save();
    console.log(result)
  }

  async function getSchool() {
    const schools = await School.find({
      // filters
    });
    console.log(schools)
  }

// getSchool()