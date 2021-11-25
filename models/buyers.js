const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BuyersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  interests: {
    type: String,
    required: true
  },
  location: {
    type: Number,
    required: false
  }
})

const Buyers = mongoose.model('buyer', BuyersSchema);

module.exports = Buyers;