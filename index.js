const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { DataBase2 } = require('./config.js');
const Post = require('./models/post');

app.get('/', function (req, res) {
  res.send('Serveris veikia');
});

// // POST method route
// app.post('/', function (req, res) {
//   res.send('POST request to the homepage');
// });

app.listen(4000);
