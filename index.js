const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017');
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.use(express.json());
app.use('/api',require('./routes/routes'));

app.use(function(err,req,res,next){
  res.status(422).send({error: err.message});
})

app.listen(3001, function() {
  console.log('Listening on Port 3001');
})