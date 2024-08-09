// index.js

const express = require('express');
const path = require('path');
const workingHours = require('./middleware/workingHours');

const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Apply the working hours middleware to all routes
app.use(workingHours);

// Define the routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/services', (req, res) => {
  res.render('services', { title: 'Our Services' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
