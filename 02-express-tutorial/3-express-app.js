const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// setup static middleware
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// adding to static assets
// SSR
// });

app.all('*', (req, res) => {
  res.send('Resource Not found');
});

// app.listen
app.listen(5000, () => {
  console.log(`server is listening on port 5000`);
});
