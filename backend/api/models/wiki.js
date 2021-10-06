import mongoose from 'mongoose';

  const wikiSchema = new mongoose.Schema({
    name: String, 
    teachers: [ String ], 
    events: [ String ],
    students: [ String ],
    isOpen: Boolean
  })
  const Wiki = mongoose.model('Wiki', wikiSchema);

  // Create A school
  async function createWiki() {
    const wiki = new Wiki({
      name: 'Commerson School',
      teachers: ['Martin', 'grisonet'],
      events: ['Annual party'],
      students: ['Thibault, Ramazan'],
      isOpen: true
    }); 
    const result = await wiki.save();
    console.log(result)
  }

  async function getContent() {
    const wikis = await Wiki.find({
      // filters
    });
    console.log(wikis)
  }

// getSchool()