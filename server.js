// index.js

const express = require('express');
const app = express();
const port = 3000;

// Simple route for the home page
app.get('/', (req, res) => {
  res.send('THis is a reverse proxy example. Nginx forwarding requests to an express application');
});


app.get('/ghana', (req, res) => {
    res.json({
        msg:"Hello Ghana"
    });
  });

// Start the server
app.listen(port, () => {
  console.log(` app listening at http://localhost:${port}`);
});
