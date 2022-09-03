const express = require('express');
const fs = require('fs');
const app = express();
const morgan = require('morgan');
const authorize = require('./authorize');

// req => middleware => res
app.use([morgan('dev'), authorize]);

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.listen(5000, () => {
  console.log(`server is listened to`);
});
