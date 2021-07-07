const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

app.listen(4000);
