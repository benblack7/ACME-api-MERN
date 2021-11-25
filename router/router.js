const express = require('express');
const router = express.Router();
const Buyers = require('../models/buyers');

router.get('/buyers', function(req, res, next){
  Buyers.find({}).then(function(buyers){
    res.send(buyers);
  }).catch(next);
});

router.post('/buyers', function(req, res, next) {
  console.log(req.body, " Request incoming")
  Buyers.create(req.body).then(function(buyer){
    res.send(buyer);
  }).catch(next);
})

module.exports = router;