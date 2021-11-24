const express = require('express');
const app = express();

app.get('/api', (req, res) => res.send('It Works!'));

app.listen(3001, function() {
  console.log('Listening on Port 3001');
})