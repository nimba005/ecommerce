const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const app = express();

// Middleware
app.use(bodyParser.json());

// Explicitly configure CORS
app.use(cors({
  origin: 'http://localhost:8081', // Allow requests from this origin
  methods: ['GET', 'POST'], // Allow these HTTP methods
  allowedHeaders: ['Content-Type'] // Allow these headers
}));

// Additional debugging middleware
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
});

// Serve static files from the React app
app.use('/nimba005/ecommerce', express.static(path.join(__dirname, 'build')));

// API route to handle form submissions
app.post('/api/contact', (req, res) => {
  console.log('Request Headers:', req.headers);
  const { name, email, message } = req.body;
  console.log(`Received contact form submission: ${name}, ${email}, ${message}`);
  res.json({ success: true, message: 'Message sent successfully!' });
});

// Handles any requests that don't match the ones above
app.get('/nimba005/ecommerce/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
