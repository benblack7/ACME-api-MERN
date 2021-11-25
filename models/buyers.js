const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BuyersSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name required']
  },
  interests: {
    type: String,
    required: [true, 'Interests are required']
  },
  location: {
    type: Number,
    required: [true, 'Location is required']
  }
})

const Buyers = mongoose.model('buyer', BuyersSchema);

module.exports = Buyers;