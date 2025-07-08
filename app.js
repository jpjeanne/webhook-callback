// Import Express.js
const express = require('express');

// Create an Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route for GET requests
app.get('/', (req, res) => {
  res.status(200).send('testing');
});

// Route for POST requests
app.post('/', (req, res) => {
  const timestamp = new Date().toISOString().replace('T', ' ').slice(0, 19);
  console.log(`\n\nWebhook received on ${timestamp}\n\n`);
  console.log(JSON.stringify(req.body, null, 2));
  res.status(200).end();
});

// Start the server
app.listen(port, () => {
  console.log(`\nWebhook is listening on port ${port}\n`);
});
