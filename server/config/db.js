require('dotenv').config();
const uri = process.env.MONGODB_URI;


const mongoose = require('mongoose');

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connection successful'))
  .catch(err => console.error('MongoDB connection error:', err));
