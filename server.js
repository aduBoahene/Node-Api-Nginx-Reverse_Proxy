// index.js

const express = require('express');
const app = express();
const port = 3000;

// Simple route for the home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
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
