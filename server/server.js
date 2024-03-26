// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // To use environment variables

// Import routes here
//const someRoute = require('./routes/someRoute');

// Initialize express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

console.log(process.env.MONGODB_URI);

// Database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Use routes
//app.use('/api/somepath', someRoute);

// Catch-all for 404 errors
app.use((req, res, next) => {
  res.status(404).send('Resource not found');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
