import mongoose from 'mongoose';
import user from './api/routes/user.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express()

mongoose.connect('mongodb://localhost/back-office', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
} )
  .then(() => console.log('connected to mongoDb'))
  .catch((err) => console.error('could not connect to mongoDb..', err)); 

app.use(express.json())
app.use(cors());
app.use('/api', user)

const port = process.env.PORT || 3005;
app.listen(port, () => console.log(`Listening on port ${port}`))
