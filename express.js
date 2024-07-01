const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app
app.use('/nimba005/ecommerce', express.static(path.join(__dirname, 'build')));

// Handles any requests that don't match the ones above
app.get('/nimba005/ecommerce/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server listening on ${port}`);