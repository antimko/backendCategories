const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const { mongoDbString } = require('./config.js');
const Post = require('./models/post');

mongoose
  .connect(mongoDbString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('Conneced to my Mongoose');
    app.listen(4000);
  })
  .catch((err) => console.error(err.message));

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.status(200).json('Serveris veikia on port 4000');
});

// // POST method route
// app.post('/', function (req, res) {
//   res.send('POST request to the homepage');
// });

app.listen(4000);
